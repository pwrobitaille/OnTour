class Band < ApplicationRecord
  validates_presence_of :name

  has_many :concerts, through: :concert_bands
  has_many :concert_bands

end
