require 'jekyll-assets'
class ThemePreviewTag < Liquid::Tag
  def initialize(tag_name, text, tokens)
    # convert 'prop:val prop:val' string to {prop=>val} hash
    @options = text.split.reduce({}) { |hash, tuple|
      key,value = tuple.split(':')
      hash[key] = value
      hash
    }
  end

  def render(context)
    baseurl = context['site']['baseurl']
    theme = @options['theme']

    "<div class='theme-preview'>" +
      "<link rel='stylesheet' href='#{baseurl}/npm/node_modules/@progress/kendo-theme-#{theme}/dist/all.css' />" +

      "<app-root theme='#{theme}'>" +
        "<span class='k-i-loading'></span>" +
      "</app-root>" +
    "</div>"
  end
end

Liquid::Template.register_tag('theme_preview', ThemePreviewTag)
