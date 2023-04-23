import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.stat_list}>
    {stats.map(item=>(<li key={item.id} className="item">
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>))}
    
  </ul>
</section>
    )
}
Statistics.propTypes={
 
  title: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})
}
export default Statistics;