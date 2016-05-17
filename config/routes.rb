Rails.application.routes.draw do


  # devise_for :user method is responsible to generate all needed routes for devise, based on what modules have been defined in the User model
  devise_for :user

  # route to render angular layouts/application
  root to: 'application#angular'

  get 'sections/:section' => 'sections#show'

  # get 'sections/show/:id' => 'sections#show'

  # get 'sections/edit/:id' => 'sections#edit'

  # get 'sections/new' => 'sections#new'

  # post 'sections/create' => 'sections#create'



  get 'contents/index'

  get 'contents/show/:id' => 'contents#show'

  get 'contents/edit/:id' => 'contents#edit'

  get 'contents/new' => 'contents#new'

  post 'contents/create' => 'contents#create'
  # get 'contents/create/:title/:text/:section' => 'contents#create'

  # get 'contents/update/:id/:title/:text/:section' => 'contents#update'


  patch 'contents/update/:id' => 'contents#update'
  # get 'contents/destroy/:id' => 'contents#destroy'


  delete 'contents/destroy/:id' => 'contents#destroy'

  get 'contents/section/:section' => 'contents#section'



  get 'bikes/index'

  get 'bikes/new'

  # get 'bikes/create'

  post 'bikes/create' =>'bikes#create'

  get 'bikes/show/:id' =>'bikes#show'

  get 'bikes/edit/:id' => 'bikes#edit'

  post 'bikes/update/:id' => 'bikes#update'

  delete 'bikes/destroy/:id' => 'bikes#destroy'

  get '*path' => redirect('/#/home')
  
end
