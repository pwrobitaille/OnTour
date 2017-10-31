class ChangeVenueToString < ActiveRecord::Migration[5.1]
  def change
    remove_column :concerts, :venue_id, :bigint
    add_column :concerts, :venue, :string
  end
end
