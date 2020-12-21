import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '~/styles/variables';
import { ToolTipBox } from './styles';

const ToolTip = ({ tip, children, bgColor, multiline, className }) => {
  return (
    <>
      <p data-tip={tip}>{children}</p>
      <ToolTipBox
        className={className}
        place="bottom"
        type="dark"
        effect="solid"
        multiline={multiline}
        backgroundColor={bgColor}
      />
    </>
  );
};

ToolTip.propTypes = {
  tip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  multiline: PropTypes.bool,
  className: PropTypes.string,
};

ToolTip.defaultProps = {
  bgColor: colors.blueDark,
  multiline: true,
  className: '',
};

export default ToolTip;
