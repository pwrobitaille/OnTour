class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    user = current_user

    concert = current_user.concerts
    band = ConcertSerializer.bands(concert)

    top_venue = Concert.most_active_venues(1)

    show_each_year = []
    unorganized_bands = Band.joins(:concerts).group(:year).order("count_concert_id DESC").limit(5).count(:concert_id)
    show_each_year << unorganized_bands

    top_venue_array = []
    top_venue = Concert.most_active_venues(1)
    top_venue_array << top_venue

    # top_band_array = []
    # top_band =

    render json: {concert: band, user: user, showsPerYear: show_each_year, topVenue: top_venue_array}

  end

  def show

  end

end
