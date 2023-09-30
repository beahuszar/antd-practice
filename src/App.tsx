import { Collapse, Input } from 'antd'
import { ChangeEvent, useState } from 'react'
import { Berszamfejtes } from './components/berszamfejtes/berszamfejtes.component'
import { BeruhazasJelenertek } from './components/beruhazasJelenertek/beruhazas-jelenertek.component'
import { Bevallas } from './components/bevallas/bevallas.component'
import { DinamikusEsStatikusMutatok } from './components/dinamikusEsStatikusMutatok/dinamikus-es-statikus-mutatok.component'
import { Eredmenykimutatas } from './components/eredmenykimutatas/eredmenykimutatas.component'
import { GazdasagiAlapszamitasok } from './components/gazdasagiAlapszamitasok/gazdasagi-alapszamitasok.component'
import { GazdasagiEsemenyek } from './components/gazdasagiEsemenyek/gazdasagi-esemenyek.component'
import { IdosorosAlapanyagEsGongyoleg } from './components/idosorosAlapanyagEsGongyoleg/idosoros-alapanyag-es-gongyoleg.component'
import { IdosorosBeruhazasEsBer } from './components/idosorosBeruhazasEsBer/idosoros-beruhazas-es-ber.component'
import { IdosorosTargyieszkozEsErtekesites } from './components/idosorosTargyieszkozEsErtekesites/idosoros-targyieszkoz-es-ertekesites.component'
import { Jelenertek } from './components/jelenertek/jelenertek.component'
import { Kepletek } from './components/kepletek/kepletek.component'
import { KesztermekErtekesitesEredmenyhatas } from './components/kesztermekErtekesitesEredmenyhatas/kesztermekertekesites-eredmenyhatas.component'
import { KiskerAru } from './components/kiskerAru/kisker-aru.components'
import { KiskerErtekesitesEredmenyhatas } from './components/kiskerErtekesitesEredmenyhatas/kisker-ertekesites-eredmenyhatas.component'
import { Kotveny } from './components/kotveny/kotveny.component'
import { MegterulesiidoForgasiEsemeny } from './components/megterulesiidoForgasiEsemeny/megterulesiido-forgasiEsemeny.component'
import { Merleg } from './components/merleg/merleg.component'
import { Reszveny } from './components/reszveny/reszveny.component'
import { SZJACsokkentoTetelek } from './components/szjaCsokkentoTetelek/szja-csokkento-tetelek.component'
import { Targyieszkoz } from './components/targyieszkoz/targyieszkoz.component'
import { TargyieszkozApportbaadas } from './components/targyieszkozApportbaadas/targyieszkoz-apportbaadas.component'
import { TargyieszkozErtekelese } from './components/targyieszkozErtekelese/targyieszkozErtekelese.component'
import { TargyieszkozSelejtEredmenyhatas } from './components/targyieszkozSelejtEredmenyhatas/targyieszkoz-selejt-eredmenyhatas.component'

