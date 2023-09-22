import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

export function IdosorosTargyieszkozEsErtekesites() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={image1} alt='image1' />
      <img src={image2} alt='image2' />
      <img src={image3} alt='image3' />
    </div>
  )
}
