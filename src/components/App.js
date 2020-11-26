import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  let [cities, setCities] = useState([]);
  let [towns, setTowns] = useState([]);
  const handleCity = (index) => {
    let obj = undefined;
    for (let i = 0; i < states.length; i++) {
      if (i === index) {
        obj = states[i]["cities"];
        break;
      }
    }
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(obj[i]["name"]);
    }
    obj = cities;
    let found = true;
    for (let i = 0; i < Math.min(obj.length, arr.length); i++) {
      if (obj[i] !== arr[i]) {
        found = false;
        break;
      }
    }
    if (found && obj.length !== 0) {
      setCities([]);
      return;
    }
    setCities(arr);
  };

  const handleTown = (city) => {
    let obj = undefined;
    let found = false;
    for (let i = 0; i < states.length; i++) {
      let arr = states[i]["cities"];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j]["name"] === city) {
          obj = arr[j]["towns"];
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(obj[i]["name"]);
    }
    obj = towns;
    found = true;
    for (let i = 0; i < Math.min(obj.length, arr.length); i++) {
      if (obj[i] !== arr[i]) {
        found = false;
        break;
      }
    }
    if (found && towns.length !== 0) {
      setTowns([]);
      return;
    }
    setTowns(arr);
  };
  return (
    <div id="main">
      <h1>states</h1>
      <div>
        {states.map((place, index) => {
          return (
            <button
              key={`${place}state`}
              id={`state${index + 1}`}
              onClick={() => handleCity(index)}
            >
              {place["name"]}
            </button>
          );
        })}
      </div>
      <h1>cities</h1>
      <div>
        {cities.map((place, index) => {
          return (
            <button
              key={`${place}city`}
              id={`city${index + 1}`}
              onClick={() => handleTown(place)}
            >
              {place}
            </button>
          );
        })}
      </div>
      <h1>towns</h1>
      <div>
        {towns.map((place, index) => {
          return (
            <div key={`${place}town`} id={`town${index + 1}`}>
              {place}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
