class ContentsController < ApplicationController
  def index
  	@contents = Content.all
    render :json => @contents
  end

  def create

    content = Content.new(title:params[:title],text:params[:text],current:params[:current],section:Section.find_by_name(params[:section]))
    if content.save

    else
      flash[:errors] = content.errors.full_messages
      @errors = flash[:errors]
      render :json => @errors
    end
    render :json => {mes: "created obj"}
    # redirect_to :back

  end
  def update

    content = Content.find(params[:id])

    content.update(title:params[:title],text:params[:text],current:params[:current],section:Section.find_by_name(params[:section]))

    redirect_to '/contents/show/%d' % params[:id]
  end
  def show
  	@inform = Content.find(params[:id])
    render :json =>@inform
  end

  def edit
  	# @inform = Content.find(params[:id])

    @inform = Content.find(params[:id])
    # response json data
     render :json =>@inform
  end
  def destroy

    Content.destroy(params[:id])

    #change redirects to messages
    redirect_to '/contents/index' 

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