import img1 from './images/image1.png'
import img2 from './images/image2.png'

export function KesztermekErtekesitesEredmenyhatas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img2' />
    </div>
  )
}
