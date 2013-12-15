# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!({
  name: 'test',
  orders_attributes: [ {
    number: rand(1000..9999),
    line_items_attributes: [{
      price: rand(100..9999)
    }, {
      price: rand(100..9999)
    }]
  }, {
    number: rand(1000..9999),
    line_items_attributes: [{
      price: rand(100..9999)
    }, {
      price: rand(100..9999)
    }]
  } ]
})
