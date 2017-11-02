class ConcertBand < ApplicationRecord

  belongs_to :concert
  belongs_to :band

end
