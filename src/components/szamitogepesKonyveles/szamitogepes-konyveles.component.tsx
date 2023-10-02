import image from './images/image1.png'
import image2 from './images/image2.png'

export function SzamitogepesKonyveles() {
  return (
    <>
      <h3>Nyitás</h3>
      <p>Eszköz T = listából K = 491</p>
      <p>Forrás T = 491 K = listából</p>
      <p>Ha adózott eredmény veszteség és/vagy negatív szám, akkor T = 419 K = 491</p>
      <p>
        Ha az eszközök között van áfa követelés, akkor keresni kell a hármasok között áfás
        számlaszámot, ha nincs, akkor a 468-asra kell felvinni. Ilyenkor is T oldalon van!
      </p>
      <p>
        Eszközöket nyitásnál csak 1, 2 vagy 3-as számlára lehet könyvelni (kivéve ez az áfa, ha van)
      </p>
      <p>Forrásokat csak 4-es számlákra lehet könyvelni</p>
      <p>446 és 467-es számla sose nyitó, csak 468-as</p>
      <br />
      <br />
      <p>
        <strong>Rendező tételek</strong>, ami a nyitáskor T oldal volt a rendezésnél K oldal lesz és
        fordítva
      </p>
      <p>RENDEZŐ1, RENDEZŐ2</p>
      <p>
        <strong>Aktív időbeli elhatárolás:</strong>
      </p>
      <p style={{ color: 'red' }}>Bev AIE T = listából 9731 K = 391</p>
      <p>Ktg AIE T = listából 5… K = 392</p>
      <p>Passzív időbeli elhatárolás:</p>
      <p style={{ color: 'red' }}>
        Bev. PIE T = 481 K = 914 listából, ami a szöveges részben látszódik
      </p>
      <p>ktg PEI T = 482 K = 52… listából, ami a szöveges részben látszódik</p>
      <p>
        <strong>Adózott eredmény:</strong>
      </p>
      <p>HA VESZTESÉG</p>
      <p style={{ color: 'red' }}>T = 413 EREDMÉNYTARTALÉK K = 419 ADÓZOTT EREDMÉNY</p>
      <p>HA NYERESÉG</p>
      <p>T = 419 ADÓZOTT EREDMÉNY K = 413 EREDMÉNYTARTALÉK</p>
      <p>
        <img src={image} alt='image' style={{ height: 'auto', width: '100%' }} />
      </p>
      <h3>SZÁMLÁK</h3>
      <p>NYITÓ = ELSŐ KOCKA PIPA CSAK A PÉNZÜGYI NYILVÁNTARTÁSBAN…</p>
      <p>Ha a cég a vevő, az szállító számla, ha a cég az eladó az vevő számla</p>
      <p>Vevő számlán az árbevétel 9-es számla lehet</p>
      <p>Szállító számlán a költség 5-ös számla</p>
      <p style={{ color: 'red' }}>
        Közvetített szolgáltatásos számla fordított adózású is Alvállalkozó T815 K4541
      </p>
      <p>
        Fordított adózás JELÖLNI! = Szállító számlán áfamentes, Vevő számlán végigcsináni a
        részleteket
      </p>
      <p style={{ color: 'red' }}>Mindent költségként 5ös számla</p>
      <p style={{ color: 'red' }}>Anyag T511 K4541</p>
      <p style={{ color: 'red' }}>
        Teherautó és rendszámtábla aktiválása vegyes naplóba T132 K161 csak a nettó összeget!
      </p>
      <h3>BANK (1/2023, 55/2023)</h3>
      <p>bizonylat száma a bankkivonat száma (1/2023)</p>
      <p>dátumot figyelni</p>
      <p>számlát beemelni</p>
      <p>nyitó és záró egyenleget figyelni</p>
      <p>Állítani hogy kiadás T…K381 vagy bevétel T381K…</p>
      <p>számlákat ki lehet egyenlíteni automatikusan</p>
      <p style={{ color: 'red' }}> készpénz felvétel T389 K384</p>
      <p style={{ color: 'red' }}>kamatjóváírás T 3841 K9741</p>
      <p style={{ color: 'red' }}>bankköltség T5321K3841 </p>
      <br />
      <p>
        <strong>Bérszámfejtés</strong>
      </p>
      <p>
        <strong>Bérszámfejtés modul</strong>
      </p>
      <p>munkavállaló összes adatát felvinni Alkalmazotti törzsben</p>
      <p>Jogviszony típus (önálló tev. jövedelme a megbízásinál)</p>
      <p>jogcím megbízási díj</p>
      <p>költségnyilatkozat ami a feladatban</p>
      <p>Béradatok – (esetleg kilépettek megjelenítése) – számfejtés</p>
      <p>Bérlisták pdf nyomtatása 2 db (bérlista-bérjegyzék) - hónapot kiválasztani</p>
      <p>
        <img src={image2} alt='image2' style={{ height: 'auto', width: '100%' }} />
      </p>
    </>
  )
}
