import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import "./App.css";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setData([value, ...data]);
  };

  const deleteData = (index) => {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);
    console.log(data);
  };

  console.log(data, "data");
  const isToggleHandler = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <div style={{ display: "flex", gap: 4 }}>
        <CiCirclePlus
          onClick={isToggleHandler}
          size={24}
          style={{ cursor: "pointer" }}
        />
        <h3 style={{ marginTop: 0 }}>Notes...</h3>
      </div>
      <div>
        {isToggle && (
          <form onSubmit={formSubmitHandler}>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
            ></input>
            <button type="submit">Add</button>
          </form>
        )}
      </div>
      {data.map((data, index) => (
        <div style={{ display: "flex", gap: 4 }}>
          <h3 key={index}>{data}</h3>
          <MdOutlineDelete
            onClick={() => deleteData(index)}
            style={{ marginTop: 20, cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
