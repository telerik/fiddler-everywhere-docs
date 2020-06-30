require 'open-uri'

Jekyll::Hooks.register :site, :after_init do |site|
  navigations_map = {
    "aspnet-ajax" => "asp-net-ajax", 
    "aspnet-core" => "asp-net-core",
    "aspnet-mvc" => "asp-net-mvc", 
    "dpl" => "document-processing", 
    "fiddler" => "fiddler", 
    "fiddler-core" => "fiddler-core",
    "fiddler-everywhere" => "fiddler-everywhere", 
    "justdecompile" => "just-decompile", 
    "justmock" => "just-mock", 
    "kendo-ui" => "kendo-ui-jquery", 
    "reporting" => "reporting", 
    "report-server" => "report-server", 
    "silverlight" => "silverlight", 
    "teststudio" => "test-studio", 
    "teststudio-apis" => "api-testing", 
    "teststudiodev" => "test-studio-dev-edition", 
    "uwp" => "uwp", 
    "winforms" => "winforms", 
    "wpf" => "wpf", 
    "xamarin" => "xamarin",
    "php-ui" => "php",
    "jsp-ui" => "jsp",
    "blazor" => "blazor-ui",
    "ar-vr" => "vr-lab",
    "tech-style-guide" => "store",
    "winui" => "win-ui"
  }

  html = ''
  platform = site.config['platform']
  if platform == 'unite-ux'
    html = open("http://cdn.telerik-web-assets.com/progress-navigation/latest/pair-unite-ux-fluid-rel.html").read
  else
    html = open("http://cdn.telerik-web-assets.com/telerik-navigation/stable/nav-%s-csa-abs-component.html" % [navigations_map[platform]]).read
  end
  File.write('./_includes/top-nav.html', html)

  if site.config['other_platforms']
    site.config['other_platforms'].each do |other_platform|
      html = open(navigation_url % [navigations_map[other_platform]]).read
      File.write("./_includes/top-nav-#{other_platform}.html", html)
    end
  end
end
