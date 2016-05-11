class CreateBikes < ActiveRecord::Migration
  def change
    create_table :bikes do |t|
      t.string :donor
      t.string :model
      t.string :buyer
      t.string :brand
      t.float :value
      t.datetime :date_sold
      t.string :barcode
      t.string :ebay
      t.timestamps null: false
    end
  end
end
