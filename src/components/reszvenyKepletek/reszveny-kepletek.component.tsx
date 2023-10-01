import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

export function ReszvenyKepletek() {
  return (
    <>
      <p>P0 = ma mennyiért vehető meg</p>
      <p>
        DIV1 = <strong>következő</strong> évi osztalék
      </p>
      <p>P1 = egy év múlva az árfolyam</p>
      <p>g = osztaléknövekedés</p>
      <p style={{ display: 'flex', alignItems: 'center' }}>
        Osztalékhozam = <img src={image1} alt='image1' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p style={{ display: 'flex', alignItems: 'center' }}>
        Várható hozam (állandó ütemű osztaléknövekedés esetén) Egy éven túli tartás esetén:{' '}
        <img src={image2} alt='image2' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p style={{ display: 'flex', alignItems: 'center' }}>
        Várható hozam (egy évig tartás esetén):{' '}
        <img src={image3} alt='image3' style={{ height: '100%', width: 'auto' }} />
      </p>
    </>
  )
}
