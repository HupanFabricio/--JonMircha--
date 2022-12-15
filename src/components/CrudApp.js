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

  const [sm, setSm] = useState(initialSimpson);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => { 
    data.id = Date.now();
    // console.log(data);
    setSm([...sm,data])
  };

  const upData = (data) => { 
    let newData= sm.map(el => el.id === data.id? data:el );
    setSm(newData);
  };

  const deleteData = (id) => { };

  return (
    <div>
      <h2>CRUD APP</h2>

      <CrudForm
        createData={createData}
        upData={upData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      <CrudTable
        data={sm}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />

    </div>
  )
}
export default CrudApp;
