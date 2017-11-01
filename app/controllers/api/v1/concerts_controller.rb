class Api::V1::ConcertsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    @concert = current_user.concerts
    render json: @concert
  end

  def show
    # @concert = Concert.find(params[:id])
    # @bands = @concert.bands
    # render json: Concert.all
  end

  def create
    @band = Band.find(params[:id])
    @concert = Concert.new(concert_params)
    @concert.band = @band

    userconcert = Userconcert.new(concert: @concert, user: current_user)
    concertband = Concertband.new(concert: @concert, band: @concert.band )
    if userconcert.save && concert.save && concertband
      concert = Concert.last
      render json: concert
    end
  end

  private

  def concert_params
    params.require(:concert).permit(:user_id, :concert_id, :band, :year, :venue, :opener, :attendees, :notes, :setlist)
  end


end
