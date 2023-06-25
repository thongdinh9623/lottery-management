'use client'
import React from 'react';

export default function Home() {

  const [likes] = React.useState();

  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <main>
      <fieldset>
        <legend>Chọn quy tắc chẵn lẻ</legend>
        <div>
          <input type="radio" id="evenOdd1" name="evenOdd" value="3 chẵn - 3 lẻ" />
          <label htmlFor="evenOdd1">3 chẵn - 3 lẻ</label>
        </div>
        <div>
          <input type="radio" id="evenOdd2" name="evenOdd" value="2 chẵn - 4 lẻ" />
          <label htmlFor="evenOdd2">2 chẵn - 4 lẻ</label>
        </div>
        <div>
          <input type="radio" id="evenOdd3" name="evenOdd" value="4 chẵn - 2 lẻ" />
          <label htmlFor="evenOdd3">4 chẵn - 2 lẻ</label>
        </div>
      </fieldset>
      <br />
      <fieldset>
        <legend>Chọn quy tắc chữ số hàng chục</legend>
        <div>
          <input type="radio" id="numberRule1" name="numberRule" value="1 - 1 - 1 - 1 - 1 - 1" />
          <label htmlFor="numberRule1">1 - 1 - 1 - 1 - 1 - 1</label>
        </div>
        <div>
          <input type="radio" id="numberRule2" name="numberRule" value="0 - 2 - 1 - 1 - 1 - 1" />
          <label htmlFor="numberRule2">0 - 2 - 1 - 1 - 1 - 1</label>
        </div>
        <div>
          <input type="radio" id="numberRule3" name="numberRule" value="0 - 1 - 2 - 1 - 1 - 1" />
          <label htmlFor="numberRule3">0 - 1 - 2 - 1 - 1 - 1</label>
        </div>
      </fieldset>
      <br />
      <button className="button" onClick={handleClick}>Sinh số</button>
    </main>
  )
}
