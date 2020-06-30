module Jekyll
  class PlatformsTag < Liquid::Tag
	
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
		page = context.environments.first["page"]
		folderNames = page["dir"].split('/')
		
		platformNames = context.registers[:site].config["platforms"].clone
		pageSuiteNames = page["platforms"]
		nonSlFolders = context.registers[:site].config["non-sl-folders"]
		
		result = String.new
		
		if (folderNames & ["libraries"]).any?
			unless pageSuiteNames.nil?
				splittedNames = pageSuiteNames.split(',')
				platformNames = platformNames.select {|suite| splittedNames.any? {|name| suite.downcase.include?(name)}}
			end
			
			if pageSuiteNames.nil?
				if (folderNames & nonSlFolders).any?
					platformNames.reject!{|suite| suite.downcase.include?("silverlight")}
				end
			end
		
			platformNames.each_with_index do |suite, index|				
				if index != 0
					result += "<span class='separator'> | </span>"
				end
				result += "<span class='platform'>#{suite}</span>"
			end
			
			"<div class='platforms'><div>#{@text} #{result}</div></div>"
		end
    end
  end
end

Liquid::Template.register_tag('platforms', Jekyll::PlatformsTag)
