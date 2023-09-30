import image1 from './images/image1.png'
import image10 from './images/image10.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image13 from './images/image13.png'
import image14 from './images/image14.png'
import image15 from './images/image15.png'
import image16 from './images/image16.png'
import image17 from './images/image17.png'
import image18 from './images/image18.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'

export function SajatTermelesuKeszletekAllomanyvaltozasa() {
  return (
    <>
      <p>
        A költségek táblázatát kitöltöm (kiszámolom az értékeket) összesíteni kell soronként és
        oszloponként is!
      </p>
      <p>
        <strong style={{ color: 'red' }}>
          Az STKÁV első lépéssorozata, vagy alapvető feladatai (MINDIG EZEKET A LÉPÉSEKET KELL
          ELVÉGEZNI!)
        </strong>
        <ol>
          <li style={{ color: 'red' }}>
            <strong>Nyitó befejezetlen termelést kivezetem (T581-K23)</strong>
            <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
              <strong>anyagköltség T51-K21-22 összes anyagköltség</strong>
              <strong>bérköltség T541-K471 összes bér</strong>
              <strong>bérjárulék T56-K463 összes szocho</strong>
              <strong>ÉCS T57-K139 összes écs költség</strong>
              <strong>esetleg további költségek</strong>
            </div>
          </li>
          <li style={{ color: 'red' }}>
            <strong>költséget elszámolok</strong>
          </li>
          <li style={{ color: 'red' }}>
            <strong>készletrevételt könyvelek</strong>
            <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
              <span>
                <strong>
                  utókalkuláció: Nyitó befejezetlen termelés + összes KÖZVETLEN költség-záró
                  befejezetlen termelés
                </strong>
              </span>
              <span>
                <strong>Késztermék készletre vétel: T25-K581</strong>
              </span>
              <span>
                <strong>befejezetlen termelés készletre vétel T23-K581</strong>
              </span>
            </div>
          </li>
          <li style={{ color: 'red' }}>
            <strong>eladás</strong>
            <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
              <strong>
                készletcsökkenés T581-K25 (nyitó készlet + az készletre vett késztermékből amennyit
                értékesítettem)
              </strong>
              <strong>vevő T311-K91-92</strong>
              <strong>vevő áfa T311-k467</strong>
            </div>
          </li>
          <li style={{ color: 'red' }}>
            <strong>vevő ezzel-azzal fizet</strong>
            <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
              <strong>váltó T341-K311</strong>
              <strong>bankszámla T384-K311</strong>
              <strong>pénztár T381-K311</strong>
            </div>
          </li>
        </ol>
        <p>
          0-dik lépés: A nyitást megcsinálom, vagyis tudnom kell, hogy hol nyílt meg feladatban
          megadott értékeket. NYITÁS A T+ OLDALON, KIVÉVE ÉRTÉKCSÖKKENÉS, AZT A K- OLDALON KELL
          NYITNI!
        </p>
        <p>
          <strong style={{ color: 'red' }}>1) lépés Nyitó befejezetlen termelést kivezetem</strong>
          <p>
            <img src={image1} alt='image1' />
          </p>
        </p>
        <p>
          <strong style={{ color: 'red' }}>
            2) Az összes (táblázatban felmerült) költséget elszámolom
          </strong>
          <p>
            <img src={image2} alt='image2' />
          </p>
        </p>
        <p>
          <strong style={{ color: 'red' }}>3) készletrevételt könyvelek</strong>
          <p>
            <strong>
              Elkészült késztermék közvetlen költsége kalkuláció séma: Nyitó befejezetlen termelés +
              összes közvetlen költség - záró befejezetlen termelés
            </strong>
          </p>
          <p>
            Ezt könyvelem a 3/1. lépésben először, aztán 3/2 lépésben a befejezetlen termelést is
            könyvelem, amit megadnak a feladatban.
          </p>
          <img src={image3} alt='image3' />
        </p>
        <p>
          <strong style={{ color: 'red' }}>4) Készletcsökkenés és eladás</strong>
          <p>Nyitó késztermék: 1.350.000 Ft + Elkészült termék 9.635.000 Ft = 10.974.000 Ft</p>
          <p>80%-át eladtam: 8.788.000 Ft</p>
          <img src={image4} alt='image4' />
        </p>
        <p>
          <strong style={{ color: 'red' }}>5) vevő ezzel-azzal fizet</strong>
          <p>
            <img src={image5} alt='image5' />
          </p>
          <p>A teljes idősoros könyvelés:</p>
          <p>
            <img src={image6} alt='image6' />
          </p>
          <p>EREDMÉNYKIMUTATÁS EHHEZ A FELADATHOZ:</p>
          <p>
            összköltség eljárású eredménykimutatás Aktivált saját teljesítmények értéke kiszámítása
          </p>
          <p>
            A <strong>késztermék</strong> <span style={{ color: 'red' }}>nyitóértéke</span> meg volt
            adva 1.350.000 Ft. A késztermék <span style={{ color: 'red' }}>záróértékét</span> a 4.
            pontban eladtuk a készlet 80%-át, tehát a 20% maradt meg 10.985.000 x 20%= 2.197.000.
            állományváltoás 847.000 Ft-tal nőtt.
          </p>
          <p>
            <strong>Befejezetlen termelés</strong>{' '}
            <span style={{ color: 'red' }}>nyitóállomány</span> 40.000 Ft (az elején a feladat
            megadta), <span>Záróállomány</span> 55.000 Ft (az elején a feladat megadta).
            Befejezetlen termelés állományváltozása 15.000 Ft-tal nőtt.
          </p>
          <img src={image7} alt='image7' />
          <p>
            Összesen sor!! : A nyitó <strong>saját termelésű készlet</strong> 1.390.000 Ft, záró
            saját termelésű készlet 2.252.000 Ft, összesen 862.000 Ft-tal nőtt.
          </p>
          <p>Összköltség eljárás:</p>
          <p>Értékesítés nettó árbevétele: 4. pontban nettó eladási ár</p>
          <p>Aktivált saját teljesítmények értéke: Előző táblázatban kiszámolva</p>
          <p>
            Anyagjellegű ráfordítások: Költség táblázatban felhasznált{' '}
            <span style={{ color: 'red' }}>anyagok összesen</span> értéke
          </p>
          <p>
            Személyi jellegű ráfordítások: Költség táblázatban a{' '}
            <span style={{ color: 'red' }}>bér és SZOCHO</span> összesen értéke
          </p>
          <p>Értékcsökkenési leírás: Költség táblázatban ÉCS összesen értéke</p>
          <p>I.+II.+III.-IV.-V.-VI.-VII = A</p>
          <img src={image8} alt='image8' />
          <p>Forgalmiköltség eljárással készült eredménykimutatás</p>
          <p>Értékesítés nettó árbevétele: 4. pontban nettó eladási ár</p>
          <p>
            Értékesítés közvetlen költségei: Költség táblázat közvetlen költségek összesen érték
          </p>
          <p>I.-II. = III.</p>
          <p>III.-IV.-V.-VI. = A.</p>
          <p>
            <img src={image9} alt='image9' />
          </p>
          <p>
            <img src={image10} alt='image10' />
          </p>
          <p>
            Különbség az előző feladathoz képest, hogy megadják a késztermék darabszámát és értékét,
            tehát ki kell számolni a db/Ft árat mind a nyitó készterméknél, mind az elkészült
            készterméknél. FIFO módszere segítségével kell csökkenteni az eladáskori készletet
            (először a nyitó készterméket adjuk el, aztán az elkészült késztermékből annyit,
            amennyit még kell).
          </p>
          <p>
            Különbség2: visszaküldött a vevő 80 db terméket (visszafordul az eladás, készletet is
            növelni kell).
          </p>
          <p>Különbség3: 3% engedményt kapott a vevő.</p>
          <p>
            Különbség4: Hulladék készletre vétele <strong>(csökkenti a költséget)</strong>
          </p>
          <p>Váltó futamideje és kamata nem érdekes, nem foglalkozunk vele (nem tudom miért)</p>
          <p style={{ color: 'red', fontWeight: 'bold' }}>4-es lépés Készletrevétel és eladás</p>
          <p>kicsit más, mert FIFO-val kell számolni az eladott termékek értékét:</p>
          <p>Nyitókészlet darabárának meghatározása:</p>
          <p>4.640.000 Ft/800 db = 5.800 Ft/db a nyitó késztermék ára</p>
          <p>Elkészült késztermék darabárának meghatározása:</p>
          <p>9.000.000 Ft/1500 db = 6.000 Ft/db</p>
          <p>
            2000 db-ot adtam el, 800 db-ot a nyitóból 5800 Ft/db áron, 1200 db-ot az újonnan készült
            termékből 6000 Ft/db áron. Maradt 300 db a 6000 Ft/db árú készletből.
          </p>
          <img src={image18} alt='image18' />
          <p>Eladás: 2000 db-ot 8000 Ft/db nettó áron = 16.000.000 Ft + áfa</p>
          <img src={image11} alt='image11' />
        </p>
        <p>
          <strong style={{ color: 'red' }}>5) Új lépés, a vevő visszaküldött a termékből</strong>
          <p>
            <strong style={{ color: 'red' }}>
              A 4es lépés visszafordul a 80 db termék értékével (készletérték és eladási ár és áfa)
            </strong>
          </p>
          <p>
            Visszavételnél FIFÓ-nál a legújabb árat kell figyelembe venni, itt a 6000 Ft-ot, azaz 80
            db x 6000 Ft
          </p>
          <img src={image12} alt='image12' />
          <p>
            <strong style={{ color: 'red' }}>
              6-os lépés új 3% engedményt adunk (a készletet nem érinti csak az eladást – nettó
              árbevétel és áfa)
            </strong>
          </p>
          <p>
            Engedmény = Eladási ár – visszaküldés x engedmény = nettó + áfa az engedmény összege
          </p>
          <img src={image13} alt='image13' />
        </p>
        <p>7) szokásos lépés a vevő fizet</p>
        <p>
          <img src={image14} alt='image14' />
        </p>
        <p>Idősoros a 4. lépéstől:</p>
        <p>
          <img src={image15} alt='image15' />
        </p>
        <p>Új az előző feladatokhoz képest: leltárhiány</p>
        <p>
          <strong>5 HIány</strong>
        </p>
        <p>
          A korrekciós tétel elszámolására azért van szükség, hogy az 581-es számla mutassa a saját
          termelésű készletek nyitó értéke és záró értéke közötti különbözetet.
        </p>
        <p>
          <img src={image16} alt='image16' />
        </p>
        <p>5. bankszámla jóváírás a követelés fele (nettó + áfa)</p>
        <p>
          <img src={image17} alt='image17' />
        </p>
        <p>
          <strong>Az STKÁV-hez használt számlaszámok</strong>
        </p>
        <p>23. Befejezetlen termelés</p>
        <p>25. Késztermék</p>
        <p>21. Anyagok</p>
        <p>12-13-14. Tárgyi eszközök</p>
        <p>129-139-149 Tárgyi eszközök terv szerinti értékcsökkenése</p>
        <p>471. Jövedelemelszámolási számla</p>
        <p>463. Költségvetési befizetési kötelezettségek</p>
        <p>51. Anyagköltség</p>
        <p>541. Bérköltség</p>
        <p>561. Bérjárulék (szocho)</p>
        <p>571 Értékcsökkenési leírás</p>
        <p>582. Saját előállítású eszközök aktivált értéke</p>
        <p>86. Egyéb ráfordítások (hiány, selejt) – HA VAN, EKKOR 582-ES SZÁMLA AZ ELLENSZÁMLA</p>
        <p>467. Fizetendő áfa (eladásnál)</p>
        <p>91. Belföldi értékesítés nettó árbevétele</p>
        <p>581. Saját termelésű készletek állományváltozása</p>
        <p>582. Saját előállítású eszközök aktivált értéke (hiány esetén kell)</p>
        <p>341. Váltókövetelések (ha váltóval fizet a vevő)</p>
        <p>311. Belföldi követelések (Vevők)</p>
        <p>384. Elszámolási betétszámla</p>
      </p>
    </>
  )
}
