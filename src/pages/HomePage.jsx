import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryDetail = async () => {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const countriesData = response.data;
      setCountries(countriesData);
    };
    countryDetail();
  }, []);

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>;
      {countries.map((aCountry) => (
        <div key={aCountry._id}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${aCountry.alpha2Code.toLowerCase()}.png`} alt={aCountry.name.common} />  <Link to={aCountry.alpha3Code}>{aCountry.name.common}</Link>
        </div>
        
      ))}
    </>
  );
}
export default HomePage;
