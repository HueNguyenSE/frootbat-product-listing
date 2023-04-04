class PagesController < ApplicationController
  def home
    # if there is a current user, direct them to index page of roots
    # else redirect them to the login page
    if @current_user.present?
      redirect_to products_path
    else
      redirect_to login_path
    end
  end
end
