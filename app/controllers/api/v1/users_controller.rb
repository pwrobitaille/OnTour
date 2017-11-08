class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    user = current_user

    concert = current_user.concerts
    band = ConcertSerializer.bands(concert)

# //top venue
    top_venue = Concert.group(:venue).order("count_id DESC").limit(1).count(:id)


    top_venue_array = []

    top_venue.each do |key, value|
      venue_name = key
      number_of_shows = value
      top_venue_array << {venue: venue_name, shows: number_of_shows}
    end

#//top venue
    shows_by_year = Band.joins(:concerts).group(:year).order("count_concert_id DESC").count(:concert_id)

    shows_per_year = []

    shows_by_year.each do |key, value|
      year = key
      show_count = value
      shows_per_year << {year: year, show_count: show_count}
    end

#//top band
    top_band_id = Band.joins(:concert_bands).group(:band_id).order("count_concert_id DESC").limit(1).count(:concert_id)

    top_band_shows = []

    top_band_id.each do |key, value|
      band_id = key
      number_of_shows = value
      active_band = Band.find(band_id)
      top_band_shows << {band: active_band, shows: number_of_shows}
    end

    render json: {topBandShows: top_band_shows, concert: band, user: user, showsPerYear: shows_per_year, topVenue: top_venue_array}

  end

  def show

  end

end
