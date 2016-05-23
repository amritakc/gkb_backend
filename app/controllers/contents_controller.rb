class ContentsController < ApplicationController
  def index
    contents = Content.order(created_at: :desc)
    render :json => contents
  end

  def create
    puts "****************"
    # puts params[:file].original_filename
    puts S3_BUCKET
    content = Content.new(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    if content.save
      obj = S3_BUCKET.object('/params[:file].original_filename')
      if obj.upload_file(params[:file].path, acl: 'public-read')
        content.update_attribute(:url, obj.public_url)
      end
      render :json => {content: Section.find_by_name(params[:section]).contents.last}
    else
      # flash[:errors] = content.errors.full_messages
      @errors = content.errors.full_messages
      render :json => @errors
    end
    # render :json => {success: "created content in the backend"}
    # redirect_to :back
    # puts '******************'
    # puts params
    # redirect_to :back
  end
  def update
    
    content = Content.find(params[:id])
    content.update(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    
    @sec = Section.find_by_name(content.section.name).contents.order(created_at: :desc)
    
    render :json => {content: content}

    # contents = content.section.contents.sort_by{|x| x.created_at}
    # p contents
    # render :json => {content: contents}
    # redirect_to '/contents/show/%d' % params[:id]
  end
  def show
    @inform = Content.find(params[:id])
    render :json =>@inform
  end

  def edit
    # @inform = Content.find(params[:id])

    @inform = Content.find(params[:id])
    # response json data
    # render :json =>@inform
  end
  def destroy
    #find the section for that particular section
    part = Content.find(params[:id]).section   

    #find the contents of the section from the content that is about to be deleted
    @sec = Section.find_by_name(part.name).contents.order(created_at: :desc)
    
    #destroy the content
    @deleted = Content.destroy(params[:id])

    render :json =>{content:@deleted} 
#   
    #change redirects to messages
    # redirect_to '/contents/index' 
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
