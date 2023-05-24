import React, { useState } from "react";



const  FormMain = () => {
    let today = new Date().toISOString().slice(0, 10)
  const [inputs, setInputs] = useState({["date"]: today});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    try {
        
        const response = await fetch('https://script.google.com/macros/s/AKfycbzt3cXuCNecXbY-t3w4hCScY2Nv2Wz0ntgTTPAxvqg_2DDSNdoFVD6i-wWZgLJvFXk-2A/exec?action=addUser', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        // console.log("masuk TRY client setelah fetch")
  
        const content = await response.json();
        console.log(content);
        alert(content.data.tableRamge)
      } catch (error) {
        console.error(error);
      }
  };

  

  return (
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
        type="text"
        className="block bg-white py-2 px-4 border-2 border-blue-medium rounded-xl mb-4"
        placeholder="Berat Badan (kg)"
      ></input>

      {/* <Link href="/signup">
      <button className="bg-blue-400 py-2 px-4 font-poppins font-bold text-white rounded-lg mr-8 hover:bg-blue-500 hover:text-blue-pale border-2 border-white hover:border-blue-medium">
        Clear
      </button>
      </Link> */}

      <button className="bg-blue-400 py-2 px-4 font-poppins font-bold text-white rounded-lg hover:bg-blue-500 hover:text-blue-pale border-2 border-white hover:border-blue-medium">
        Submit
      </button>
    </form>
  );
};

export default FormMain;
