import styled from '@emotion/styled';
import getRandomHexColor from 'utils/getRandomHexColor';

export const Container = styled.section`
  margin: 20px auto 0 auto;
  width: 400px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0px rgba(105, 105, 105, 1);
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 30px 0;
  margin: 0px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #696969;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: #ffff;
`;

export const Percentage = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: #ffff;
`;
