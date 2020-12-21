import styled from 'styled-components';

import { colors } from '~/styles/variables';
import { Container } from '~/styles/shared';

export const HeaderSec = styled.header`
  width: 100%;
  background: ${colors.white};
`;

export const HeaderSecWrap = styled(Container)`
  align-items: center;
  display: flex;
  height: 68px;
  justify-content: flex-start;
`;

export const LogoLink = styled.a``;
