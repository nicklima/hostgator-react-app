import styled from 'styled-components';

export const Btn = styled.a`
  background: ${({ bgColor }) => bgColor};
  border: 0;
  border-radius: 3em;
  color: ${({ color }) => color};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 12px 24px;
  text-align: center;
  transition: all 0.5s;
  width: 100%;

  &:hover {
    background-color: ${({ bgHover }) => bgHover};
  }
`;
