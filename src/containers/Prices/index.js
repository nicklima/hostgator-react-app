import React from 'react';

import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Plans from '~/components/Plans';

import { Main } from '~/styles/shared';

const Prices = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Plans />
      </Main>
    </>
  );
};

export default Prices;
