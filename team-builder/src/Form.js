import React, {useState} from 'react'

const membersList = [
    {name:'Rick', email:'Rick@gmail.com', role:'Sr Developer'},
    {name:'Dan', email:'Dan@gmail.com', role:'Manager'},
    {name:'Bob', email:'Bob@gmail.com', role:'Jr Developer'},
]

const initialValues = {
    name: '',
    email: '',
    role: '',
}

function Form1(){
    const [members , setMembers] = useState(membersList);
    const [formValues, setFormValues] = useState(initialValues);

    const change = ev => {
        const { name, value } = ev.target
        console.log(name);
        console.log(value);
        setFormValues({...formValues, [name]: value})
    }

    const submit = ev => {
        ev.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            role: formValues.role.trim(),
            email: formValues.email.trim(),
        }
        setMembers(members.concat(newMember))
    }

    return (
    <div className='container'>
        <h1>Team Members</h1>
        {members.map((member, asd) => {
            return(
                <div key={asd}>
                    {member.name} - {member.role}: {member.email}
                </div>
            )
        })}
        <form onSubmit={submit}>
            Name:<input 
                type="text"
                onChange={change}
                value={formValues.name}
                name="name"
            />
            <br/>
            Role:<input 
                type="text"
                onChange={change}
                value={formValues.role}
                name="role"
            /> 
            <br/>
            Email:<input 
                type="text"
                onChange={change}
                value={formValues.email}
                name="email"
            />
            <br />
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Form1