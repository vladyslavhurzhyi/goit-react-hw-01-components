import PropTypes from 'prop-types';
import { TransactionTable } from './Transaction.styled';
import { TableBody } from './TableBody';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TableBody items={items}></TableBody>
    </TransactionTable>
  );
};

TableBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
