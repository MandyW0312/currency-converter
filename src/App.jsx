import React, { useEffect, useState } from 'react'

export function App() {
  const [currencyAmount, setCurrencyAmount] = useState(1)
  const [currencyRates, setCurrencyRates] = useState({})
  //   base: 'USD',
  //   rates: {
  //     GBP: 0.7082990285,
  //     HKD: 7.7547340688,
  //     IDR: 14054.1989132225,
  //     ILS: 3.2670838136,
  //     DKK: 6.1225094681,
  //     INR: 72.3497447719,
  //     CHF: 0.9080355673,
  //     MXN: 20.3935452001,
  //     CZK: 21.3881113124,
  //     SGD: 1.321340359,
  //     THB: 30.0403424996,
  //     HRK: 6.2411493496,
  //     EUR: 0.8233163181,
  //     MYR: 4.042483122,
  //     NOK: 8.4375926231,
  //     CNY: 6.4516713321,
  //     BGN: 1.610242055,
  //     PHP: 48.6349415445,
  //     PLN: 3.719578462,
  //     ZAR: 14.4675613371,
  //     CAD: 1.2568746913,
  //     ISK: 127.2847027828,
  //     BRL: 5.4044129755,
  //     RON: 4.0135847192,
  //     NZD: 1.354437675,
  //     TRY: 7.1686975136,
  //     JPY: 105.9525769801,
  //     RUB: 73.6801416104,
  //     KRW: 1108.3072616499,
  //     USD: 1.0,
  //     AUD: 1.2635435534,
  //     HUF: 296.1798122839,
  //     SEK: 8.3066853285,
  //   },
  // })

  useEffect(function () {
    console.log('runs when app mounts')
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
            placeholder="1.00"
            name="Currency"
            onChange={function (event) {
              setCurrencyAmount(parseFloat(event.target.value))
            }}
          ></input>
          <button>Convert</button>
        </section>
        <ul>
          {/* {currencyRates.map(function (currencyRate) {
            return <li key={currencyRate.id}>{currencyRate.rates}</li>
          })} */}
          {/* <li>GBP: 0.7082990285 </li>
          <li>HKD: 7.7547340688</li>
          <li>IDR: 14054.1989132225</li>
          <li>ILS: 3.2670838136</li>
          <li>DKK: 6.1225094681</li>
          <li>INR: 72.3497447719</li>
          <li>CHF: 0.9080355673</li>
          <li>MXN: 20.3935452001</li>
          <li>CZK: 21.3881113124</li>
          <li>SGD: 1.321340359</li>
          <li>THB: 30.0403424996</li>
          <li>HRK: 6.2411493496</li>
          <li>EUR: 0.8233163181</li>
          <li>MYR: 4.042483122</li>
          <li>NOK: 8.4375926231</li>
          <li>CNY: 6.4516713321</li>
          <li>BGN: 1.610242055</li>
          <li>PHP: 48.6349415445</li>
          <li>PLN: 3.719578462</li>
          <li>ZAR: 14.4675613371</li>
          <li>CAD: 1.2568746913</li>
          <li>ISK: 127.2847027828</li>
          <li>BRL: 5.4044129755</li>
          <li>RON: 4.0135847192</li>
          <li>NZD: 1.354437675</li>
          <li>TRY: 7.1686975136</li>
          <li>JPY: 105.9525769801</li>
          <li>RUB: 73.6801416104</li>
          <li>KRW: 1108.3072616499</li>
          <li>USD: 1.0</li>
          <li>AUD: 1.2635435534</li>
          <li>HUF: 296.1798122839</li>
          <li>SEK: 8.3066853285</li> */}
        </ul>
      </main>
      <footer>This Currency Converter App was created by Mandy Wade</footer>
    </div>
  )
}
