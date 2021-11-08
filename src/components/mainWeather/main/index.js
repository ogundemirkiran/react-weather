import { useEffect, useState, useMemo } from "react";
import React, { useContext } from "react";
import AuthContext from "../../../context/authcontext";
import axios from "axios";
import "../../../App.css";

function Resweather() {
  const cityData = useContext(AuthContext);

  const [resdata, setResData] = useState([]);

  useEffect(() => {
    var ddd = [];

    cityData.geo.map((city, index) => {
      let newCity = city;

      axios
        .get(
          // `"https://api.openweathermap.org/data/2.5/weather?q=istanbul,uk&APPID=17d0bd6b3e15f511805dc2b664935484"`
          `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=17d0bd6b3e15f511805dc2b664935484`
        )
        .then((res) => {
          console.log(res.data);
          ddd.push(res.data);

          if (index >= 4) {
            setResData(ddd);
          }
        })
        .catch((err) => console.log(err));
    });
  }, [cityData.geo]);

  return (
    <div className="cityLists">
      {resdata.map((res, index) => {
        return (
          <ul key={index} className="cityOne">
            <li className="innerCity cityText cityName ">
              {res.name.replace("Province", "")}
            </li>
            <li className="innerCity cityText">
              <img
                src={`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`}
                alt={res.weather[0].main}
              ></img>
            </li>

            <li className="innerCity ">
              <span>Hava Durumu : </span>
              {res.weather[0].main}
            </li>

            <li className="innerCity ">
              <span>Sıcaklık :</span> {(res.main.temp - 273).toFixed(0)} C
            </li>

            <li className="innerCity ">
              <span>Nem :</span> {res.main.humidity}
            </li>
            <li className="innerCity ">
              <span>Rüzgar Hızı:</span> {res.wind.speed}
            </li>
            <li className="innerCity ">
              <span>Açıklama :</span> {res.weather[0].description}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Resweather;
