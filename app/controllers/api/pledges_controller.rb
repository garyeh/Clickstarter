class Api::PledgesController < ApplicationController
  def create
    reward = Reward.find_by(id: params[:id])
    
  end
end
