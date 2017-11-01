class Api::V1::UsersController < ApplicationController

  def index
    @user = current_user
    render json: @user

  end

  def show
  end

end
