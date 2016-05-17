Rails.application.routes.draw do

  devise_for :users#, :controllers => {sessions: 'sessions'} 
  # devise_for :admins
  # root to: 'admins#index'
  root to: 'application#angular'

  get 'sections/:section' => 'sections#show'


  get 'contents/index'

  get 'contents/show/:id' => 'contents#show'

  get 'contents/edit/:id' => 'contents#edit'

  get 'contents/new' => 'contents#new'

  post 'contents/create' => 'contents#create'
  

  patch 'contents/update/:id' => 'contents#update'


  delete 'contents/destroy/:id' => 'contents#destroy'

  get 'contents/section/:section' => 'contents#section'



  get 'bikes/index'

  get 'bikes/new'

  post 'bikes/create' =>'bikes#create'

  get 'bikes/show/:id' =>'bikes#show'

  get 'bikes/edit/:id' => 'bikes#edit'

  post 'bikes/update/:id' => 'bikes#update'

  delete 'bikes/destroy/:id' => 'bikes#destroy'

  get '*path' => redirect('/#/home')
  
end
