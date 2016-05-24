class AdminsController < ApplicationController
  before_action :authenticate_user!

  def change_password
    @user = User.find(params["id"])
    if params["user"] == nil
      render:json => {errors: ["Fields cannot be blank"]}
      return
    end
    if @user.valid_password?(params["user"]["current_password"]) 
      if @user.update(user_params)
        sign_in @user, :bypass => true
        render:json => {success: ["Password successfully changed!"]}
      else
        render:json => {errors: @user.errors.full_messages}
      end
    else
      render:json => {errors: ["Incorrect current password"]}
    end
  end

  private
    def user_params
      params.require(:user).permit(:password,:password_confirmation)
    end
end
