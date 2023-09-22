import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'

export function KiskerAru() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>kisker áru beszerzés</p>
      <img src={image1} alt='image1' />
      <p>mellékköltség – szállítási díj</p>
      <img src={image2} alt='image2' />
      <p>visszaküldés</p>
      <img src={image3} alt='image3' />
      <p>kapott engedmény</p>
      <img src={image4} alt='image4' />
      <p>értékesítés</p>
      <img src={image5} alt='image5' />
      <img src={image6} alt='image6' />
      <p>teljes</p>
      <img src={image7} alt='image7' />
      <img src={image8} alt='image8' />
    </div>
  )
}
