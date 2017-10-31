class Api::V1::ConcertsController < ApplicationController

  def index
    concerts = []
      latest_concert = Concert.last
      concert = Concert.all
      first_concert = Concert.first
    render json: Concert.all
  end

  def show
    concert = Concert.find(params[:id])
    render json: Concert.all
  end

  def create
      concert = Concert.new(concert_params)
    if concert.save
      concert = Conceert.last
      # entry = { id: review.id, rating: review.rating, description: review.description, username: review.user.username, avatar: review.user.avatar, beer_id: review.beer_id, created_at: review.created_at}

      render json: entry
    end
  end

  private

  def concert_params
    params.require(:concert).permit(:user_id, :concert_id, :band, :year, :venue, :opener, :attendees, :notes, :setlist)
  end


end
