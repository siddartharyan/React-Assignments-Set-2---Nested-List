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
    console.log("entered");
    let obj = undefined;
    for (let i = 0; i < states.length; i++) {
      if (i === index) {
        obj = states[i];
        break;
      }
    }
    console.log(obj);
    let cities1 = obj["cities"];
    console.log(cities1);
    obj = [];
    // let arr = [];
    // for (let i = 0; i < cities1.length; i++) {
    //   obj.push(cities1[i]["name"]);
    //   if (i === 0) {
    //     let k = cities1[i]["towns"];
    //     console.log(k);
    //     for (let j = 0; j < k.length; j++) {
    //       arr.push(k[j]["name"]);
    //     }
    //     //console.log(arr);
    //   }
    // }
    setCities(cities1);
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
