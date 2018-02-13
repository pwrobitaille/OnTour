class Api::V1::BandsInTownController < ApplicationController

  def create
    state = (params[:name])
    response = HTTParty.get("https://rest.bandsintown.com/artists/#{state}?app_id=OnTour",
    :headers => {'Content-Type' => 'application/json'})
    @band_array = JSON.parse(response.body)
    @band_list = @band_array['bands']
    render json: @band_list[0..5]

  end



end
