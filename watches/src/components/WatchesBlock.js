import { React, useState } from "react";
import shortid from "shortid";
import WatchesForm from "./WatchesForm";
import Watch from "./Watch";

export default function WatchesBlock() {
  const clearForm = {
    timeZone: "",
    nameZone: ""
  };
  const [formState, setForm] = useState(clearForm);
  const [arrWatch, setWatch] = useState([]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const btnChange = (event) => {
    debugger;
    event.preventDefault();
    formState.id = shortid();
    setWatch((prev) => [...prev, formState]);
    setForm(clearForm);
  };

  const deleteWatch = (id) => {
    setWatch((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  return (
    <div className="WatchesBlock">
      <WatchesForm
        handleChange={handleChange}
        btnChange={btnChange}
        form={formState}
      />
      <div className="displayContainier">
        {arrWatch.map((item) => (
          <Watch
            key={item.id}
            timeZone={item.timeZone}
            nameZone={item.nameZone}
            id={item.id}
            deleteWatch={deleteWatch}
          />
        ))}
      </div>
    </div>
  );
}
