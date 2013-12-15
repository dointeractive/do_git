# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.berkshelf.enabled = true
  config.omnibus.chef_version = :latest
  config.vm.box = "precise64"
  config.vm.network :private_network, ip: "10.0.0.10"

  config.vm.provision :shell, inline: '{ echo export LANGUAGE=en_US.UTF-8; \
                                         echo export LANG=en_US.UTF-8; \
                                         echo export LC_ALL=en_US.UTF-8; } \
                                         | sudo tee /etc/profile.d/lang.sh

                                        sudo chmod +x /etc/profile.d/lang.sh
                                        . /etc/profile.d/lang.sh

                                        locale-gen en_US.UTF-8
                                        sudo dpkg-reconfigure locales

                                        sudo update-locale LC_ALL=en_US.UTF-8'

  config.vm.provision :chef_solo do |chef|
    chef.add_recipe "rails"
  end
end
