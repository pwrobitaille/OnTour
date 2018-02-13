class Api::V1::UserConcertsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @concert = current_user.concerts
    band = UserConcertSerializer.bands(@concert)
    render json: band
  end



  def show
  end

  def create

    Band.find_or_create_by(name: params["band"])
    opener = Band.find_or_create_by(name: params["opener"])
    band = Band.where(name: params["band"])[0]
    @concert = Concert.new(user_concert_params)
     if @concert.save
       ConcertBand.create!(band_id: band.id, concert_id: @concert.id, opener_id: opener.id)
       Userconcert.create!(concert_id: @concert.id, user_id: current_user.id)
       render json: { concert: @concert, band: band, opener: params["opener"] }
     else
       render json: "This concert could not be saved"
     end
  end

  private

  def user_concert_params
    params.require(:concert).permit(:user_id, :concert_id, :band_id, :year, :venue, :opener, :attendees, :notes, :setlist)
  end
end
