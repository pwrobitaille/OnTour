# class Api::V1::UserConcertsController < ApplicationController
#   skip_before_action :verify_authenticity_token
#   protect_from_forgery unless: -> { request.format.json? }
#
#   def index
#     @concert = current_user.concerts
#     band = UserConcertSerializer.bands(@concert)
#     render json: band
#   end
#
#
#
#   def show
#     # @concert = Concert.find(params[:id])
#     # @bands = @concert.bands
#     # render json: @bands
#   end
#
#   def create
#     # search_value = params[:search_value]
#     # concert_search_result = Concert.where(params[:venue], "%#{search_value.downcase}%") || Band.where(params[:name], "%#{search_value.downcase}%")
#     # search_result = concert_search_result.to_json
#     # search_result = JSON.parse(search_result)
#     # render json: search_result
#
#     Band.find_or_create_by(name: params["band"])
#     opener = Band.find_or_create_by(name: params["opener"])
#     band = Band.where(name: params["band"])[0]
#     @concert = Concert.new(concert_params)
#      if @concert.save
#        ConcertBand.create!(band_id: band.id, concert_id: @concert.id, opener_id: opener.id)
#        Userconcert.create!(concert_id: @concert.id, user_id: current_user.id)
#       #  concat this render to the sate of the recent concert on the home page
#        render json: { concert: @concert, band: band, opener: params["opener"] }
#      else
#        render json: "This concert could not be saved"
#      end
#   end
#
#   private
#
#   def concert_params
#     params.require(:concert).permit(:user_id, :concert_id, :band, :year, :venue, :opener, :attendees, :notes, :setlist)
#   end
# end
