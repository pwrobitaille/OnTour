class Concert < ApplicationRecord
  validates_presence_of :year

  has_many :bands, through: :concert_bands
  has_many :concert_bands
  has_many :userconcerts
  has_many :users, through: :userconcerts

end
