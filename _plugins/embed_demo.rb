require 'cgi'

module Jekyll
    class EmbedDemoTag < Liquid::Tag
        def initialize(tag_name, text, tokens)
            super

            @directory = text.strip
        end

        def render(context)
            url = context["page"]["url"]
            glob = File.join(Dir.pwd, url, @directory, "*.*")
            files = Dir.glob(glob)

            if files.empty?
                Jekyll.logger.warn "\nERROR: Demo path " + @directory + " is empty or don't exist.\n\tReferenced by #{url}\n\tDidn't find files: #{glob}"

                at_exit do
                    exit 1
                end
            else
                result = []

                files.each { |filename|
                    basename = File.basename(filename)
                    content = CGI.escapeHTML(File.read(filename))
                    result << "<pre data-file='#{basename}'>#{content}</pre>"
                }

                result << "<div class='runner'></div>"

                "<div class='demo-embed'>" + (result.join "\n") + "</div>"
            end
        end
    end
end

Liquid::Template.register_tag('embed_demo', Jekyll::EmbedDemoTag)

