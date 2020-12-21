import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { colors } from '~/styles/variables';

const SkeletonBox = ({ circle, color, count, hcolor, height, width }) => {
  return (
    <SkeletonTheme color={color} highlightColor={hcolor}>
      <Skeleton circle={circle} count={count} height={height} width={width} />
    </SkeletonTheme>
  );
};

SkeletonBox.propTypes = {
  circle: PropTypes.bool,
  color: PropTypes.string,
  count: PropTypes.number,
  hcolor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

SkeletonBox.defaultProps = {
  circle: false,
  color: colors.grayBlue,
  count: 1,
  hcolor: colors.whiteBlue,
  height: '50px',
  width: '100%',
};

export default SkeletonBox;
