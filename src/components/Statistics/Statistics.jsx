import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
