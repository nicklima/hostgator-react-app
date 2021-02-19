import styled from 'styled-components';

export const ErrorAlert = styled.div`
  background-color: #ffbaba;
  background-image: url('https://i.imgur.com/GnyDvKN.png');
  background-repeat: no-repeat;
  background-position: center 10px;
  border: 1px solid;
  color: #d8000c;
  left: 50%;
  margin: 10px auto;
  max-width: 410px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 50px 10px 10px 10px;
  position: fixed;
  text-align: center;
  top: -50px;
  transition: all 0.5s;
  transform: ${({ isVisible }) =>
    isVisible ? 'translate(-50%, 60px)' : 'translate(-50%, 0)'};
  width: 95%;
  z-index: 9;
`;
