class FixIndices < ActiveRecord::Migration[5.0]
  def change
    remove_index :projects, :category_id

    add_index :projects, :creator_id
    add_index :projects, :category_id
  end
end
