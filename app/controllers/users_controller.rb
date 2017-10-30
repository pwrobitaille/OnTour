class UsersController < ApplicationController

  def show
    if current_user
      @user_id = current_user.id
    else
      @user_id = ""
    end
  end

  def index

  end
end
