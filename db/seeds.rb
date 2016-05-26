
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

# Starting content for bikes
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1b.jpg")
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1e.jpg")
Content.create(:title =>"Mongoose", :color=> "Navy Blue", :brand=>"Mountain Bike", :price=>100.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1c.jpg")
Content.create(:title =>"Repco Challenger	", :color=> "Blue and Orange", :brand=>"Mountain Bike", :price=>110.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1d.jpg")
Content.create(:title =>"Funky Bike", :color=> "Zebra Stripe", :brand=>"RoadBike", :price=>300.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1h.jpg")
Content.create(:title =>"Abeni 10 Speed", :color=> "Yellow", :brand=>"RoadBike", :price=>210.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1f.jpg")
Content.create(:title =>"Yellow Bike", :color=> "Yellow", :brand=>"Bicycle", :price=>200.00, :section=>Section.find_by_name("bikes"),:url =>"https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1a.jpg")
Content.create(:title =>"Morrison Freeway", :color=> "Blue", :brand=>"RoadBike", :price=>170.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1f.jpg")
Content.create(:title =>"Raleigh Lightweight", :color=> "Purple", :brand=>"Road Bike", :price=>300.00, :section=>Section.find_by_name("bikes"),:url => "https://s3-us-west-1.amazonaws.com/gkbimages/client/bike1b.jpg")


#Default values for programs
Content.create(:title => "Sponsor-a-Bike", :text=>"For $50, community members can sponsor a bicycle in our work-4-program.", :section=>Section.find_by_name("programs"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/bike5.jpg")
Content.create(:title => "Transportation for Transformation", :text=>"We reinvest the money we make in our full-service bike shop into our programs that support our community.", :section=>Section.find_by_name("programs"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/commute.jpeg")
Content.create(:title => "Work-4-Bike", :text=>"Targeted toward low-income individuals who cannot afford a bicycle, this provide provides a free bicycle in exchange for six volunteer hours.", :section=>Section.find_by_name("programs"),:url=>"http://http://s3-us-west-1.amazonaws.com/gkbimages//client/smile.jpeg")
Content.create(:title => "Saturday Clinic", :text=>"A free, weekly bicycle repair clinic led by a group of dedicated volunteers, in which unsafe bicycles are repaired for community members.", :section=>Section.find_by_name("programs"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/gears.jpeg")
Content.create(:title => "Park Tool School", :text=>"A one-month certification course in which participants learn cycling and bicycle mechanics.", :section=>Section.find_by_name("programs"),:url =>"http://s3-us-west-1.amazonaws.com/gkbimages//client/tools.jpg")
Content.create(:title => "Good Karma Kids", :text=>"Targeted toward at-risk youth, this program pairs youth with adult volunteers to learn cycling and bicycle mechanics, in addition to learning the value of philanthropy.", :section=>Section.find_by_name("programs"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/kids.jpg")


#Default values for news
Content.create(:title => "Good Karma Kids", :text=>"Targeted toward at-risk youth, this program pairs youth with adult volunteers to learn cycling and bicycle mechanics, in addition to learning the value of philanthropy.", :section=>Section.find_by_name("news"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/kids.jpg")
Content.create(:title => "Saturday Clinic", :text=>"A free, weekly bicycle repair clinic led by a group of dedicated volunteers, in which unsafe bicycles are repaired for community members.", :section=>Section.find_by_name("news"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/gears.jpeg")
Content.create(:title => "Park Tool School", :text=>"A one-month certification course in which participants learn cycling and bicycle mechanics.", :section=>Section.find_by_name("news"),:url =>"http://s3-us-west-1.amazonaws.com/gkbimages//client/tools.jpg")
Content.create(:title => "Good Karma Kids", :text=>"Targeted toward at-risk youth, this program pairs youth with adult volunteers to learn cycling and bicycle mechanics, in addition to learning the value of philanthropy.", :section=>Section.find_by_name("news"),:url=>"http://s3-us-west-1.amazonaws.com/gkbimages//client/kids.jpg")