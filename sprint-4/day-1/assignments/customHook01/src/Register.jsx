import React from 'react'
import { useFormState } from './useFormState'

export const Register = () => {
    const [registerState,handleChange,resetForm] = useFormState({
        username: '',
        email:'',
        password:'',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerState);
        resetForm();
    }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' value={registerState.username} placeholder="Username" onChange={handleChange} />
            <br/>
            <input type="email" name='email' value={registerState.email} placeholder="Email" onChange={handleChange}  />
            <br/>
            <input type="password" name='password' value={registerState.password} placeholder="Password" onChange={handleChange} />
            <br/>
            <button type="submit">Register</button>
        </form>
    </div>
    <div>
        <div>Register Person Details</div>
        <div>username:{registerState.username}</div>
        <div>email:{registerState.email}</div>
    </div>
    </>
  )
}
