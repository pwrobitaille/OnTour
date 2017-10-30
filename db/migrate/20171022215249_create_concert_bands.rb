class CreateConcertBands < ActiveRecord::Migration[5.1]
  def change
    create_table :concert_bands do |t|
      t.boolean :opener
      t.belongs_to :concert
      t.belongs_to :band

      t.timestamps
    end
  end
end
