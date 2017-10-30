Rails.application.routes.draw do
  root "static_files#index"

  namespace :api do
    namespace :v1 do
      resources :users
      resources :concerts
    end
  end

  get 'auth/:provider/callback',  to: 'sessions#create'

  get '*path', to: 'static_files#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