// TODO: valami nem oke a deployyal, csak a build foldert nyomja fel
const defaultItems: { label: string; children: React.ReactNode }[] = [
  {
    label: 'Bérszámfejtés',
    children: <Berszamfejtes />
  },
  {
    label: 'Gazdasági események idősoros könyvelése',
    children: <GazdasagiEsemenyek />
  },
  {
    label: 'Tárgyieszköz és beruházás',
    children: <Targyieszkoz />
  },
  {
    label: 'Tárgyieszköz értékelése (értékesítés le és felértékelés)',
    children: <TargyieszkozErtekelese />
  },
  {
    label: 'Tárgyieszköz apportba adás',
    children: <TargyieszkozApportbaadas />
  },
  {
    label: 'vizsgafelkészítő - Részvény',
    children: <Reszveny />
  },
  {
    label: 'vizsgafelkészítő - Megtérülési idő és forgási sebesség',
    children: <MegterulesiidoForgasiEsemeny />
  },
  {
    label: 'Beruházás jelenérték',
    children: <BeruhazasJelenertek />
  },
  {
    label: 'vizsgafelkészítő - Kötvény',
    children: <Kotveny />
  },
  {
    label: 'vizsgafelkészítő - Idősoros beruházás és bér',
    children: <IdosorosBeruhazasEsBer />
  },
  {
    label: 'vizsgafelkészítő - Idősoros tárgyieszköz és értékesítés',
    children: <IdosorosTargyieszkozEsErtekesites />
  },
  {
    label: 'vizsgafelkészítő - Kisker értékesítés eredményhatás',
    children: <KiskerErtekesitesEredmenyhatas />
  },
  {
    label: 'vizsgafelkészítő - Tárgyieszköz selejt eredményhatás',
    children: <TargyieszkozSelejtEredmenyhatas />
  },
  {
    label: 'vizsgafelkészítő - Késztermék értékesítés eredményhatás',
    children: <KesztermekErtekesitesEredmenyhatas />
  },
  {
    label: 'vizsgafelkészítő - Idősoros alapanyag és göngyöleg',
    children: <IdosorosAlapanyagEsGongyoleg />
  },
  {
    label: 'vizsgafelkészítő - Jelenérték',
    children: <Jelenertek />
  },
  {
    label: 'Képletek',
    children: <Kepletek />
  },
  {
    label: 'Gazdasági alapszámítások',
    children: <GazdasagiAlapszamitasok />
  },
  {
    label: 'Kisker áru',
    children: <KiskerAru />
  },
  {
    label: 'SZJA csökkentő tételek',
    children: <SZJACsokkentoTetelek />
  },
  {
    label: 'Mérleg',
    children: <Merleg />
  },
  {
    label: 'Eredménykimutatás',
    children: <Eredmenykimutatas />
  },
  {
    label: 'Dinamikus és statikus mutatók',
    children: <DinamikusEsStatikusMutatok />
  },
  {
    label: 'Bevallás',
    children: <Bevallas />
  }
]

function App() {
  const sortedItems = defaultItems.sort((a, b) => a.label.localeCompare(b.label))
  const [items, setItems] = useState<{ label: string; children: React.ReactNode }[]>(sortedItems)

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target

    if (value === '') {
      setItems(sortedItems)
      return
    }

    const filteredItems = items.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    )
    setItems(filteredItems)
  }

  return (
    <>
      Legördülő menücím kereső:
      <Input style={{ width: 150, marginBottom: 20 }} onChange={handleChange} />
      <Collapse items={items} /* defaultActiveKey={['0']} */ />
    </>
  )
}

export default App

// import { Table } from './components/table'
// import { ReactComponent as ReactLogo } from './logo.svg'

/* const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis purus pellentesque, feugiat magna at, consectetur leo. Vestibulum feugiat non eros sit amet feugiat. Maecenas nisl leo, blandit vel ornare et, sollicitudin ac magna. Pellentesque mollis mauris nec fringilla condimentum. Aliquam porta, nunc a ultrices rutrum, arcu nisl tristique lorem, in vestibulum ex nibh ut nisl. Cras sed pulvinar nisi. Donec elit tellus, semper ac massa ut, semper placerat nulla. Suspendisse consequat volutpat ipsum, eget lobortis dui convallis eget. Nulla non facilisis dui. Nam justo metus, ultricies id nisi iaculis, porttitor lobortis felis. Ut iaculis vitae orci eget vehicula. Pellentesque id bibendum lacus. Mauris sit amet tincidunt metus. Aliquam vehicula convallis erat quis semper. Suspendisse condimentum vehicula efficitur.
` */

/* ,
  {
    label: 'Tablazat',
    children: <Table />
  },
  {
    label: 'Sima szöveg',
    children: <p>{text}</p>
  },
  {
    label: 'kép',
    children: <ReactLogo />
  } */
