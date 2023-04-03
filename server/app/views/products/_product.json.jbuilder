json.extract! product, :id, :product_name, :description, :image, :price, :availability, :product_category, :brand, :gtin, :created_at, :updated_at
json.url product_url(product, format: :json)
