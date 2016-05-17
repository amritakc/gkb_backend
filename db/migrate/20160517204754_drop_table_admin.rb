class DropTableAdmin < ActiveRecord::Migration
  def change
  	drop_table :admins
  end
end