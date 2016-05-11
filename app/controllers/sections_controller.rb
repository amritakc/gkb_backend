class SectionsController < ApplicationController
  def index
  	@sections = Section.all

  end

  def show
  	@two = Section.find(params[:id])
  	
  	# render => text
  	render :json =>@two
  	# @inform = Content.find(params[:id])
   #  render :json =>@inform

  end

  def edit
  	@two = Section.find(params[:id])
  	render :json =>@two

  	# @inform = Content.find(params[:id])
    
   #  render :json =>@inform

  end

  def update
  	section = Section.find(params[:id])
  	section.update(name:params[:name])
  	redirect_to '/sections/show/%id' %params[:id]
  	# content = Content.find(params[:id])

   #  content.update(title:params[:title],text:params[:text],current:params[:current],section:Section.find_by_name(params[:section]))

   #  redirect_to '/contents/show/%d' % params[:id]
  end

  def create

  	section = Section.new(name:params[:name])
  	if section.save

  	else
        flash[:errors] = section.errors.full_messages
        @errors = flash[:errors]
        render :json => @errors
    end
    render :json => {mes: "created sec"}
    # redirect_to :back

  	# content = Content.new(title:params[:title],text:params[:text],current:params[:current],section:Section.find_by_name(params[:section]))
   #  if content.save

   #  else
   #    flash[:errors] = content.errors.full_messages
   #    @errors = flash[:errors]
   #    render :json => @errors
   #  end
   #  render :json => {mes: "created obj"}
    # redirect_to :back


  end

  def new

  end
end
