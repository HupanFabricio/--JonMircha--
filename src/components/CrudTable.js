import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data,  deleteData, setDataToEdit }) => {
    return (
        <div>
            <h3>Table de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Role</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? 
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr> :
                        data.map(el => <CrudTableRow key={el.id} el={el} deleteData={deleteData} setDataToEdit={setDataToEdit} />)}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable