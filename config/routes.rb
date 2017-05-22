Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :show, :create, :destroy, :update]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
