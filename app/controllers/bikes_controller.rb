class BikesController < ApplicationController
  def index
  end

  def new
  end

  def create
    bike = Bike.new(donor:params[:donor],type:params[:type],brand:params[:brand],value:params[:value],date_sold:[params:date_sold],barcode:[params:barcode],ebay:[params:ebay])
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
