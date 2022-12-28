Rails.application.routes.draw do
  resources :todos

  # root 'todos#index'
    # delete '/todos/:id' => 'todos#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
