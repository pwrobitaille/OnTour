class Api::V1::ConcertBandsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index

  end

  def new
    @band = Band.find_by(id: params[:id])
    @concert = Concert.find_by(id: params[:id])
    @concertbands = ConcertBand.new
    binding.pry

  end

end
