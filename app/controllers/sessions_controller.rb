class SessionsController < ApplicationController
  def create
    user = User.update_or_create(request.env["omniauth.auth"])
    redirect_to "/users/#{user.id}"
  end

end
