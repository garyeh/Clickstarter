# == Schema Information
#
# Table name: rewards
#
#  id           :integer          not null, primary key
#  project_id   :integer          not null
#  title        :string           not null
#  amount       :integer          not null
#  limit        :integer          not null
#  decsription  :text             not null
#  deliver_date :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
