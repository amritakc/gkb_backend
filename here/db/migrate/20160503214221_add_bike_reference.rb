class AddBikeReference < ActiveRecord::Migration
  def change
  	add_reference :imgs, :bike, index: true, foreign_key: true
  end
end
