Rails.application.routes.draw do


  get 'sections/:section' => 'sections#show'

  # get 'sections/show/:id' => 'sections#show'

  # get 'sections/edit/:id' => 'sections#edit'

  # get 'sections/new' => 'sections#new'

  # post 'sections/create' => 'sections#create'



  devise_for :admins
  root to: 'admins#index'

  get 'contents/index'

  get 'contents/show/:id' => 'contents#show'

  get 'contents/edit/:id' => 'contents#edit'

  get 'contents/new' => 'contents#new'

  post 'contents/create' => 'contents#create'
  # get 'contents/create/:title/:text/:section' => 'contents#create'

  # get 'contents/update/:id/:title/:text/:section' => 'contents#update'


  patch 'contents/update/:id' => 'contents#update'
  # get 'contents/destroy/:id' => 'contents#destroy'


  # delete 'contents/destroy/:id' => 'contents#destroy'

  get 'contents/section/:section' => 'contents#section'



  get 'bikes/index'

  get 'bikes/new'

  # get 'bikes/create'

  post 'bikes/create' =>'bikes#create'

  get 'bikes/show/:id' =>'bikes#show'

  get 'bikes/edit/:id' => 'bikes#edit'

  post 'bikes/update/:id' => 'bikes#update'

  delete 'bikes/destroy/:id' => 'bikes#destroy'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
