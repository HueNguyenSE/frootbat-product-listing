class ApplicationController < ActionController::Base
  before_action :fetch_user
  before_action :is_authorized

  def is_authorized
    check_for_login unless is_signed_in
  end

  private
  def fetch_user
    @current_user = User.find_by :id => session[:user_id] if session[:user_id].present?
    session[:user_id] = nil unless @current_user.present?
  end

  def is_signed_in
    !!(@current_user || current_user)
  end

  def current_user
    auth_header = request.headers['Authorization']
    if auth_header
      user_token = auth_header.split(' ')[1]
      begin
        @user_id = JWT.decode(user_token, Rails.application.secrets.secret_key_base[0])[0]['user_id']
      rescue JWT::DecodeError
        nil
      end
    end

    if (@user_id)
      @user = User.find(@user_id)
    end
  end

  def check_for_login
    unless @current_user.present? || request.path == login_path
      redirect_to login_path
    end
  end

end
