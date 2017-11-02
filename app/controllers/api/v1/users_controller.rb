class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    @user = current_user
    render json: @user

  end

  def show
  end

end
