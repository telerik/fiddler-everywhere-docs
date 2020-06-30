module Reading
  class RemoveInheritanceGenerator < Jekyll::Generator
    def generate(site)	
      if site.config['platform'] == "aspnet-ajax"
        site.pages.each do |p|			
          if p.data["description"] == "Client-side API Reference"
            p.content.sub!(/(^#[^:]*).*/, '\1')
          end
        end
      end
		end
	end
end
