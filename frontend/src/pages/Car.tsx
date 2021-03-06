import axios from 'axios';
import React, { useState } from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';



const Car: React.FC = () => {

  const [vehicleNumber, setVehicleNumber] = useState('');
  const [tax, setTax] = useState('');
  let navigate = useNavigate();
  const infos = {
    vehicleNumber: vehicleNumber,
    tax: tax
  }

  const carTax = () =>{
    axios.post('http://localhost:4000/api/client/carTax',infos)
    .then(res => {
      
      if (res.data) {
        navigate("/home", { replace: true });
      }

    })
    .catch(err => console.warn(err))
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/50">
      <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
        <div className="w-full flex justify-between">
          <span></span>
          <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
            Payer la vignette de voiture
          </h1>
          <Link to="/home">
            <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
          </Link>
        </div>
        <div className="w-full h-5/6 rounded-3xl flex justify-center items-center">
          <div className="card w-96 bg-slate-300 shadow-xl rounded-lg">
            <figure className="px-10 pt-6">
              <img
                src="src/assets/pay.jpg"
                alt="car"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body h-3/5 items-center text-center mt-2">
              <div className="card-actions flex flex-col w-full">
                <div className="flex flex-col w-full items-center">
                  <label htmlFor="">Matricule</label>
                  <input
                    type="text"
                    name=""
                    onChange={(e)=>{setVehicleNumber(e.target.value)}}
                    id=""
                    className="w-4/5 py-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full items-center mb-3">
                  <label htmlFor="">Dur??e</label>
                  <select name="" id="" className="w-4/5 py-3 rounded-md" onChange={(e)=>{setTax(e.target.value)}}>
                    <option value="">choix</option>
                    <option value="2000">6 mois</option>
                    <option value="4000">1 ans</option>
                  </select>
                </div>
                <button className="btn text-gray-800" onClick={carTax}>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;