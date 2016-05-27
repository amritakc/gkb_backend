class AddAuthorToContent < ActiveRecord::Migration
  def change
    add_column :contents, :author, :string
  end
end
