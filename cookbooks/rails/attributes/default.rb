RUBYVERSION = '2.0.0-p353'

default[:ruby_version] = RUBYVERSION

default[:postgresql][:users] = [
  {
    :username => 'vagrant',
    :password => 'wasd',
    :createdb => true,
    :login => true
  }
]

default[:rbenv][:user_installs] = [
  :user => 'vagrant',
  :global => 'system',
  :rubies => [ RUBYVERSION ]
]
