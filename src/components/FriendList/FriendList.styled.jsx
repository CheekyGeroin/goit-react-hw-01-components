import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #f0f0f5;
  padding: 0px 20px;
  box-shadow: 0 2px 2px 2px #f0f0f5;
  img {
    margin-right: 25px;
  }
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${props => {
    switch (props.stat) {
      case true:
        return '#03ff0f';
      case false:
        return '#ed0518';
      default:
        return '#1405ed';
    }
  }};
`;

export const Name = styled.p`
  font-size: 25px;
  line-height: 1.3;
`;
