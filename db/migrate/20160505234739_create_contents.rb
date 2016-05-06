class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :content
      t.string :htmlpage
      t.string :section

      t.timestamps null: false
    end
  end
end
