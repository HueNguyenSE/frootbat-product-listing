class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name
      t.text :description
      t.text :image
      t.string :price
      t.boolean :availability
      t.string :product_category
      t.string :brand
      t.string :gtin

      t.timestamps
    end
  end
end
