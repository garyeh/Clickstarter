class Api::PledgesController < ApplicationController
  def create
    reward = Reward.find_by(id: params[:reward_id])

    @pledge = Pledge.new(pledge_params)
    @pledge.reward_id = reward.id
    if current_user
      @pledge.backer_id = current_user.id
    end

    if @pledge.save
      render json: @pledge
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  private

  def pledge_params
    params.require(:pledge).permit(:backer_id, :reward_id)
  end
end
