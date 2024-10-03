import { useState } from 'react'
import './App.css'

function App(e) {

  function calculate(e) {
    e.preventDefault();
    const number = weight.value / (height.value / 100)** 2
    const rounded = number.toFixed(1)
    let resultText = "";

    if(rounded <= 17.5){
      resultText = "Underweight!"
    }
    else if(rounded > 17.5 && rounded <= 24.9){
      resultText = "Healthy!"
    }
    else if(rounded >= 25){
      resultText = "Overweight!"
    }
    result.innerHTML = rounded
    res.innerHTML = resultText
  }

  return (
    <>
    <div id='main-div'>
      <div>
        <p id='check-p'>BMI Calculator</p>
      </div>

      <form onSubmit={calculate}>
          <label htmlFor="weight">Your Weight:</label>
          <input type="text" name="kg" id="weight" placeholder='Enter Your Weight (KG)'/><br></br>

          <label htmlFor="height">Your Height:</label>
          <input type="text" name="cm" id="height" placeholder='Enter Your Height (CM)'/><br></br>

          <input type="submit" value="See Results!" id='btn' />
      </form>

      <div id='result-div'>
        <p id='result'></p>
        <p id='res'></p>
      </div>
    </div>
    </>
  )
}

export default App
