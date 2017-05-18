@projects.each do |project|
  json.set! project.id do
    json.title project.title
    json.main_image_url project.main_image_url
    json.description project.description
    json.creator_id project.creator_id
    json.category_id project.category_id
  end
end
