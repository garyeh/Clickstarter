# == Schema Information
#
# Table name: projects
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  url            :string           not null
#  description    :text             not null
#  main_image_url :string
#  end_date       :string           not null
#  funding_goal   :integer          not null
#  details        :text
#  creator_id     :integer          not null
#  category_id    :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Project < ApplicationRecord
  validates :title, :url, :description, :end_date, :creator_id, :category_id, presence: true
  validates :url, uniqueness: true
  validates :title, uniqueness: {scope: :creator_id}
  validates :funding_goal, numericality: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'
end
