class ChangeCategory < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :category_id

    add_column :projects, :category, :string
  end
end
