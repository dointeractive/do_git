ENV['LANGUAGE'] = ENV['LANG'] = ENV['LC_ALL'] = "en_US.UTF-8"

%w[apt postgresql::server rbenv::default rbenv::ruby_build].each do |name|
  include_recipe name
end

rbenv_ruby node['ruby_version']

%w[imagemagick vim libpq-dev].each do |name|
  package name
end

%w[ bundler rails ].each do |name|
  rbenv_gem name do
    ruby_version node['ruby_version']
  end
end
