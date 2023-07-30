function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useStare({});

  const countryData = async () => {
    const { data } = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    );
  };

  useEffect(() => {
    countryData();
  }, []);

  {
    return (country === "undefined" ? (
      <p>Nothing to see here</p>
    ) : (
      <h1>Country Details</h1>
    );
    )
  }
}

export default CountryDetails;
