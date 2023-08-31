import Papa from 'papaparse'
import { useEffect, useState } from 'react'
// import * as CsvToHtmlTable from 'react-csv-to-table';
const bla = require('react-csv-to-table')
const { CsvToHtmlTable } = bla

export function GazdasagiEsemenyek() {
  const [text, setText] = useState('')
  useEffect(() => {
    async function fetchCsv() {
      const readable = await fetch('antd-practice/data/gazdasagi-esemenyek.csv') // todo: read into how to better handle csv in webpack
      const reader = readable.body?.getReader()
      const decoder = new TextDecoder('ISO-8859-2')
      const csv = await reader?.read()
      const text = decoder.decode(csv?.value) // the csv text
      const results = Papa.parse(text, { header: true, delimiter: ';' }) // parsed into object
      setText(text)
    }

    fetchCsv()
  }, [])

  return (
    <div>
      <CsvToHtmlTable
        data={text}
        csvDelimiter=';'
        tableClassName='border-4 border-solid border-indigo-500'
      />
    </div>
  )
}
