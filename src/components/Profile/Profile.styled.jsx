import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #e3e9ee;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const Name = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  color: gray;
  margin-bottom: 10px;
`;
export const StatsBox = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  color: #8d9aa8;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
