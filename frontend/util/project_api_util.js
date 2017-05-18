export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);
