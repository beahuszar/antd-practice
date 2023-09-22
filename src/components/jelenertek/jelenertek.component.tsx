import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'

export function Jelenertek() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img2' />
      <img src={img3} alt='img3' />
      <img src={img4} alt='img4' />
    </div>
  )
}
