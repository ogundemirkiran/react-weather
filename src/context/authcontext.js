import { React, useState, useEffect, createContext } from "react";

import geographic from "../components/mainWeather/geographic.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [geo, setGeo] = useState([
    "istanbul",
    "edirne",
    "balikesir",
    "bursa",
    "kocaeli",
  ]);

  const [regionName, setRegionName] = useState(null);

  useEffect(() => {
    let abc = geographic.filter((res) => res.name === regionName);

    if (abc.length === 1) {
      setGeo(abc[0].city);
    } else {
      alert("Lütfen Bölge Seçiniz");
    }
  }, [regionName]);

  const values = {
    geo,
    setGeo,
    regionName,
    setRegionName,
  };

  return (
    <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
  );
};

export default AuthContext;
