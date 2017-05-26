Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :show, :create, :destroy, :update] do
      resources :rewards, only: [:index, :create, :destroy]
    end
    resources :rewards, only: [:show] do
      resources :pledges, only: [:create]
    end
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get "/search", to: "projects#search"
  end

  root "static_pages#root"
end
