class SectionsController < ApplicationController
  def show
    # returns contents for a particular section
  	@sec = Section.find_by_name(params[:section]).contents.order(created_at: :desc)
    render :json => @sec
  end
end
