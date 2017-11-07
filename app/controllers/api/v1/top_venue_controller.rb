class Api::V1::TopVenueController < ApplicationController

  # /api/v1/top_artist
  # resource
  def index
    top_venue = Concert.most_active_venues(1)


    top_venue.each do |key, value|
      venue_name = key
      number_of_shows = value
      render json: {venue: venue_name, number_of_shows: number_of_shows}
    end
  end



end
