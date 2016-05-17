class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  # angular action to ApplicationController that renders the layout
  def angular
    render 'layouts/application'
  end

  private
  def configure_permitted_parameters
    #added_attrs = [:email, :password]
    #devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    #devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
