import image1 from './images/image1.png'
import image10 from './images/image10.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image13 from './images/image13.png'
import image14 from './images/image14.png'
import image15 from './images/image15.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'

export function TargyieszkozBeszerzes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>személyautó – áfa nem levonható a bruttó (áfával növelt) összeget könyveljük.</p>
      <img src={image1} alt='image1' />
      <p>teherautó beszerzés – áfa levonható</p>
      <img src={image2} alt='image2' />
      <img src={image3} alt='image3' />
      <p>termelőgép beszerzés – elkülönítés – beruházási hitel</p>
      <img src={image4} alt='image4' />
      <img src={image5} alt='image5' />
      <img src={image6} alt='image6' />
      <img src={image7} alt='image7' />
      <img src={image8} alt='image8' />
      <p>aktiválás beruházások számla egyenlege</p>
      <img src={image9} alt='image9' />
      <img src={image10} alt='image10' />
      <img src={image11} alt='image11' />
      <p>Ingatlan beszerzés</p>
      <img src={image12} alt='image12' />
      <img src={image13} alt='image13' />
      <p>kapott kamat a beruházás értékét csökkenti</p>
      <img src={image14} alt='image14' />
      <p>aktiválás 161-es egyenlege</p>
      <img src={image15} alt='image15' />
    </div>
  )
}
