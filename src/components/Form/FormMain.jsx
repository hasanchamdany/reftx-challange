import React, { useState } from "react";
import axios from "axios";

const FormMain = () => {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    // let today = new Date().toISOString().slice(0, 10);
    try {

        axios.post("https://sheet.best/api/sheets/638a5d5b-858c-42b9-8181-de9027a47dd9", inputs).then((response) => {
            console.log("hasil response = ");
            console.log(response)
        })

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className="font-poppins text-blue-dark font-bold "> Nama</label>
      <input
        name="name"
        value={inputs.name || ""}
        onChange={handleChange}
        type="text"
        className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
        placeholder="Nama"
      ></input>
      <label className="font-poppins text-blue-dark font-bold ">
        {" "}
        Tanggal Lahir
      </label>
      <input
        name="tanggalLahir"
        value={inputs.tanggalLahir || ""}
        onChange={handleChange}
        type="date"
        className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
      ></input>
      <label className="font-poppins text-blue-dark font-bold ">
        {" "}
        Berat Badan
      </label>
      <input
        name="beratBadan"
        value={inputs.beratBadan || ""}
        onChange={handleChange}
        type="number"
        className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
        placeholder="Berat Badan (kg)"
      ></input>
      <label className="font-poppins text-blue-dark font-bold ">
        {" "}
        Tanggal Pengambilan Data
      </label>
      <input
        name="tanggalData"
        value={inputs.tanggalData || ""}
        onChange={handleChange}
        type="date"
        className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
      ></input>

      {/* <Link href="/signup"> */}
      {/* <button onClick={() => setInputs({})} className="bg-red-400 py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-red-500 hover:text-blue-pale border-2 border-white hover:border-blue-medium">
        Clear
      </button> */}
      {/* </Link> */}
      <div className="flex w-full">
      <button className="w-full justify-center bg-blue-400 py-2 px-4 font-poppins font-bold text-white rounded-lg hover:bg-blue-500 hover:text-blue-pale border-2 border-white hover:border-blue-medium">
        Submit
      </button>
      </div>
    </form>
    <button onClick={() => setInputs({})} className="w-full bg-red-400 py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-red-500 hover:text-blue-pale border-2 border-white hover:border-blue-medium">
    Clear
  </button>
  </>
  );
};

export default FormMain;
