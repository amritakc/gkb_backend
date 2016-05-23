class AdminsController < ApplicationController

  def change_password user
    console.log(User.find(user.userId))
  end

end
