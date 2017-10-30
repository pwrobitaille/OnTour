class Concert < ApplicationRecord
  validates_presence_of :year

  has_many :bands, through: :concert_bands
  has_many :concert_bands
  belongs_to :venue 

end
