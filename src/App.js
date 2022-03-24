
import './App.css';

import Countries from './component/Countries/countries';

function App() {
  return (
    <div className="App">
      {/* <LoadContries></LoadContries> */}
      {/* <Country></Country> */}


      <Countries></Countries>
    </div>
  );
}


// function LoadContries() {

//   const [countries, setCountries] = useState([])

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>visiting all country of the world </h1>
//       <h3>country : {countries.length}</h3>

//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>name:{props.name}</h2>
//       <h4>population:{props.population}</h4>
//     </div>
//   )
// }

export default App;
