import PropTypes from 'prop-types';
import { Tbody, Type } from './TableBody.styled';

export const TableBody = ({ items }) => {
  return items.map(item => (
    <Tbody key={item.id}>
      <tr>
        <Type>{item.type}</Type>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </Tbody>
  ));
};

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
