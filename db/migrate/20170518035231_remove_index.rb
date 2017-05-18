class RemoveIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :projects, :creator_id
  end
end
