require 'fileutils'

module Jekyll
    class RedirectGenerator < Generator
        def initialize(config)
            @config = config
        end

        def generate(site)
            site.config['redirect_pages'] = redirect_pages(site)
            site.config['redirect_directories'] = redirect_directories(site)
            config_name = site.config['nginx_host'] == true ? 'redirects.conf' : 'web.config'
            
            write_redirects(site, config_name)
        end

        def write_redirects(site, name)
          config_file = Page.new(site, site.source, '', name)
          config_file.content = File.read(File.join(site.source, name))
          config_file.render(Hash.new, site.site_payload)

          FileUtils.mkdir_p(site.dest)
          File.write(File.join(site.dest, name), config_file.output);

          site.static_files << config_file
        end

        def redirect_pages(site)
            pages = site.pages.find_all { |p| p.data.has_key?('previous_url') }

            pages.map! do |page|
                previous_url = page.data['previous_url'].split(',')
                previous_url.map!{ |url| url.strip }

                { 'url' => page.url, 'previous_url' => previous_url.uniq }
            end
            
            if site.config['capital_casing_redirects'] == true
              site.pages.each do |page|	
                if page.url =~ /[A-Z]/	
                    pages.push({	
                        'url' => page.url,	
                        'previous_url' => page.url.downcase.sub('.html', '')	
                    })	
                end	
              end
            end

            pages
        end

        def redirect_directories(site)
            categories = NavigationGenerator.new(@config).categories(site)

            redirect_directories = []

            categories.each do |key, category|
                category.each do |item|
                    redirect_directories << redirect('', item) if item.has_key?('items')
                end
            end

            redirect_directories.flatten
        end

        def redirect(path, directory)
            result = []

            page = first_page(directory)

            if path.empty?
                path = directory['path']
            else
                path = path + '/' + directory['path']
            end
            if page
                url = page['path'].sub('.html', '')
                url = path + '/' + url unless path.empty?

                result << { 'path' => path, 'url' => url }
            end

            directory['items'].each do |item|
                result << redirect(path, item) if item.has_key?('items')
            end
            result
        end

        def first_page(directory)
            page = directory['items'].find { |item| !item.has_key?('items') }

            page = { 'path' => directory['items'].first['path'] } unless page

            page
        end

    end
end
