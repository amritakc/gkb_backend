class SectionsController < ApplicationController
  def index
  	

  end

  def show
  	@sec = Section.find_by_name(params[:section]).contents
    render :json => @sec
  end

  def edit
  	
  end

  def update
  	
  end

  def create


  end

  def new

  end
end
