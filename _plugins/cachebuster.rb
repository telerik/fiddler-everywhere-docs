Jekyll::Hooks.register :site, :after_init do |site, payload|
  if site.config['use_cachebusting'] != false
    site.config['assets'] = Hash.new unless site.config['assets']
    site.config['assets']['digest'] = true
    site.config['assets']['compress'] = { 'js' => true }
  end
end
