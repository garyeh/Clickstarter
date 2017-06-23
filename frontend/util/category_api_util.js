export const fetchCategoryProjects = category => (
  $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: category
  })
);

export const fetchSearchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/search'
  })
);
