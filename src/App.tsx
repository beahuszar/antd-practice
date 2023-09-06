import { Collapse, Input } from 'antd'
import { ChangeEvent, useState } from 'react'
import { Berszamfejtes } from './components/berszamfejtes/berszamfejtes.component'
import { GazdasagiEsemenyek } from './components/gazdasagiEsemenyek/gazdasagi-esemenyek.component'
import { Targyieszkoz } from './components/targyieszkoz/targyieszkoz.component'

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
      Kereso:
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
