module Jekyll
    class FigureTag < Liquid::Tag
  
      def initialize(tag_name, text, tokens)
        super
        attributes = text.split(',')
        @number = attributes[0].strip
        @title = attributes[1].gsub!("\"","").strip
        @imgSource = attributes[2].gsub!("\"","").strip
      end
  
      def render(context)
        figure = "<h4><strong>Figure #{@number}: #{@title}</strong></h4>" +
        "<img src=\"images/#{@imgSource}\" alt=\"#{@title}\" />" 
        return figure
      end
    end
end

Liquid::Template.register_tag('figure', Jekyll::FigureTag)