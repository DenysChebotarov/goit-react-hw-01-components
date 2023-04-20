function Statistics({title, stats}) {
    return (
        <section class="statistics">
  <h2 class="title">{title}</h2>
  <ul class="stat-list">
    {stats.map(item=>(<li key={item.id} class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}</span>
    </li>))}
    
  </ul>
</section>
    )
}
export default Statistics;