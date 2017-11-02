class ChangeOpenerToInteger < ActiveRecord::Migration[5.1]
  def change
    remove_column :concert_bands, :opener, :boolean
    add_column :concert_bands, :opener_id, :integer
  end
end
