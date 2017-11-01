class Api::V1::BandsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def create
    @band = Band.new(band_params)
  end

  def band_params
    params.require(:band).permit(:name)
  end
end
