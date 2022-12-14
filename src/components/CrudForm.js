import React, { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    name:"",
    role:""
};

const CrudForm = () => {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => { }

    const handleSubmit = (e) => { }

    const handleReset = (e) => { }

    return (
        <div>
            <h3>Agregar</h3>
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
