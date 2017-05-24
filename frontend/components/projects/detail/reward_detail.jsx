import React from 'react';

const RewardDetail = ({reward, deleteReward, currentUser,
  creator, fetchProjectDetail, createPledge, clearPledgeErrors, history }) => {
  const destroyReward = () => {
    deleteReward(reward).then(() => fetchProjectDetail(reward.project_id));
  };
  const makePledge = () => {
    if (reward && currentUser) {
      createPledge({ reward_id: reward.id, backer_id: currentUser.id })
        .then(() => {
          fetchProjectDetail(reward.project_id);
          clearPledgeErrors();
        });
    } else if (!currentUser) {
      history.push('/login');
    }
  };

  return (
    <section className="detailContainer">
      <div className="detailBox" onClick={makePledge}>
        <h2 id="headerAmount">{`Pledge $${reward.amount}`}</h2>
        <p id="headerTitle">{reward.title}</p>
        <p id="headerDescription">{reward.description}</p>
        <div>{reward.deliver_date ? <div id="headerDelivery"><div>ESTIMATED DELIVERY</div><div>{reward.deliver_date}</div></div> : ""}</div>
        <p id="headerLimit">{`Limited (${reward.pledges.length} of ${reward.limit})`}</p>
      </div>
      <div>
        {
          (currentUser && currentUser.username === creator) ?
          <button onClick={ destroyReward }>Delete this reward</button>
          :
          null
        }
      </div>
    </section>
  );
};

export default RewardDetail;
