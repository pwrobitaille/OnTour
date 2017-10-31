class Userconcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :userconcerts do |t|
      t.belongs_to :concert
      t.belongs_to :user

      t.timestamps
    end
  end
end
