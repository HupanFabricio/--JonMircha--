import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpHttp/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {

  const [sm, setSm] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = "http://localhost:5000/Personajes";

  useEffect(() => {
    setLoading(true)
    api.get(url).then(res => {
      if (!res.err) {
        setSm(res);
        setError(null);
      } else {
        setSm(null);
        setError(res);
      }
      setLoading(false)
    });
  }, [url])

  const createData = (data) => {

    let options = { 
      body:data,
      headers:{ "content-type":"application/json" }};

    data.id = Date.now();
    api.post(url, options).then((res) => {
      console.log(res);
      if(!res.err) {
        setSm([...sm,res]);
      } else {
        setError(res);
      }
    });
    setSm([...sm, data]);
  };

  const upData = (data) => {

    let endpoint = `${url}/${data.id}`;

    let options = { 
      body:data,
      headers:{ "content-type":"application/json" }};

    data.id = Date.now();
    api.put(endpoint, options).then((res) => {
      if(!res.err) {
        let newData = sm.map((el) => (el.id === data.id ? data : el));
        setSm(newData);
      } else {
        setError(res);
      }
    });

    let newData = sm.map(el => el.id === data.id ? data : el);
    setSm(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`);
    
    
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = { 
        headers:{ "content-type":"application/json" }};
        
      api.del(endpoint,options).then(res => {
        if(!res.err) {
          let newData = sm.filter((el) => el.id !== id);
          setSm(newData);
        } else {
          setError(res);
        }
      } )
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
        {loading && <Loader />}
        {error && <Message 
        msg={`Error ${error.status}: ${error.statusText}`} 
        bgColor="#dc3545" />}
        {sm && <CrudTable
          data={sm}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />}

      </article>
    </div>
  )
}
export default CrudApi;
