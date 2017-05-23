export const fetchRewards = projectId => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}/rewards`
  })
);

export const createReward = reward => (
  $.ajax({
    method: 'POST',
    url: `/api/projects/${reward.project_id}/rewards`,
    data: { reward }
  })
);

export const deleteReward = reward => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${reward.project_id}/rewards/${reward.id}`
  })
);
