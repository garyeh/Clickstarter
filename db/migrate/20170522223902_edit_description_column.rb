class EditDescriptionColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :rewards, :decsription, :description
  end
end
