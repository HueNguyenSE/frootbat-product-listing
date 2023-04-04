Rails.application.routes.draw do
  resources :products
  resources :users
  get '/login' => 'session#new'
  post '/login' => 'session#create'
end
