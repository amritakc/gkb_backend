class BikesController < ApplicationController
  def index
  end

  def new
  end

  def create
    bike = Bike.new(donor:params[:donor],type:params[:type_bike],brand:params[:brand],value:params[:value],barcode:params[:barcode],ebay:params[:ebay])
    if bike.save

    else
      flash[:errors] = bike.errors.full_messages
    end

    redirect_to :back
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end


end
