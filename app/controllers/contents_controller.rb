class ContentsController < ApplicationController
  def index
    contents = Content.order(created_at: :desc)
    render :json => contents
  end

  def create
    content = Content.new(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    if content.save
      render :json => {newContent: Section.find_by_name(params[:section]).contents.last}
    else
      
      @errors = content.errors.full_messages
      render :json => @errors
    end

  end
  def update
    
    content = Content.find(params[:id])
    content.update(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    
    @sec = Section.find_by_name(content.section.name).contents.order(created_at: :desc)
    
    render :json => {content: content}

  
  end
  def show
    @inform = Content.find(params[:id])
    render :json =>@inform
  end

  def edit
    
    @inform = Content.find(params[:id])
    

  end
  def destroy
  
    part = Content.find(params[:id]).section   

    #find the contents of the section from the content that is about to be deleted
    @sec = Section.find_by_name(part.name).contents.order(created_at: :desc)
    
    #destroy the content
    @deleted = Content.destroy(params[:id])

    render :json =>{content:@deleted} 


  end

  def new
   
  end

  
end
