import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: #ffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 0px rgba(105,105,105,1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  color: gray;
`;

export const UserLocation = styled.p`
  margin-top: 8px;
  margin-bottom: 0px;
  font-size: 16px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: #F5F5F5;
  border-top: 1px solid #C7C7C7;
  :not(:last-child) {
    border-right: 1px solid #C7C7C7;

  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;