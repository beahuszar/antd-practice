import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'

export function GazdasagiAlapszamitasok() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={image1} />
      <img src={image2} />
      <img src={image3} />
      <img src={image4} />
      <img src={image5} />
    </div>
  )
}
