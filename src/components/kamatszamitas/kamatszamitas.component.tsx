import image1 from './images/image1.png'
import image10 from './images/image10.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'

export function Kamatszamitas() {
  return (
    <>
      <p>
        <strong>Egyszerű kamatozás – Jövőérték (ÉVEN BELÜL)</strong>
      </p>
      <p>
        <strong>FV = PV 0 x (1 + r x n) Kamattényező (1 + r x n)</strong>
      </p>
      <p>FV = Jövőérték</p>
      <p>PV 0 = Jelenérték</p>
      <p>r = kamat (mindig éves kamat tizedestörtben!)</p>
      <p>n = évek száma (1 vagy 0,5 vagy 0,25 év)</p>
      <br />
      <p>
        <strong>Kamatos kamatozás – nincs tőkésítés (ÉVEN TÚL)</strong>
      </p>
      <p>
        <img src={image1} alt='image1' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>
        <strong>Tőkésítés éven belüli (éven belüli kamatciklus)</strong>
      </p>
      <p>
        <img src={image2} alt='image2' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>n = Évek száma</p>
      <p>r = Éves kamat</p>
      <p>m = éven belüli kamatciklus - negyedéves = 4 (ha teljes év a futamidő)</p>
      <p>m = éven belüli kamatciklus - féléves = 2 (ha teljes év a futamidő)</p>
      <p>m = éven belüli kamatciklus - havi = 12 (ha teljes év a futamidő)</p>
      <p>m = éven belüli kamatciklus - kéthavi = 6 (ha teljes év a futamidő)</p>
      <p>m = éven belüli kamatciklus - kéthavi = 3 (ha félév a futamidő)</p>
      <br />
      <br />
      <p>
        <strong>Nincs tőkésítés, de van kamatciklus</strong>
      </p>
      <p>
        <img src={image3} alt='image3' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>Például, ha egy évre teszem be a pénzt, de félévente kell lekötni, nincs tőkésítés</p>
      <br />
      <br />
      <p>
        <strong>Napi kamatot mindig egyszerű kamatozással kell számolni</strong>
      </p>
      <p>m = éven belüli kamatciklus – napi = 360 (ha teljes év a futamidő)</p>
      <p>
        <img src={image4} alt='image4' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>
        ezzel kell számolni akkor is, ha az a kérdés, hogy megvárjuk-e a korábbi kifizetést, vagy
        fogadjuk el azt, ha hamarabb akarnak fizetni.
      </p>
      <p>
        <strong>Diszkontálás – Jövőbeni érték jelenértéke</strong>
      </p>
      <p>
        <img src={image5} alt='image5' style={{ height: '100%', width: 'auto' }} />
      </p>
      <br />
      <br />
      <p>
        <strong>Diszkontálás kamatciklussal</strong>
      </p>
      <p>
        <img src={image6} alt='image6' style={{ height: '100%', width: 'auto' }} />
      </p>
      <br />
      <br />
      <p>
        <strong>Effektív/tényleges kamat – Reálkamat MINDIG EGY ÉVRE SZÓL</strong>
      </p>
      <p>
        <img src={image7} alt='image7' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>havi tőkésítésnél m = 12</p>
      <p>negyedéves tőkésítés esetén m = 4</p>
      <p style={{ fontWeight: 'bold' }}>Reálkamatláb (infláció)</p>
      <p>
        <img src={image8} alt='image8' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p style={{ fontWeight: 'bold' }}>Örökjáradék</p>
      <p>
        <img src={image9} alt='image9' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p style={{ fontWeight: 'bold' }}>Azonos összegű kifizetés több évig</p>
      <p>
        <img src={image10} alt='image10' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p style={{ fontWeight: 'bold' }}>Emelkedő összegű örökjáradék</p>
      <p>
        <img src={image11} alt='image11' style={{ height: '100%', width: 'auto' }} />
      </p>
      <p>g = növekmény</p>
      <p>
        <strong>PÉLDA</strong>
      </p>
      <p>
        MOST NEM FIZETNEK SEMMIT, DE UTÁNA 3 ÉVEN KERESZTÜL ÉVI 3 M FT-OT. PÉNZPIACI KAMATLÁB 5%
      </p>
      <p>
        <img src={image12} alt='image12' style={{ height: '100%', width: 'auto' }} />
      </p>
    </>
  )
}
