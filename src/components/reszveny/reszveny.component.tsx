import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'

export function Reszveny() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img2' />
      <img src={img3} alt='img3' />
      <img src={img4} alt='img4' />
      <img src={img5} alt='img5' />
    </div>
  )
}
