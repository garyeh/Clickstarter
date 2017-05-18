class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.text :description, null: false
      t.string :main_image_url
      t.string :end_date, null: false
      t.integer :funding_goal, null: false
      t.text :details
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :projects, :creator_id, unique: true
    add_index :projects, :category_id, unique: true
    add_index :projects, :url, unique: true
    add_index :projects, [:title, :creator_id], unique: true
  end
end
