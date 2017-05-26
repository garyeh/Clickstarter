export const fetchCategoryProjects = category => (
  $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: category
  })
);

export const fetchSearchProjects = value => (
  $.ajax({
    method: 'GET',
    url: '/api/search',
    data: {value}
  })
);
