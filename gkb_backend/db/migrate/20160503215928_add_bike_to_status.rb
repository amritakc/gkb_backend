class AddBikeToStatus < ActiveRecord::Migration
  def change
  	add_reference :bikes, :status, index: true, foreign_key: true
  end
end
