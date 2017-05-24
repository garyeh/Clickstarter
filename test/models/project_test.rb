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
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  category       :string
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
