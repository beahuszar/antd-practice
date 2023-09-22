import bsz1 from './images/bsz1.png'
import bsz2 from './images/bsz2.png'
import bsz3 from './images/bsz3.png'
import bsz4 from './images/bsz4.png'
import bsz5 from './images/bsz5.png'

export function Berszamfejtes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={bsz1} alt='bsz1' />
      <img src={bsz2} alt='bsz2' />
      <img src={bsz3} alt='bsz3' />
      <img src={bsz4} alt='bsz4' />
      <img src={bsz5} alt='bsz5' />
    </div>
  )
}
