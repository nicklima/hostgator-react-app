import React from 'react';
import PropTypes from 'prop-types';

import {
  Selector,
  SelectorText,
  SelectorWrap,
  SelectorList,
  SelectorItem,
  SelectorItemText,
} from './styles';
import { RadioOn, RadioOff } from '~/icons';

const PlanSelector = ({ handleChange, selectedCycle }) => {
  const hostgatorSelectCycle = [
    { cycle: 'triennially', title: '3 anos' },
    { cycle: 'annually', title: '1 ano' },
    { cycle: 'monthly', title: '1 mês' },
  ];

  return (
    <Selector>
      <SelectorText>Quero pagar a cada:</SelectorText>
      <SelectorWrap>
        <SelectorList>
          {hostgatorSelectCycle.map((selector, idx) => {
            const { cycle, title } = selector;
            return (
              <SelectorItem
                key={`selector_cycle_${idx}`}
                onClick={() => handleChange(cycle)}
                active={cycle === selectedCycle}
              >
                {cycle === selectedCycle ? <RadioOn /> : <RadioOff />}
                <SelectorItemText>{title}</SelectorItemText>
              </SelectorItem>
            );
          })}
        </SelectorList>
      </SelectorWrap>
    </Selector>
  );
};

PlanSelector.propTypes = {
  selectedCycle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PlanSelector;
