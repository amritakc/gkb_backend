class ContentsController < ApplicationController
  def index
    # retrieves all content in descending order
    contents = Content.order(created_at: :desc)
    render :json => contents
  end

  def create
    # creating new content in the database and find the section by name
    content = Content.new(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    if content.save
      render :json => {newContent: Section.find_by_name(params[:section]).contents.last}
    else
    # error if content does not get saved in database
      @errors = content.errors.full_messages
      render :json => @errors
    end
  end

  def update
    # finding content by :id and updating content
    content = Content.find(params[:id])
    content.update(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    
    render :json => {content: content}
  end

  def show
    # retrieves content for a partial by :id 
    @inform = Content.find(params[:id])

    render :json =>@inform
  end

  def destroy
    # destroy the content
    @deleted = Content.destroy(params[:id])

    render :json =>{content:@deleted} 
  end


  
end
