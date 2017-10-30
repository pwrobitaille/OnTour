class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.string :year, null: false
      t.text :attendees
      t.string :setlist
      t.text :notes
      t.belongs_to :venue

      t.timestamps 

    end
  end
end
