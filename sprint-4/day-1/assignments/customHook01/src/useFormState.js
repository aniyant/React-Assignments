import React,{useState} from "react";

export const useFormState = (initialState) => {
    const [formState,setFormState] = useState(initialState);

    const handleChange = (e) => {
        setFormState({
           ...formState,
            [e.target.name]:e.target.value
        })
    }

    const resetForm = () => {
        setFormState(initialState);
    }

    return [formState,handleChange,resetForm];
}