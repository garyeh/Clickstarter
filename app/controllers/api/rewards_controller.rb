class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.all
  end

  def create
    project = Project.find(params[:project_id])
    @reward = Reward.new(reward_params)
    @reward.project_id = project.id

    if @reward.save
      render json: @reward
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def destroy
    @reward = Reward.find(params[:id])
    @reward.destroy
    render json: @reward
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :amount, :limit,
    :description, :deliver_date)
  end
end
