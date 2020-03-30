import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// Screens
import Home from './screens/Home'
import Country from './screens/Country'
import Countries from './screens/Countries'
// Utils
import { fetchData } from './shared/utils/fetchData'
import jsonData from './timeseries.json'
import './App.css';

function App() {
  const [state, setstate] = useState()
  const url = 'https://pomber.github.io/covid19/timeseries.json'
  let countriesName

  // Returnere "true" hvis browseren er online
  let online = window.navigator.onLine
  // Definer localStorage
  let storage = window.localStorage

  // Første gang siden loader henter vi data
  useEffect(() => {
    if (online) {
      // Hent data fra online og brug det som "state"
      // og gem det i storage
      fetchData(url).then(data => {
        storage.setItem('timeseries', JSON.stringify(data))
        setstate(data)
      })
    } else {
      // Hent data fra storage og brug det som "state"
      if (storage.getItem('timeseries')) {
        const localData = storage.getItem('timeseries')
        setstate(JSON.parse(localData))
      } else {
        // Hent data fra en json fil og brug det som "state"
        const offlineData = jsonData
        setstate(offlineData)
      }
    }
  }, [online, storage])

  // Check om data er blevet skrevet ind i state
  if (state) {
    // Lav en variable med alle landenavne
    countriesName = Object.keys(state)
  }

  return (
    <Router>
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/countries">Countries</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/countries">
            <Countries lande={countriesName} />
          </Route>
          <Route path="/country/:name">
            <Country lande={state} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App
