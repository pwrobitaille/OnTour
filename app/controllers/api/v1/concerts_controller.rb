class Api::V1::ConcertsController < ApplicationController
  skip_before_action :verify_authenticity_token



  def index
    @concert = current_user.concerts
    bands = ConcertSerializer.bands(@concert)
    render json: bands
  end



  def show
    concert = Concert.find(params[:id])
    render json: concert
  end

  def create

    Band.find_or_create_by(name: params["band"])
    opener = Band.find_or_create_by(name: params["opener"])
    band = Band.where(name: params["band"])[0]
    @concert = Concert.new(concert_params)
     if @concert.save
       ConcertBand.create!(band_id: band.id, concert_id: @concert.id, opener_id: opener.id)
       Userconcert.create!(concert_id: @concert.id, user_id: current_user.id)
      #  concat this render to the sate of the recent concert on the home page
       render json: { concert: @concert, band: band, opener: params["opener"] }
     else
       render json: "This concert could not be saved"
     end
  end

  def edit
    #need to figure out how to querey through the serializer to find all of the concert data 
    concert = current_user.concerts
    edit_concert = Concert.find(params[:id])
    concerts = ConcertSerializer.bands(edit_concert)
    binding.pry

    # edit_concert.id
    # concert_array = []
    # if concerts.include?(edit_concert.id)
    #   concert_array << edit_concert
    # end
    render json: concert_array

  end

  # def update
  #   user = current_user
  #   concert_to_update = Concert.find(concert_params[:user_id])
  #   user.concert_to_update
  # end

  private

  def concert_params
    params.require(:concert).permit(:user_id, :id, :band, :year, :venue, :opener, :attendees, :notes, :setlist)
  end
end
