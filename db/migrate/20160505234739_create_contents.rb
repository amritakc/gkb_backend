class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.string :text
      t.boolean :current, default: true
      t.references :section, index: true
      t.timestamps null: false
    end
  end
end
