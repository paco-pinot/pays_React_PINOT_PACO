import "./pays.css";
import Navbar from "../Navbar/Navbar";
import { Link,useParams } from "react-router-dom";
import { useEffect,useState } from "react";
function Pays(props) {
  const {id} = useParams();
  const countryPicked = props.data.find((e) => e.name.common === id);
   

  if(!countryPicked){
      return <div>Loading...</div>;
  }
  
  
  let languages =[]
  let fctLanguages=()=>{
    for (let elem in countryPicked.languages) {
      languages.push( countryPicked.languages[elem])
    }
  }
  let currencies
  for (let elem in countryPicked.currencies) {
   
      currencies=elem

  }
  let borderCountries = props.data.filter(country => countryPicked.borders ? countryPicked.borders.includes(country.cca3) : "").map(country => country.name.common);

  
  return (
    <div className={props.DarkMode ===true ? "darkModeMode paysDivv" : "paysDivv" }>
    {fctLanguages()}
      <Navbar DarkMode={props.DarkMode} setDarkMode={props.setDarkMode} />
      <div className="paysDiv">
        <Link to={"/"}>
          <div className="backBtn">
            <button>Back</button>
          </div>
        </Link>
        <div className="containerPaysDiv">
          <div className="drapeauPays">
          <img src={countryPicked.flags.svg} alt={countryPicked.flags.alt} />
          </div>
          <div className="infoPays">
            <div className="hautInfos">
              <div className="separationHaut">
                <div className="hautInfosTxt">
                 <b> Native name</b> : <span>{countryPicked.name.common}</span>
                </div>
                <div className="hautInfosTxt">
                <b>Population</b> : <span>{countryPicked.population}</span>
                </div>
                <div className="hautInfosTxt">
                <b>Region</b> : <span>{countryPicked.region}</span>
                </div>
                <div className="hautInfosTxt">
                <b>Sub Region</b> : <span>{countryPicked.subregion}</span>
                </div>
                <div className="hautInfosTxt">
                <b>Capital</b>  : <span>{countryPicked.capital}</span>
                </div>
              </div>
              <div className="separationBas">
                <div className="hautInfosTxt">
                <b>Top Level Domain</b> : <span>{countryPicked.tld}</span>
                </div>
                <div className="hautInfosTxt">
                <b>Currencies</b> : <span>{countryPicked.currencies ? countryPicked.currencies[currencies].name : ''}</span>
                </div>
                <div className="hautInfosTxt">
                 <b>Languages</b>  : {
                                    languages.map((element,index) => {
                                            return <span key={index}>{element}, &nbsp;</span> 
                                        })
                                    }
                </div>
              </div>
            </div>
            <div className="basInfos">
            <p><b>Border countries :</b></p> 
            {countryPicked.borders ? borderCountries.map((element, index) => {
                                return (
                                    <Link to={`/pays/${element}`} key={index} className={props.DarkMode ? "darkModeBorder  border" : " border"}> <p>{element}</p>  </Link>
                                )
                            }) : ""}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pays;
