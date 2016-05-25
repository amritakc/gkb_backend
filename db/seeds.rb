# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#User.create(email:'user@gmail.com', encrypted_password:'#$taawktljasktlw4aaglj')
User.create(:email => 'user@gmail.com', :password => 'password', :password_confirmation => 'password')


# Default values for Section
Section.create(:name => 'announcements')
Section.create(:name => 'news')
Section.create(:name => 'bikes')
Section.create(:name => 'programs')

# Starting content for site
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Mongoose", :color=> "Navy Blue", :brand=>"Mountain Bike", :price=>100.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Repco Challenger", :color=> "Blue and Orange", :brand=>"Mountain Bike", :price=>110.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Funky Bike", :color=> "Zebra Stripe", :brand=>"RoadBike", :price=>300.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Abeni 10 Speed", :color=> "Yellow", :brand=>"RoadBike", :price=>210.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Yellow Bike", :color=> "Yellow", :brand=>"Bicycle", :price=>200.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Morrison Freeway", :color=> "Blue", :brand=>"RoadBike", :price=>170.00, :section=>Section.find_by_name("bikes"))
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"))
