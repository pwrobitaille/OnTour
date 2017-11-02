class Api::V1::BandsController < ApplicationController
  skip_before_action :verify_authenticity_token




  def create
    @band = Band.create(band_params)
    binding.pry
    render json: @band 
  end

  def band_params
    params.require(:band).permit(:name)
  end
end
