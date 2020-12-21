import React from 'react';
import PropTypes from 'prop-types';

import SkeletonBox from '~/components/SkeletonBox';
import { SkeletonDiv } from './styles';

import {
  CardSlick,
  Card,
  CardHeader,
  CardBody,
  CardPrices,
  CardBase,
  CardIcon,
  CardList,
  CardListItem,
} from '~/styles/cards';

const SkeletonCard = ({ idx }) => {
  return (
    <CardSlick key={`plans_card_skeleton_${idx}`}>
      <Card className="default">
        <CardHeader>
          <CardIcon>
            <SkeletonBox width="48px" height="48px" />
          </CardIcon>
          <SkeletonDiv>
            <SkeletonBox height="33px" />
          </SkeletonDiv>
        </CardHeader>
        <CardBody>
          <CardPrices>
            <SkeletonDiv>
              <SkeletonBox height="30px" />
            </SkeletonDiv>
            <SkeletonDiv>
              <SkeletonBox height="40px" />
            </SkeletonDiv>
          </CardPrices>

          <SkeletonBox height="40px" />
          <br />
          <SkeletonBox height="30px" count={2} />
        </CardBody>
        <CardBase>
          <CardList>
            {[1, 2, 3, 4, 5].map(item => {
              return (
                <CardListItem key={`list_item_${item}`}>
                  <SkeletonBox height="22px" />
                </CardListItem>
              );
            })}
          </CardList>
        </CardBase>
      </Card>
    </CardSlick>
  );
};

SkeletonCard.propTypes = {
  idx: PropTypes.number.isRequired,
};

export default SkeletonCard;
