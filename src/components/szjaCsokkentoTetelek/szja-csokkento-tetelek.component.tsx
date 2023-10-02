import image1 from './images/image1.png'

export function SZJACsokkentoTetelek() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '70%' }}>
      <img src={image1} alt='image1' />
      <div>
        <p>SZJA: 15%</p>
        <p>TB járulék: 18,5%</p>
        <p>SZOCHO (MUNKÁLTATÓI JÁRULÉK): 13%</p>
      </div>
      <div>
        <h3>SZJA kedvezmények és érvényesítésük sorrendje:</h3>
        <ol>
          <li>4 vagy több gyermeket nevelő édesanyák kedvezménye</li>
          <li>25 év alatti fiatalok SZJA kedvezménye</li>
          <li>30 év alatti édesanyák SZJA kedvezménye</li>
          <li>Személyi kedvezmény</li>
          <li>Első házasok kedvezménye</li>
          <li>Családi adó és járulékkedvezmény</li>
        </ol>
      </div>
      <div>
        <strong>4 vagy több gyermeket nevelő édesanyák kedvezménye: </strong> feltételek teljesülése
        esetén az SZJA teljesen lecsökkenthető 0 Ft-ra. Pl munkabér, gyed, csed, táppénz…
      </div>
      <div>
        <strong>25 év alatti fiatalok kedvezménye: </strong> Feltétele be nem töltött 25-dik életév
        és legálisan szerzett adóköteles jövedelem (pl.bér) amiből a havi kedvezmény összege 74.993
        Ft. Ez 499.952 Ft bruttó bérig jogosít kedvezményre. Az efeletti bér SZJA köteles! Utoljára
        a 25-dik életkor betöltésének hónapjában vehető igénybe a kedvezmény
      </div>
      <div>
        <strong>30 év alatti édesanyák kedvezménye: </strong> Már a 25 évet betöltött, de még a 30
        éves életkorát be nem töltött édesanyák ill várandós nők (örökbefogadó anyák is) vehetik
        figyelembe, akik 2023.jan.1-ét követően szülnek, vagy ekkor töltik be várandóságuk
        91.napját. A jogosultság utolsó hónapja törthónap, a 30-dik szülinapot megelőző napig kell
        számítani. A jogosultság mértéke megegyezik a 25 év alatti munkavállalók SZJA kedvezményének
        mértékével, tehát havi 499.952 Ft bruttó bérig nem kell adót fizetni, amely 74.993 Ft SZJA
        megtakarítást jelent maximum. Az efeletti jövedelem SZJA köteles
      </div>
      <div>
        <strong>Személyi kedvezmény: </strong> Egészségi állapotra tekintettel lehet figyelembe
        venni. Rokkantság, Fogyatékosság ill. Kormányrendeletben meghatározott betegségek fenállása
        esetén. Az állapotot orvosi igazolással vagy határozattal kell igazolni. Jogosultság kezdete
        az a hónap, amelyre vonatkozóan az orvosi igazolást kiadták, végső dátum pedig az állapot
        megszűnéséről szóló határozat dátuma szerinti hónap. Az SZJA alapja ilyen kedvezmény címén
        havi 77.300 Ft-tal csökkenthető, amely 11.595 Ft adómegtakarítást jelent.
      </div>
      <div>
        <strong>Első házasok kedvezménye: </strong> Házasságkötést követő hónaptól érvényes 24
        hónapon keresztül. Együttesen is érvényesíthetik a házastársak 50-50%-ban, de lehet kérni
        csak az egyik fél részére is, ilyenkor nyilatkozat szükséges a kedvezmény megosztásról.
        Mértéke 33.335 Ft szja köteles jövedelm, tehát havi 5000 Ft SZJA-t lehet vele megspórolni.
        Speciális szabály, hogy a kedvezményt megszakítja a 25 éves életkorhoz köthető kedvezmény,
        majd ennek lejártát követően a még hátralévő időszakra az első házas kedvezmény ismét
        érvényesíthető.
      </div>
      <div>
        <div>
          <strong>Családi kedvezmény: </strong> Családi pótlékra jogosult eltartottak után járó
          kedvezmény, amely függ a háztartásban nevelt, önálló jövedelemmel nem rendelkező
          eltartottak számától. 2023.jan.1-ét követően a rokkant és súlyosan sérült, fogyatékkal élő
          személyek után is jár. Szülők közösen is érvényesíthetik, ill. új kapcsolatukban
          megoszthatják a kedvezményt nyilatkozat alapján. Fontos az eltartottak és kedvezményezett
          eltartottak számánank meghatározása
        </div>
        <ul>
          <li>1 gyermek esetén 66.670 Ft/hó/gyermek</li>
          <li>2 gyermek esetén 133.330 Ft/hó/gyermek</li>
          <li>3 v. több gyermek esetén 220.000 Ft/hó/gyermek az adó alapot csökkentő összeg</li>
        </ul>
        <div>
          Az szja számításánál figyelembe nem vett kedvezményezett összeg, a járulékok csökkentésére
          felhasználható.
        </div>
      </div>
    </div>
  )
}
