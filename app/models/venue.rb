class Venue < ApplicationRecord
  validates_presence_of :name, :location
  # 
  #
  # def self.most_active(limit)
  #     where("id IN (?)", Concert.group(:venue).count(:id).
  #       order("count_venue_id DESC").
  #       limit(limit).
  #       count(:venue_id).keys)
  # end

end
