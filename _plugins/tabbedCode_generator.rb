module Reading
  class TabbedCodeGenerator < Jekyll::Generator
    priority :high

    def generate(site)	
      @site = site
      @tabbed_code_marker_length = site.config['tabbed_code_marker_length'] ? site.config['tabbed_code_marker_length'] : 4
      @is_complex_tabbed_code_separator = site.config['tabbed_code_complex_separator'] ? site.config['tabbed_code_complex_separator'] : false

      unless site.config['skip_tabbed_code'] == true
        @converter = site.find_converter_instance(Jekyll::Converters::Markdown)	
        site.pages.each do |p|		
          #if p.url.include? 'calendar-getting-started'	 
            createTabbedCode(p, p.content)
          #end
        end
      end
		end
	
		def createTabbedCode(page, content)
      tab_start = /(`){#{@tabbed_code_marker_length}}\w/
      tab_end = @is_complex_tabbed_code_separator ? /(`){#{@tabbed_code_marker_length}}(\s{2,}|(>){1,}|(\s>)|(\s$)|\Z|\W(?![`{1,}])|$(?![\r\n]))/ : /(`){#{@tabbed_code_marker_length}}\s{2,}/

      first_index = content.index(tab_start)
      if first_index != nil
        # Fixed issue with files which have ending lines like CR LF instead of LF only.
        content.gsub!(/\r\n/, "\n")
        first_index = content.index(tab_start)
      end

      last_index = first_index && content.index(tab_end, first_index)
			indexes = []
			
			while first_index && !indexes.include?(first_index)
				if last_index.nil? 
					Jekyll.logger.warn "Tabbed Code Error:", "Failed to generate tabbed code in #{page.path}" 
				end
        #puts("fi: #{first_index} ; li: #{last_index} - #{content[first_index..last_index + @tabbed_code_marker_length]} ") 
				indexes.push(first_index)
				block = encode_liquid(content[first_index..last_index + @tabbed_code_marker_length])
				block = @converter.convert(block) 
				content[first_index..last_index + @tabbed_code_marker_length] = "<div class='tabbedCode'>" + block + "</div>"

				first_index = content.index(tab_start, last_index)
 				last_index = first_index && content.index(tab_end, last_index + @tabbed_code_marker_length)
			end
		end
		
		def encode_liquid(content)
		  content = content.gsub("{{", "{{ '{{' }}")
		end
	end
end
