class Api::V1::UsersController < ApplicationController

  def index

  end

  def show
    @user = current_user
    render json: @user
  end

end
