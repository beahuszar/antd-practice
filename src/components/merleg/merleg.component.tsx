import image1 from './images/image1.png'
import image2 from './images/image2.png'

export function Merleg() {
  return (
    <>
      <img src={image1} alt='image1' />
      <img src={image2} alt='image2' />
      <div style={{ marginBottom: '15px' }}>
        <p>36-os számlaosztály kezelése:</p>
        <p>
          <strong>Együtt</strong> kell kezelni a <strong>362-es és 363-as</strong> számlákat. Ha a{' '}
          <strong>362-es a nagyobb</strong>, akkor a kettő egyenlegét az{' '}
          <strong>egyéb követelésekhez</strong> kell írni, ha a <strong>363-as a nagyobb</strong>{' '}
          akkor <strong>egyéb rövid lejáratú kötelezettséghez</strong>.
        </p>
        <p>Az összes többi 36-os az egyéb követeléshez megy.</p>
      </div>
      <div>
        <p>46-os és 47-es számlaosztály kezelése</p>
        <p>
          463-as és 464-es számlákat együtt kell kezelni. Ha a <strong>T oldal a nagyobb</strong>,
          akkor <strong>egyéb követelés</strong>, ha a <strong>K oldal a nagyobb</strong>, akkor{' '}
          <strong>egyéb rövid lejáratú kötelezettség</strong>.
        </p>
        <p>
          466-os, 467-es, 468-as számlákat együtt kell kezelni. Ha a{' '}
          <strong>T oldal a nagyobb</strong>, akkor <strong>egyéb követelés</strong>, ha a{' '}
          <strong>K oldal a nagyobb</strong>, akkor{' '}
          <strong>egyéb rövid lejáratú kötelezettség</strong>.
        </p>
        <p>
          461-es, 462-es, 471-es, 479-es számlák Ha{' '}
          <strong>T oldal egyéb követelés, ha K oldal, egyéb rövid lejáratú kötelezettség</strong>
        </p>
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          4ES SZÁMLÁK K OLDAL KÖTELEZETTSÉG, T OLDAL KÖVETELÉS
        </p>
      </div>
    </>
  )
}
