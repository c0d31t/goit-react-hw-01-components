import styled from '@emotion/styled'

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 400px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 2px 2px 10px 0px rgba(105,105,105,1);
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color: #0997C1;
  text-align: center;
  text-transform: uppercase;
  color: white;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #ffff;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #F5F5F5;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #ffff;
    }
  }
`;