# == Schema Information
#
# Table name: rewards
#
#  id           :integer          not null, primary key
#  project_id   :integer          not null
#  title        :string           not null
#  amount       :integer          not null
#  limit        :integer          not null
#  description  :text             not null
#  deliver_date :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Reward < ApplicationRecord
  validates :project_id, :title, :description, presence: true
  validates :amount, :limit, numericality: true

  belongs_to :project
  has_many :pledges
  has_many :backers, through: :pledges, source: :backer
end
