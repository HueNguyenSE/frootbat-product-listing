# class SearchController < ApplicationController
#   def index
#     search_field = params[:search].present? ? params[:search] : '*'

#     @products = Product.search(search_field, fields: %i[product_name description category brand gtin price])

#     respond_to do |format|
#       format.html { render :index }
#       format.turbo_stream do
#         render turbo_stream:
#           turbo_stream.update('products',
#           partial: 'products/products',
#           locals: { products: @products }
#         )
#       end
#     end
#   end
# end
