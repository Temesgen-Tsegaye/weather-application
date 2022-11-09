import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import React, { useState, useEffect, useMemo } from "react";
import images from "./data/Data";
// const images=[defaultt,snow,mist,rain,showr,thunder,fewCloud,brokenCloud,clearSky,scatterd
// ]
function App() {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState({});
  const [toggle, setToggle] = useState(true);
  const [backGround, setBackGroud] = useState(images[0]);

  let description = apiData.description;
  useEffect(() => {
    switch (description) {
      case "clear sky":
        setBackGroud(images[8]);
       

        break;
      case "few clouds":
        setBackGroud(images[6]);
        break;
      case "scattered clouds":
        setBackGroud(images[9]);
        break;
      case "broken clouds":
        setBackGroud(images[7]);
        break;
      case "shower rain":
        setBackGroud(images[4]);
        break;
      case "rain":
        setBackGroud(images[3]);
        break;
      case "thunderstorm":
        setBackGroud(images[5]);
        break;
      case "snow":
        setBackGroud(images[1]);
        break;
      case "mist":
        setBackGroud(images[2]);
        break;
      default:
        setBackGroud(images[0]);
    }
    console.log(description)
    // console.log(backGround);
  },);
  const handleInput = (e) => {
    setInput(e.currentTarget.value);
  };

  async function FetchData() {
    const CURRENT_DATA = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9f6893dabedf59f077d553d5b1543546&units=metric`
    );
    setToggle(false)
    const dataJSON = await CURRENT_DATA.json();
    setApiData({
      description: dataJSON.weather[0].description,
      Temprature: dataJSON.main.temp,
      Feels_like: dataJSON.main.feels_like,
      wind: dataJSON.wind.speed,
      city_name: dataJSON.name,
      icon: dataJSON.weather[0].icon,
      pressure: dataJSON.main.pressure,
    });
    
    setToggle(true);
  }
  function x(e) {
    FetchData().catch(() => {
      setToggle(false);
    });
  }

  return (
    
      <div>
        <img className='imaggg' src={backGround}  />
        <Header  handleInput={handleInput} FetchData={x} />
        <Body apiData={apiData} toggle={toggle} input={input}/>
      </div>
    
  );
}

export default App;
