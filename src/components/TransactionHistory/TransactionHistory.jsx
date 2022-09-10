import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  Body,
  Item,
  Stats,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>
      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <Item key={id}>
            <Stats>{type}</Stats>
            <Stats>{amount}</Stats>
            <Stats>{currency}</Stats>
          </Item>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
