class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    user = current_user

    concert = user.concerts
    concerts = ConcertSerializer.bands(concert)
    # binding.pry

#//top venue
    user_venues = {}

    Userconcert.where(user_id:current_user).each do |c|
      venues = Concert.where(id:c.concert.id)
      venues.each do |concert|
        venue = concert.venue
        if user_venues.has_key?(venue)
          user_venues[venue] += 1
        else
          user_venues[venue] = 1
        end
      end
    end

    top_user_venue = user_venues.select{|key, value| value == user_venues.values.max}

    top_venue = []
    venue_key = top_user_venue.keys[0]
    venue_value = top_user_venue.values[0]
    top_venue << {venue: venue_key, count: venue_value}


#//tshows per year

  shows_per_year = {}

  Userconcert.where(user_id:current_user).each do |c|
    years = Concert.where(id:c.concert.id)
    years.each do |concert|
      year = concert.year
      if shows_per_year.has_key?(year)
        shows_per_year[year] += 1
      else
        shows_per_year[year] = 1
      end
    end
  end

show_by_year = []

  shows_per_year.each do |key, value|
    year = key
    count = value
    show_by_year << {year: year, show_count: value}
  end

#//top band
    user_bands = {}

    Userconcert.where(user_id:current_user).each do |c|
      user_concerts = ConcertBand.where(concert_id:c.concert.id)
      user_concerts.each do |concert|
        band = Band.find(concert.band_id).name
        if user_bands.has_key?(band)
          user_bands[band] += 1
        else
          user_bands[band] = 1
        end
      end
    end

    top_user_band = user_bands.select{|key, value| value == user_bands.values.max}

    top_band = []
    band_key = top_user_band.keys[0]
    band_value = top_user_band.values[0]
    top_band << {band: band_key, count: band_value}

    render json: {topBandShows: top_band, concert: concerts, user: user, showsPerYear: show_by_year, topVenue: top_venue}

  end

  def show

  end

end
