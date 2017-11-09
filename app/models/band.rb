class Band < ApplicationRecord
  validates_presence_of :name

  has_many :concert_bands
  has_many :concerts, through: :concert_bands

  # def self.most_active(limit)
  #   Band.joins(:concert_bands).group(:band_id).order("count_concert_id DESC").limit(limit).count(:concert_id)
  #     # where("id IN (?)", Band.joins(:concert_bands).group(:band_id).order("count_concert_id DESC").limit(limit).count(:concert_id)
  #
  # end
end
