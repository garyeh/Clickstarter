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
  validates :title, :url, :description, :end_date, :funding_goal, :creator_id, :category_id, presence: true
  validates :category_id, :creator_id, :url, uniqueness: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'
end
