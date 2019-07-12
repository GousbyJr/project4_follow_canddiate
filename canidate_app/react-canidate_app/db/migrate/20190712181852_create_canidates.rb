class CreateCanidates < ActiveRecord::Migration[5.2]
  def change
    create_table :canidates do |t|
      t.string :name
      t.string :party
      t.string :string
      t.string :bio
      t.string :photo

      t.timestamps
    end
  end
end
