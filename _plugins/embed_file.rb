require 'cgi'

module Jekyll
    class EmbedFileTag < Liquid::Tag
        def initialize(tag_name, text, tokens)
            super

            @input = text.strip.split(" ")
            @path = @input.at(0);
            @hidden = false;
            @preview = false;

            @input.each do |param|
                if param == "hidden"
                    @hidden = true;
                end

                if param == "preview"
                    @preview = true;
                end
            end
        end

        def render(context)
            url = context["page"]["url"]
            path = File.dirname(context["page"]["path"]).match('documentation/[^/]+')[0]
            filepath = File.join(Dir.pwd, path, "examples", @path)
            result = []

            if File.file?(filepath)
                basename = File.basename(filepath)
                language = File.extname(basename).gsub!('.', '')
                content = CGI.escapeHTML(File.read(filepath))
                result << "<pre data-file='#{basename}' #{'data-hidden=\'true\'' unless !@hidden }>"
                result << "<code class='language-#{language}-multiple#{'-preview' unless !@preview }'>#{content}</code></pre>"
            elsif
                Jekyll.logger.warn "ERROR: Demo file #{filepath} not found. Referenced by #{url}"

                at_exit do
                    exit 1
                end
            end

            result.join "\n"
        end
    end
end

Liquid::Template.register_tag('embed_file', Jekyll::EmbedFileTag)
