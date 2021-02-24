import React from 'react'

export function App() {
  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <section>
        <label htmlFor="Currency">Currency Amount: </label>
        <input type="number" placeholder="1.00" name="Currency"></input>
        <ul>
          <li>All the Conversions</li>
          <li>Mapped</li>
        </ul>
      </section>
      <footer>This Currency Converter App was created by Mandy Wade</footer>
    </div>
  )
}
