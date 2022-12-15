import React, { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    name: "",
    role: ""
};

const CrudForm = ({ createData, upData, dataToEdit, setDataToEdit }) => {

    useEffect(() => {
        if(dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit])
    

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.role) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            upData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name} />
                <input type="text" name="role" placeholder="Role" onChange={handleChange} value={form.role} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>

        </div>
    )
}

export default CrudForm
