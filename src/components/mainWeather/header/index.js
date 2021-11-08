import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap/";
import geographic from "../geographic.json";
import AuthContext from "../../../context/authcontext";

function Cityweather() {
  const [oneGeo, setOneGeo] = useState("");

  const authData = useContext(AuthContext);

  const { handleChange, values } = useFormik({
    initialValues: {
      cityName: "",
    },
  });

  useEffect(() => {
    if (values.cityName) {
      authData.setRegionName(values.cityName);
    }
  }, [values.cityName]);

  return (
    <div className="w-75 mt-5 m-auto">
      <Form.Select
        className="selectForm"
        onChange={handleChange}
        name="cityName"
      >
        {geographic.map((res) => (
          <option
            className="selectMenu"
            key={res.id}
            value={res.name}
            defaultValue={"m-b"}
          >
            {res.value}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default Cityweather;
