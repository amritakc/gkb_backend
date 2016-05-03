class CreateImgs < ActiveRecord::Migration
  def change
    create_table :imgs do |t|
      t.string :url

      t.timestamps null: false
    end
  end
end
