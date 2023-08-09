import { Collapse, Input } from 'antd'
import { ChangeEvent, useState } from 'react'
import { Table } from './components/table'
import { ReactComponent as ReactLogo } from './logo.svg'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis purus pellentesque, feugiat magna at, consectetur leo. Vestibulum feugiat non eros sit amet feugiat. Maecenas nisl leo, blandit vel ornare et, sollicitudin ac magna. Pellentesque mollis mauris nec fringilla condimentum. Aliquam porta, nunc a ultrices rutrum, arcu nisl tristique lorem, in vestibulum ex nibh ut nisl. Cras sed pulvinar nisi. Donec elit tellus, semper ac massa ut, semper placerat nulla. Suspendisse consequat volutpat ipsum, eget lobortis dui convallis eget. Nulla non facilisis dui. Nam justo metus, ultricies id nisi iaculis, porttitor lobortis felis. Ut iaculis vitae orci eget vehicula. Pellentesque id bibendum lacus. Mauris sit amet tincidunt metus. Aliquam vehicula convallis erat quis semper. Suspendisse condimentum vehicula efficitur.
`

const defaultItems: { key: string; label: string; children: React.ReactNode }[] = [
  {
    key: '1',
    label: 'Tablazat',
    children: <Table />
  },
  {
    key: '2',
    label: 'Sima szöveg',
    children: <p>{text}</p>
  },
  {
    key: '3',
    label: 'kép',
    children: <ReactLogo />
  }
]

function App() {
  const [items, setItems] =
    useState<{ key: string; label: string; children: React.ReactNode }[]>(defaultItems)

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target

    if (value === '') {
      setItems(defaultItems)
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
      <Collapse items={items} defaultActiveKey={['1']} />
    </>
  )
}

export default App
