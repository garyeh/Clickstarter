export const createPledge = pledge => (
  $.ajax({
    method: 'POST',
    url: `/api/rewards/${pledge.reward_id}/pledges`,
    data: { pledge }
  })
);
