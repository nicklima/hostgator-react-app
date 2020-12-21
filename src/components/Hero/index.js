import React, { useState } from 'react';

import { colors } from '~/styles/variables';
import { ArrowDown, ArtDesk, ArtGuy, Check } from '~/icons';
import {
  HeroSec,
  HeroGrid,
  HeroContainer,
  HeroContent,
  HeroInfo,
  HeroTitleSmall,
  HeroTitle,
  HeroList,
  HeroListItem,
  HeroArrow,
  HeroWaves,
} from './styles';

const Hero = () => {
  const [arrowColor, setArrowColor] = useState(colors.blue);
  const details = [
    '99,9% de disponibilidade: seu site sempre no ar',
    'Suporte 24h, todos os dias',
    'Painel de Controle cPanel',
  ];
  return (
    <>
      <HeroSec>
        <HeroContainer>
          <HeroGrid>
            <HeroContent margin="0 0 0 -25%" justifyContent="flex-start">
              <ArtDesk />
            </HeroContent>
            <HeroContent>
              <HeroInfo>
                <HeroTitleSmall>Hospedagem de Sites</HeroTitleSmall>
                <HeroTitle>
                  Tenha uma hospedagem de sites estável e evite perder
                  visitantes diariamente
                </HeroTitle>
                <HeroList>
                  {details.map((info, idx) => {
                    return (
                      <HeroListItem key={`details_hero_${idx}`}>
                        <Check />
                        {info}
                      </HeroListItem>
                    );
                  })}
                </HeroList>
              </HeroInfo>
            </HeroContent>
            <HeroContent margin="0 -25% 0 0" justifyContent="flex-end">
              <ArtGuy />
            </HeroContent>
          </HeroGrid>
        </HeroContainer>
        <HeroArrow
          href="#planos"
          onMouseEnter={() => setArrowColor(colors.orange)}
          onMouseLeave={() => setArrowColor(colors.blue)}
        >
          <ArrowDown circleColor={arrowColor} />
        </HeroArrow>
      </HeroSec>
      <HeroWaves />
    </>
  );
};

export default Hero;
