name 'rails'

%w[ postgresql rbenv ].each do |name|
  depends name
end
