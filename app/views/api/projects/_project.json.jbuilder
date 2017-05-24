json.extract! project, :title, :url, :description,
  :main_image_url, :end_date, :funding_goal, :details,
  :creator, :category_id, :id
  json.rewards project.rewards do |reward|
    json.id reward.id
    json.project_id reward.project_id
    json.title reward.title
    json.amount reward.amount
    json.limit reward.limit
    json.description reward.description
    json.deliver_date reward.deliver_date
    json.pledges reward.pledges
  end
  json.raised project.rewards.map {|reward| reward.pledges.count * reward.amount}.reduce(:+)
  json.num_backers project.rewards.map {|reward| reward.pledges.count }.reduce(:+)
