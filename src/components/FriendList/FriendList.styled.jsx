import styled from '@emotion/styled';

export const Container = styled.ul`
  margin: 20px auto 0 auto;
  width: 400px;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  height: 80px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0px rgba(105, 105, 105, 1);
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 15px;
  width: 60px;
  border-radius: 5px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;
