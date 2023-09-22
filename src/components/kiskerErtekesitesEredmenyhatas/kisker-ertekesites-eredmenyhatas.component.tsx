import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'

export function KiskerErtekesitesEredmenyhatas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img2' />
      <img src={img3} alt='img3' />
    </div>
  )
}
