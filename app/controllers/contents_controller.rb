class ContentsController < ApplicationController
  def index
  	@contents = Content.all
  end

  def create

    content = Content.new(title:params[:title],text:params[:text],current:params[:current],section:Section.find_by_name(params[:section]))
    if content.save

    else
      flash[:errors] = content.errors.full_messages
      @errors = flash[:errors]
      render :json => @errors
    end

    redirect_to :back

  end

  def show
  	# @inform = Content.find(params[:id])

  end

  def edit
  	# @inform = Content.find(params[:id])
  end

  def new
  	# content = Content.new(event:params[:event],message:params[:message])
   #  if Content.save

   #  else
   #    flash[:errors] = Content.errors.full_messages
   #  end

   #  redirect_to :back
  end
end