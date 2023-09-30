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
      <br />
      <p>
        <strong>Kamatos kamatozás – nincs tőkésítés (ÉVEN TÚL)</strong>
      </p>
      <p>
        <strong>FV = PV 0 x (1 + r) n Kamattényező: (1 + r) n</strong>
      </p>
      <br />
      <br />
      <p>
        <strong>Tőkésítés éven belüli (éven belüli kamatciklus)</strong>
      </p>
      <p>FV = PV 0 x (1 + ) m x n Kamattényező: (1 + ) m x n</p>
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
        <strong>FV = PV 0 x (1 + )</strong>
      </p>
      <p>Például, ha egy évre teszem be a pénzt, de félévente kell lekötni, nincs tőkésítés</p>
      <br />
      <br />
      <p>
        <strong>Napi kamatot mindig egyszerű kamatozással kell számolni</strong>
      </p>
      <p>m = éven belüli kamatciklus – napi = 360 (ha teljes év a futamidő)</p>
      <p>
        <strong>FV = PV 0 x (1 +</strong>
      </p>
      <p>
        ezzel kell számolni akkor is, ha az a kérdés, hogy megvárjuk-e a korábbi kifizetést, vagy
        fogadjuk el azt, ha hamarabb akarnak fizetni.
      </p>
      <p>
        <strong>Diszkontálás – Jövőbeni érték jelenértéke</strong>
      </p>
      <p>
        <strong>PV 0 = Diszkonttényező</strong>
      </p>
      <br />
      <br />
      <p>
        <strong>Diszkontálás kamatciklussal</strong>
      </p>
      <p>
        <strong>PV 0 = Diszkonttényező</strong>
      </p>
      <br />
      <br />
      <p>
        <strong>Effektív/tényleges kamat – Reálkamat MINDIG EGY ÉVRE SZÓL</strong>
      </p>
      <p>
        <strong>r eff = (1 + ) m – 1</strong>
      </p>
      <p>havi tőkésítésnél m = 12</p>
      <p>negyedéves tőkésítés esetén m = 4</p>
      <p style={{ fontWeight: 'bold' }}>Reálkamatláb (infláció)</p>
      <p style={{ fontWeight: 'bold' }}>r reál =</p>
      <p style={{ fontWeight: 'bold' }}>Örökjáradék</p>
      <p style={{ fontWeight: 'bold' }}>PV =</p>
      <p style={{ fontWeight: 'bold' }}>Azonos összegű kifizetés több évig</p>
      <p style={{ fontWeight: 'bold' }}>PV 0 = + …</p>
      <p style={{ fontWeight: 'bold' }}>Emelkedő összegű örökjáradék</p>
      <p style={{ fontWeight: 'bold' }}>PV 0 =</p>
      <p>g = növekmény</p>
    </>
  )
}
