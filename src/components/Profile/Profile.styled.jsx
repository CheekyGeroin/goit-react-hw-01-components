import styled from '@emotion/styled';

export const Card = styled.div`
  max-width: 350px;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: #f5f7fc;
`;
export const Description = styled.div`
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
  img {
    max-width: 320px;
  }
`;
export const Name = styled.p`
  text-align: center;
  color: #353638;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 30px;
  line-height: 1.3;
`;
export const Tag = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 25px;
  line-height: 1.3;
  color: #595a5c;
`;
export const Location = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: 25px;
  line-height: 1.3;
  color: #595a5c;
`;
export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dadce3;
`;
export const Items = styled.li`
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  :nth-of-type(2) {
    border-left: 1px solid #b6b8bf;
    border-right: 1px solid #b6b8bf;
  }
  :not(:last-child) {
    margin-right: 5px;
  }
`;
export const Label = styled.span`
  font-size: 16px;
  line-height: 1.3;
  color: #595a5c;
`;
export const Quantity = styled.span`
  font-size: 16px;
  line-height: 1.3;
  color: #353638;
  font-weight: 500;
`;
