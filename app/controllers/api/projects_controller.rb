class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end
  
  def destroy

  end

  private

  def project_params
    params.require(:project).permit(:title, :url, :description,
      :main_image_url, :end_date, :funding_goal, :details,
      :creator_id, :category_id)
  end
end
