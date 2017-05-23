# == Schema Information
#
# Table name: pledges
#
#  id         :integer          not null, primary key
#  reward_id  :integer          not null
#  backer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pledge < ApplicationRecord
  validates :reward_id, :backer_id, presence: true
  validates :reward_id, uniqueness: {scope: :backer_id}

  belongs_to :reward
  belongs_to :backer, foreign_key: :backer_id, class_name: 'User'
end
