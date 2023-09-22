import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'

export function DinamikusEsStatikusMutatok() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={image1} alt='image1' />
      <img src={image2} alt='image2' />
      <img src={image3} alt='image3' />
      <img src={image4} alt='image4' />
      <img src={image5} alt='image5' />
      <p>Statikus</p>
      <img src={image6} alt='image6' />
      <p>Dinamikus</p>
      <img src={image7} alt='image7' />
    </div>
  )
}
