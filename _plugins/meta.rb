class MetaTag < Liquid::Tag
  def initialize(tag_name, text, tokens)
    # convert 'prop:val prop:val' string to {prop=>val} hash
    @options = text.split.reduce({}) { |hash, tuple|
      key,value = tuple.split(':')
      hash[key] = value
      hash
    }
  end

  def render(context)
    attributes = @options.map { |k,v| "data-#{k}='#{v}'" }

    if @options.key? 'height'
      attributes.push "style='height: #{@options['height'].to_i + 50}px'"
    end

    "<div #{attributes.join(' ')}>"
  end
end

class EndMetaTag < Liquid::Tag
  def render(context)
    "</div>"
  end
end

Liquid::Template.register_tag('meta', MetaTag)
Liquid::Template.register_tag('endmeta', EndMetaTag)
