# class Api::V1::NumberOfShowsPerYearController < ApplicationController
#
#   # /api/v1/top_artist
#   # resource
#   def index
#     shows_per_year = Band.shows_by_year
#
#     shows_per_year.each do |key, value|
#       year = key
#       number_of_shows = value
#       render json: {year: year, number_of_shows: number_of_shows}
#     end
#   end
#
#
#
# end
