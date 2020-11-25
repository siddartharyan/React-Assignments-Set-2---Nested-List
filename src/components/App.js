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
        obj = states[i];
        break;
      }
    }
    let cities1 = obj["cities"];
    obj = [];
    for (let i = 0; i < cities1.length; i++) {
      obj.push(cities1[i]["name"]);
    }
    setCities(obj);
  };

  const handleTown = (city) => {
    let obj = undefined;
    let found = false;
    for (let i = 0; i < states.length; i++) {
      let arr = states[i]["cities"];
      console.log(arr);
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
    console.log(obj);
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(obj[i]["name"]);
    }
    setTowns(arr);
  };
  return (
    <div id="main">
      <h1>states</h1>
      <div>
        {states.map((place, index) => {
          return (
            <div id={`state${index + 1}`} onClick={() => handleCity(index)}>
              {place["name"]}
            </div>
          );
        })}
      </div>
      <h1>cities</h1>
      <div>
        {cities.map((place, index) => {
          return (
            <div id={`city${index + 1}`} onClick={() => handleTown(place)}>
              {place}
            </div>
          );
        })}
      </div>
      <h1>towns</h1>
      <div>
        {towns.map((place, index) => {
          return <div id={`town${index + 1}`}>{place}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
