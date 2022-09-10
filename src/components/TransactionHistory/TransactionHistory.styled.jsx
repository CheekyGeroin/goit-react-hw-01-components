import styled from '@emotion/styled';

export const Table = styled.table`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
`;

export const TableHead = styled.thead`
  background-color: #00e1ff;
`;

export const TableHeadItem = styled.th`
  padding: 5px 60px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const Body = styled.tbody``;

export const Item = styled.tr`
  :nth-of-type(2n) {
    background-color: #a3a3a3;
  }
`;

export const Stats = styled.td`
padding: 10px 30px;
  text-align: center;
`;
