class ConcertSerializer < ActiveModel::Serializer
  attributes :id

  def self.bands(concerts)
    all_concerts = []
    if concerts
      concerts.each do |concert|
        concert_band = ConcertBand.where(concert_id: concert.id)[0]
        if Band.where(id: concert_band.opener_id).empty?
          opener_band = ""
        else
          opener_band = Band.find(concert_band.opener_id)
        end
        all_concerts << {"concert": concert.attributes.merge(bands: {band: concert_band.band, opener: opener_band})}
      end
    end
    return all_concerts
  end
end
