class CreatePledges < ActiveRecord::Migration[5.0]
  def change
    create_table :pledges do |t|
      t.integer :reward_id, null: false
      t.integer :backer_id, null: false

      t.timestamps
    end
    add_index :pledges, [:reward_id, :backer_id], unique: true
  end
end
