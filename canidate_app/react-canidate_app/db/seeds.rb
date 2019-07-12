# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Canidate.create!(name: 'Cory Booker', photo: 'https://media1.fdncms.com/clevescene/imager/u/slideshow/4981594/corybooker.jpg')
Canidate.create!(name: 'Kamala Harris', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Senator_Harris_official_senate_portrait.jpg/1200px-Senator_Harris_official_senate_portrait.jpg')
Canidate.create!(name: 'Joe Biden', photo: 'http://img.wennermedia.com/article-leads-vertical-600/joe-biden-c9483892-d69f-4566-a815-15e0abe26b84.jpg')
Canidate.create(name: 'Pete Buttigieg', photo: 'https://urbanmilwaukee.com/wp-content/uploads/2018/04/Pete_Buttigieg_Official_Portrait.jpg')
Canidate.create!(name: 'Julian Castro', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg/1200px-Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg')
Canidate.create!(name: 'John Delaney', photo: 'https://bloximages.chicago2.vip.townnews.com/globegazette.com/content/tncms/assets/v3/editorial/7/b7/7b7f5369-e20b-5d6a-a3cb-da4c2fbcc03e/5b327a37f132d.image.jpg?resize=1200%2C1278')
Canidate.create!(name: 'Tulsi Gabbard', photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg')
Canidate.create!(name: 'Kirsten Gillibrand', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kirsten_Gillibrand%2C_official_portrait%2C_112th_Congress.jpg/1200px-Kirsten_Gillibrand%2C_official_portrait%2C_112th_Congress.jpg')
Canidate.create!(name: 'John Hickenlooper', photo: 'https://uploads.concordia.net/2018/08/21172532/John-Hickenlooper.jpg')
Canidate.create!(name: 'Jay Inslee', photo: 'http://www.governor.wa.gov/sites/default/files/images/Governor%20Jay%20Inslee%20Official%20Portrait.jpg')
Canidate.create!(name: 'Amy Klobuchar', photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Amy_Klobuchar.jpg')
Canidate.create!(name: 'Wayne Messam', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mayor_Messam.jpg/1200px-Mayor_Messam.jpg')
Canidate.create!(name: 'Beto O Rourke', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg/1200px-Beto_O%27Rourke%2C_Official_portrait%2C_113th_Congress.jpg')
Canidate.create!(name: 'Tim Ryan', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Rep._Tim_Ryan_Congressional_Head_Shot_2010.jpg')
Canidate.create!(name: 'Bernie Sanders', photo: 'http://networthcelebrities.com/wp-content/uploads/2015/11/Bernie-Sanders_6.jpg')
Canidate.create!(name: 'Eric Swalwell', photo: 'https://swalwell.house.gov/sites/swalwell.house.gov/files/wysiwyg_uploaded/ES%20Official%20Photo%20114th.jpg')
Canidate.create!(name: 'Elizabeth Warren', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/1200px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg')
Canidate.create!(name: 'Marianne Williamson', photo: 'https://pbs.twimg.com/profile_images/859507720814305281/nTvKAGL6_400x400.jpg')
Canidate.create!(name: 'Andrew Yang', photo: 'https://cdn.vox-cdn.com/thumbor/OI8ULB1VpTqL4HmFz0yh1j60WR0=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63572227/akrales_190411_3346_0152.0.jpg')

puts "#{Canidate.count} canidates created!"