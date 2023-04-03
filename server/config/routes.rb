Rails.application.routes.draw do
  resources :products
  resources :users
  post '/login', to: 'users#login'
  get '/profile', to: 'users#user_profile'
end
