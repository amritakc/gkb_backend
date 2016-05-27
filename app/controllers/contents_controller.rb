class ContentsController < ApplicationController
  def index
    # retrieves all content in descending order
    contents = Content.order(created_at: :desc)
    render :json => contents
  end

# compresses and uploads image to s3 bucket
  def img
    source = Tinify.from_file(params[:file].tempfile.path)
    if source.store(
      service: 's3',
      aws_access_key_id: ENV['AWS_Access_Key_ID'],
      aws_secret_access_key: ENV['AWS_Secret_Access_Key'],
      region: 'us-west-1',
      path: 'gkbimages//client/'+params[:file].original_filename
      )
      render :json => {status: 0, data: 'https://s3-us-west-1.amazonaws.com/gkbimages//client/'+params[:file].original_filename}
    else 
      render :json => {status: 404, data: "Something went wrong with image upload"}
    end
  end

  def create

    # creating new content in the database and find the section by name
    p params
    content = Content.new(title:params[:title],
                          text:params[:text],
                          url: params[:url],
                          price: params[:price],
                          brand: params[:brand],
                          caption: params[:caption],
                          author: params[:author],
                          color: params[:color],
                          section:Section.find_by_name(params[:section]))


    if content.save
      render :json => {content: Section.find_by_name(params[:section]).contents.last}
    else
    # error if content does not get saved in database
      @errors = content.errors.full_messages
      render :json => @errors
    end
  end

  def update
    # finding content by :id and updating content
    content = Content.find(params[:id])
    content.update(title:params[:title],
                   text:params[:text],
                   url: params[:url],
                   price: params[:price],
                   brand: params[:brand],
                   caption: params[:caption],
                   author: params[:author],
                   color: params[:color],
                   section: Section.find_by_name(params[:section]))
    
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
