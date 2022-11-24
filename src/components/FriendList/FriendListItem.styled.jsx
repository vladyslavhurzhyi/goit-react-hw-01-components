import styled from '@emotion/styled';

export const Item = styled.li`
  width: 300px;
  background-color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px;
  border-radius: 2px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${props => {
    switch (props.isOnline) {
      case false:
        return '#ff4f56';

      case true:
        return '#40b247';

      default:
        return '#0004ea';
    }
  }};

  margin: 10px;
`;

export const Avatar = styled.img`
  margin: 5px;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-weight: 500;
  margin-left: 10px;
`;
