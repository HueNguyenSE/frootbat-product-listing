Rails.application.routes.draw do
  root 'products#index'
  resources :products, except: [:show], param: :id do
    collection do
      get :autocomplete
    end
  end
  resources :users
  get 'products/search', to: 'products#index', as: 'product_search'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
