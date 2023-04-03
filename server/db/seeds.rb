require 'crack/xml'

# data = File.read("../../app/assets/sample-data/data.txt") # this doesn't work
data = File.read(File.expand_path("../../app/assets/sample-data/data.txt", __FILE__))
# The __FILE__ variable represents the current file (db/seeds.rb) and ../../app/assets/sample-data/data.txt is the relative path to the data.txt file from db/seeds.rb.


parsed_data = Crack::XML.parse(data)
items = parsed_data["rss"]["channel"]["item"]

puts items.count

# convert availibility to a boolean value
def convert_availability (item)
  if item["g:availability"] == "in stock"
    true
  else false
  end
end

Product.destroy_all

items.each do |item|
  Product.create(
    :product_name => item["g:product_name"],
    :description => item["description"],
    :price => item["g:price"],
    :image => item["g:image_link"],
    :availability => convert_availability(item),
    :product_category => item["g:product_category"],
    :brand => item["g:brand"],
    :gtin => item["g:gtin"]
  )
end

puts "#{Product.count} products successfully created"
