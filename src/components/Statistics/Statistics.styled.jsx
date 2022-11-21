import styled from '@emotion/styled';

export const Statistic = styled.section`
  margin-top: 75px;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
`;

export const Title = styled.h2`
  color: #5a6267;
  font-size: 40px;
  font-weight: 500;
  padding: 20px;
`;
export const StatList = styled.ul`
  display: flex;
`;

const randomBg = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  span {
    color: white;
  }
  background-color: ${randomBg};
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
