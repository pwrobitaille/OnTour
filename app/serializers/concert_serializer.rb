class ConcertSerializer < ActiveModel::Serializer
  attributes :id
  #:user_id

  def self.bands(concerts)
    all_concerts = []
    if concerts
      concerts.each do |concert|
        concert_band = ConcertBand.where(concert_id: concert.id)[0]
        # binding.pry
        if Band.where(id: concert_band.opener_id).empty?
          opener_band = ""
        else
          opener_band = Band.find(concert_band.opener_id)
        end
        # all_concerts << {"concert": [concert, "bands": concert_band.band, "opener": opener_band]}
        all_concerts << {"concert": concert.attributes.merge(bands: {band: concert_band.band, opener: opener_band})}
      end
    end
    return all_concerts
  end
end
#
# can't access UserConcert-does it need to be connected to the concert table?
#
# -replace concert_id with concert_bands_id in userconcerts
# UserConcert.where(concert_id: concert_band.id)
