class Api::V1::TopBandController < ApplicationController

  def index
    # user = current_user.concerts
    # band = ConcertSerializer.bands(@concert)
    # top_band = Band.joins(:concert_bands).group(:band_id).order("count_concert_id DESC").limit(1).count(:concert_id)
    # binding.pry
    top_band_id = Band.most_active(1)

    top_band_id.each do |key, value|
      band_id = key
      number_of_shows = value

      active_band = Band.find(band_id)
      render json: {band: active_band, number_of_shows: number_of_shows}
    end
  end

  def show
    top_band = Band.most_active(1)
    render json: top_band
  end



end
