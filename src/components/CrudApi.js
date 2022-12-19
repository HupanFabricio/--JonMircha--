import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpHttp/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApi = () => {

  const [sm, setSm] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const api = helpHttp();
  const url = "http://localhost:5000/Personajes";

  useEffect(() => {
    api.get(url).then(res => { console.log(res) })
  }, [])

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);
    setSm([...sm, data])
  };

  const upData = (data) => {
    let newData = sm.map(el => el.id === data.id ? data : el);
    setSm(newData);
  };

  const deleteData = (id) => {

    let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`);

    if (isDelete) {
      let newData = sm.filter((el) => el.id !== id);
      setSm(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD Api</h2>
      <article className="grid-1-2">

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

      </article>
    </div>
  )
}
export default CrudApi;
