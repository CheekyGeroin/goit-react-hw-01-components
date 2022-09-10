import PropTypes from 'prop-types';

export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <ul className="stat-list">
        {stats.map(({id, label, percentage}) => (<li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
    
  ),
};
