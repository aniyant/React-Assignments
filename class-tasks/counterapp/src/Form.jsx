import { useState } from "react";

function FormUseState() {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    gender: "",
    address: {
      building: "",
      street: "",
      city: "",
      state: "",
      coordinates: {
        latitude: "",
        longitude: "",
      },
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    // perform some api call and post the data;
    // reset the value of form;
  }

  const {
    name,
    age,
    gender,
    address: {
      building,
      street,
      city,
      state,
      coordinates: { latitude, longitude },
    },
  } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">
          Name :
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setFormState({
                ...formState,
                [e.target.id]: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="age">
          Age :
          <input
            id="age"
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => {
              setFormState({
                ...formState,
                [e.target.id]: +e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="gender">
          Gender :
          <select
            id="gender"
            value={gender}
            onChange={function (e) {
              setFormState({
                ...formState,
                [e.target.id]: e.target.value,
              });
            }}
          >
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </label>
        <label>
          Address - Building Name :
          <input
            id="building"
            type="text"
            value={building}
            placeholder="Building Name"
            onChange={({e}) => {
              setFormState({
                ...formState,
                address: {
                  ...formState.address,
                  [e.target.id]: e.target.value,
                },
              });
            }}
          />
        </label>
        <label>
          Address - Coordinates - Latitude :
          <input
            name="latitude"
            type="text"
            value={latitude}
            placeholder="Latitude"
            onChange={({target:{target}}) => {
                setFormState({
                 ...formState,
                  address: {
                   ...formState.address,
                    coordinates: {
                     ...formState.address.coordinates,
                      [e.target.name]: e.target.value,
                    },
                  },
                });
  
            }}
          />
        </label>
        <label>
            Address - Coordinates - Longitude :
            <input
              name="longitude"
              type="text"
              value={longitude}
              placeholder="Longitude"
              onChange={(e) => {
                setFormState({
                 ...formState,
                  address: {
                   ...formState.address,
                    coordinates: {
                     ...formState.address.coordinates,
                      [e.target.name]: e.target.value,
                    },
                  },
                });
              }}
            />
        </label>
      </form>
    </div>
  );
}

export default FormUseState;
