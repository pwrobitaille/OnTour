class Api::V1::ConcertsController < ApplicationController

def index
  render json: Concert.all
end

  def create
      review = Concert.new(concert_params)
    if review.save
      concert = Conceert.last
      # entry = { id: review.id, rating: review.rating, description: review.description, username: review.user.username, avatar: review.user.avatar, beer_id: review.beer_id, created_at: review.created_at}

      render json: entry
    end
  end

  private

  def concert_params
    params.require(:review).permit(:beer_id, :rating, :description, :user_id)
  end


end
