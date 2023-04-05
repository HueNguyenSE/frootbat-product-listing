class Product < ApplicationRecord

  validates :product_name, :presence => true
  validates :price, :presence => true
  validates :image, :presence => true

end
