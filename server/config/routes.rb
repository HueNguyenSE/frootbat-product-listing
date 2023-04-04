Rails.application.routes.draw do
  root :to => 'pages#home', :as => 'home'
  resources :products
  resources :users
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
