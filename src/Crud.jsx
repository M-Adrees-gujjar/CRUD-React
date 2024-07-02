import { useState } from "react";
export default function Crud() {
  const [editVal, setEditVal] = useState({
    index: -1,
    edit: true,
  });
  const [array, setArray] = useState([
    {
      name: "Demo",
      email: "demo@gmail.com",
    },
  ]);
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  function handleSubmit() {
    if (value.name == "" || value.email == "") {
      alert("Fill all Fields");
    } else {
      if (editVal.edit) {
        setArray([...array, { ...value }]);
      } else {
        array[editVal.index]["name"] = value.name;
        array[editVal.index]["email"] = value.email;
        setArray([...array]);
        setEditVal({
          index: -1,
          edit: true,
        });
      }
      setValue({
        name: "",
        email: "",
      });
    }
  }

  function deleteFunction(index) {
    array.splice(index, 1);
    setArray([...array]);
  }

  function editFunction(index) {
    let element = array[index];
    setValue({
      name: element.name,
      email: element.email,
    });
    setEditVal({
      index: index,
      edit: false,
    });
  }

  return (
    <div className="crud-container">
      <h1>Enter Your Details </h1>
      <div className="crud-form">
        <input
          type="text"
          placeholder="Enter Name"
          value={value.name}
          required
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={value.email}
          required
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>

      {array.map((element, index) => (
        <div key={index} className="crud-item">
          <div>
            <h1>{element.name}</h1>
            <h1>{element.email}</h1>
          </div>
          <div>
            <button
              type="button"
              className="edit"
              onClick={() => editFunction(index)}
            >
              Edit
            </button>
            <button
              type="button"
              className="delete"
              onClick={() => deleteFunction(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
