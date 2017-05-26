@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.main_image_url project.main_image_url
    json.description project.description
    json.creator project.creator.username
    json.category project.category
    json.end_date project.end_date
    json.funding_goal project.funding_goal
    json.raised project.rewards.map {|reward| reward.pledges.count * reward.amount}.reduce(:+)
    json.num_backers project.rewards.map {|reward| reward.pledges.count }.reduce(:+)
  end
end
