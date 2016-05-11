class CreateImgs < ActiveRecord::Migration
  def change
    create_table :imgs do |t|
      t.string :url
      t.references :content, index: true
      t.timestamps null: false
    end
  end
end
