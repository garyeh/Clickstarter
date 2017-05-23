import React from 'react';

const RewardDetail = ({reward, deleteReward}) => {
  return (
    <section className="detailBox">
      <h2 id="headerAmount">{`Pledge $${reward.amount}`}</h2>
      <p id="headerTitle">{reward.title}</p>
      <p id="headerDescription">{reward.description}</p>
      <div>{reward.deliver_date ? <div id="headerDelivery"><div>ESTIMATED DELIVERY</div><div>{reward.deliver_date}</div></div> : ""}</div>
      <p id="headerLimit">{`Limited (${reward.limit})`}</p>
    </section>
  );
};

export default RewardDetail;
