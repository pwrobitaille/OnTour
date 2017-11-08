Rails.application.routes.draw do
  root "static_files#index"

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :concerts
      end
      # resources :user_concerts
      resources :concerts
      resources :band
      resources :top_band
      resources :top_venue

    end
  end

  get 'auth/:provider/callback',  to: 'sessions#create'
  get 'logout',                   to: 'sessions#destroy'

  get '*path', to: 'static_files#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
