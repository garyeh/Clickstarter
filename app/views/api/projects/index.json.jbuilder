@projects.each do |project|
  json.set! project.id do
    json.title project.title
    json.main_image_url project.main_image_url
    json.description project.description
    json.creator project.creator.username
    json.category_id project.category_id
    json.url project.url
  end
end
