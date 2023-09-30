import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

export function TargyieszkozAllomanyvaltozasa() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={image1} alt='Image 1' />
      <img src={image2} alt='Image 2' />
      <img src={image3} alt='Image 3' />
    </div>
  )
}
