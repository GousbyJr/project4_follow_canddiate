class AuthenticationController < ApplicationController
    def login
        handle_login params[:username], params[:password]
    end
    
    
    private
    
    def login_params
        params.permit(:username, :password)
    end
end
