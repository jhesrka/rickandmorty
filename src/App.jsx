import { useEffect, useState } from "react";
import useFetch from "./assets/hooks/useFetch";
import CardInfo from "./assets/components/CardInfo";
import ResidentsList from "./assets/components/ResidentsList";
import Search from "./assets/components/Search";
import "./App.css"

function App() {
  const [location, setLocation] = useFetch();
  const [locationId, setLocationId] = useState(1)
  useEffect(() => {
    setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
  }, [locationId]);

  return (
    <>
      <div className="hero"/>
      
      <div className="container">
        <Search setLocationId={setLocationId} />
        <CardInfo location ={location}/>
        <ResidentsList residents ={location?.residents}/>
      </div>
    </>
  );
}

export default App;
