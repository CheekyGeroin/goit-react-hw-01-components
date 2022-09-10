import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/randomColour';
export const Section = styled.section`
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  background-color: #f5f7fc;
`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #4d4d4f;
  margin-bottom: 0px;
  padding: 40px 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 16px;
  line-height: 1.3;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 18px;
  line-height: 1.3;
  color: #fff;
`;
