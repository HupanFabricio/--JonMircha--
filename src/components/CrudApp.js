import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialSimpson = [
  {
    id: 1,
    name: "Homero",
    role: "Dad"
  },
  {
    id: 2,
    name: "Marge",
    role: "Mother"
  },
  {
    id: 3,
    name: "Bart",
    role: "Sons"
  },
  {
    id: 4,
    name: "Lisa",
    role: "Sons"
  },
  {
    id: 5,
    name: "Milhause",
    role: "Neighbours"
  },
]

const CrudApp = () => {
  const [sm, setSm] = useState(initialSimpson)
  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm />
      <CrudTable data={sm} />
    </div>
  )
}
export default CrudApp;
