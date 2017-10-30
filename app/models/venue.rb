class Venue < ApplicationRecord
  validates_presence_of :name, :location
  has_many :concerts

end
