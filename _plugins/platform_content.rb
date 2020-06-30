module Jekyll

    class PlatformContentTag < Liquid::Block
        def initialize(tag_name, text, tokens)
          @platform = text.strip
          super
        end

        def render(context)
          if context.registers[:site].config['platform'] == @platform
            super
          end
        end
    end

end

Liquid::Template.register_tag('platform_content', Jekyll::PlatformContentTag)
