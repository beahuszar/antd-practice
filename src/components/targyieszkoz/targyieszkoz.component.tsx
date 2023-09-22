import te from './images/image1.png'
import te10 from './images/image10-aktivalas.png'
import te11 from './images/image11-aktivalas.png'
import te12 from './images/image12-ingatlan.png'
import te13 from './images/image13-ingatlan.png'
import te14 from './images/image14.png'
import te15 from './images/image15.png'
import te2 from './images/image2.png'
import te3 from './images/image3.png'
import te4 from './images/image4.png'
import te5 from './images/image5.png'
import te6 from './images/image6.png'
import te7 from './images/image7.png'
import te8 from './images/image8.png'
import te9 from './images/image9-aktivalas.png'

export function Targyieszkoz() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>személyautó – áfa nem levonható a bruttó (áfával növelt) összeget könyveljük.</p>
      <img src={te} alt='te' />
      <p>teherautó beszerzés – áfa levonható</p>
      <img src={te2} alt='te2' />
      <img src={te3} alt='te3' />
      <p>termelőgép beszerzés – elkülönítés – beruházási hitel</p>
      <img src={te4} alt='te4' />
      <img src={te5} alt='te5' />
      <img src={te6} alt='te6' />
      <img src={te7} alt='te7' />
      <img src={te8} alt='te8' />
      <p>aktiválás beruházások számla egyenlege</p>
      <img src={te9} alt='te9' />
      <img src={te10} alt='te10' />
      <img src={te11} alt='te11' />
      <p>Ingatlan beszerzés</p>
      <img src={te12} alt='te12' />
      <img src={te13} alt='te13' />
      <p>kapott kamat a beruházás értékét csökkenti</p>
      <img src={te14} alt='te14' />
      <p>aktiválás 161-es egyenlege</p>
      <img src={te15} alt='te15' />
    </div>
  )
}
