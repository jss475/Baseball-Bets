Rails.application.routes.draw do
  #namespace :api do
  resources :players, only: %i[index show]
  resources :bets
  resources :users, only: [:index]
  resources :user_bets, only: %i[index show create destroy update]

  get "/validate_user", to: "users#show"
  patch "/add-money", to: "users#add_money"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
