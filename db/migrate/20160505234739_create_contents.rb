class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title , default: "none"
      t.string :text  , default: "none"
      t.string :caption  ,default: "none"
      t.string :color  ,default: "none"
      t.string :brand  ,default: "none"
      t.float  :price  ,default: 0.0
      t.string :url  ,default: "none"
      t.references :section, index: true
      t.timestamps null: false
    end
  end
end
