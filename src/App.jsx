//@ts-nocheck
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currencyRates, setCurrencyRates] = useState({
    rates: [],
  })
  const [currencyAmount, setCurrencyAmount] = useState(1)

  useEffect(async function () {
    const response = await axios.get(
      'https://api.ratesapi.io/api/latest?base=USD'
    )
    setCurrencyRates(response.data)
  }, [])

  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <section>
          <label htmlFor="Currency">Currency Amount (base: USD): </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={currencyAmount}
            name="Currency"
            onChange={function (event) {
              setCurrencyAmount(event.target.value)
            }}
          ></input>
        </section>
        <ul>
          {Object.entries(currencyRates.rates).map(function ([
            currencyCode,
            currencyValue,
          ]) {
            return (
              <li key={currencyCode}>
                {currencyCode}: {(currencyValue * currencyAmount).toFixed(2)}
              </li>
            )
          })}
        </ul>
      </main>
      <footer>This Currency Converter App was created by Mandy Wade</footer>
    </div>
  )
}
