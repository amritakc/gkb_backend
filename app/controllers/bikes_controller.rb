class BikesController < ApplicationController
  def index
    @bikes = Bike.all
  end

  def new
  end

  def create
    bike = Bike.new(donor:params[:donor],model:params[:model],brand:params[:brand],value:params[:value],barcode:params[:barcode],buyer:params[:buyer],ebay:params[:ebay])
    if bike.save

    else
      flash[:errors] = bike.errors.full_messages
    end

    redirect_to :back
  end

  def show
    @one = Bike.find(params[:id])

  end

  def edit
    @one = Bike.find(params[:id])
  end

  def update

    # puts params
    bike = Bike.find(params[:id])
    # puts "bike"
    # Bike.find(1).update(donor:'CC')
    bike.update(donor:params[:donor],model:params[:model],brand:params[:brand],value:params[:value],buyer:params[:buyer],ebay:params[:ebay])

    redirect_to '/bikes/show/%d' % params[:id]

  end

  def destroy
    Bike.destroy(params[:id])

    redirect_to '/bikes/index' 
  end

end
