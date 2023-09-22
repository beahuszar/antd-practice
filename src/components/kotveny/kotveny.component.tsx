import bonyi1 from './images/bonyi1.png'
import bonyi3 from './images/bonyi3.png'
import bonyi4 from './images/bonyi4.png'
import egyszeru from './images/egyszeru.png'
import egyszeru2 from './images/egyszeru2.png'
import tobbEves1 from './images/tobbEvesFutam1.png'
import tobbEves2 from './images/tobbEvesFutam2.png'

export function Kotveny() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Egyszerű</h3>
      <img src={egyszeru} alt='egyszeru' />
      <img src={egyszeru2} alt='egyszeru2' />
      <h3>Bonyi</h3>
      <img src={bonyi1} alt='bonyi1' />
      <img src={bonyi4} alt='bonyi4' />
      <img src={bonyi3} alt='bonyi3' />
      <img src={bonyi4} alt='bonyi4' />
      <h3>Több éves futamidő</h3>
      <img src={tobbEves1} alt='tobbEves1' />
      <img src={tobbEves2} alt='tobbEves2' />
    </div>
  )
}
