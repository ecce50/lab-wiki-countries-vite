import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});

  const countryData = async () => {
    const { data } = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    );
    setCountry(data);
  };

  useEffect(() => {
    countryData();
  }, []);

  {
    return country === undefined ? (
      <p>Nothing to see here</p>
    ) : (
      <h1>Country Details</h1>
    );
  }
}

export default CountryDetails;
