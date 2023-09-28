import React, {useState} from 'react'

function Form() {

    const [form, setForm] = useState({name: "", surname: "", gender: "0"})

    /*  const [name, setName] = useState("")
      const [surname, setSurname] = useState("")
      const [gender, setGender] = useState("1")*/

    const handleChange = (e) => {
        setForm({...form, [e.target.id]: e.target.value});
    };

    return (
        <div>
            <div>
                <h1>User</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        autoComplete="given-name"
                        placeholder="Name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input
                        id="surname"
                        autoComplete="family-name"
                        placeholder="Surname"
                        type="text"
                        value={form.surname}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        value={form.gender}
                        onChange={handleChange}
                    >
                        <option value="0">Man</option>
                        <option value="1">Woman</option>
                    </select>
                </div>

                <hr/>

                <div>
                    <strong>User Name:</strong> {form.name} {form.surname}
                </div>

                <div>
                    <strong>User Gender:</strong>{" "}
                    {form.gender === "0" ? "Man" : "Woman"}
                </div>
        </div>
</div>
)
}

export default Form
