module Jekyll
  module FrontMatterLiquidParser
    def parse_front_matter(input)
      Liquid::Template.parse(input).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::FrontMatterLiquidParser)
