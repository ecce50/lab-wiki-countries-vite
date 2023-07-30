import axios from "axios";
import { useEffect, useState } from "react";

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
      {countries.map((aCountry) => {
          return <p key={aCountry._id}>{aCountry.name.common}</p>;
          
      })}
    </>
  );
}
export default HomePage;
