import React, { useEffect, useState } from 'react';

import PlansCard from '~/components/PlansCard';
import PlansSelector from '~/components/PlanSelector';
import Carousel from '~/components/Carousel';
import SkeletonCard from './Skeleton';

import {
  PlansSec,
  PlansContainer,
  PlansConditions,
  PlansConditionsButton,
} from './styles';

import { request } from '~/services/api';
import responseCodes from '~/helper/responseCodes';

const Plans = () => {
  const [hostgatorPlans, setHostgatorPlans] = useState(null);
  const [hostgatorCycle, setHostgatorCycle] = useState('triennially');

  const hostgatorCoupon = 'PROMOHG40';
  const getHostgatorData = () => {
    request({ endpoint: 'prices' })
      .then(response => {
        if (response.status === responseCodes.OK) {
          // Setando TimeOut para visualização do Skeleton
          setTimeout(() => {
            formatHostgatorPlans(response.data.shared.products);
          }, 3000);
        }
      })
      // eslint-disable-next-line
      .catch(error => console.log(error));
  };

  const formatHostgatorPlans = plan => {
    const filteredPlans = ['product_5', 'product_6', 'product_335'];
    const result = filteredPlans.reduce((r, k) => r.concat(plan[k]), []);
    setHostgatorPlans(result);
  };

  const handleCycle = value => {
    setHostgatorCycle(value);
  };

  useEffect(() => getHostgatorData(), []);
  return (
    <PlansSec>
      <PlansContainer id="planos">
        <PlansSelector
          handleChange={handleCycle}
          selectedCycle={hostgatorCycle}
        />

        <Carousel>
          {hostgatorPlans
            ? hostgatorPlans.map((plan, idx) => {
                return (
                  <PlansCard
                    data={plan}
                    renewOn={hostgatorCycle}
                    coupon={hostgatorCoupon}
                    key={`card_plan_${idx}`}
                  />
                );
              })
            : [1, 2, 3].map((item, idx) => {
                return (
                  <SkeletonCard idx={idx} key={`plans_card_skeleton_${item}`} />
                );
              })}
        </Carousel>

        <PlansConditions>
          <PlansConditionsButton>
            *Confira as condições da promoção
          </PlansConditionsButton>
        </PlansConditions>
      </PlansContainer>
    </PlansSec>
  );
};

export default Plans;
