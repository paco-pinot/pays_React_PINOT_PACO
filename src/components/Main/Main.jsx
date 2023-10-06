import Navbar from "../Navbar/Navbar";
import "./main.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Main(props) {
    let body = document.body
    if (props.darkMode===true){
        body.classList.add("darkMode")
    }else{
        body.classList.remove("darkMode")
    }
    const [Search, setSearch] = useState("");
    const [regionSelected, setRegionSelected] = useState("All regions");
    let recherche =(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    
    return (
    <main className={props.DarkMode ===true ? "darkModeMode" : "" }>
        <Navbar DarkMode={props.DarkMode} setDarkMode={props.setDarkMode}/>
        <section className={props.DarkMode ===true ? "darkModeMode" : "" }>
            <div className="inputContainer">
                <div className={props.DarkMode ===true ? "darkModeMode input" : "input" }>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <input onChange={(e)=>{recherche(e)}} placeholder=" Search for a country" type="search" /> */}
                    <input onInput={(e) => recherche(e)} placeholder="Search for a country" type="search" />
                    {/* <input onKeyDown={(e) => recherche(e)} placeholder="Search for a country" type="search" /> */}
                </div>
                <div className="continent">
                
                    <div className={props.DarkMode ===true ? "darkModeBorder rightInput" : " rightInput" }>
                        <p>{regionSelected}</p>
                        <div className={props.DarkMode ===true ? "darkModeBorder dropdown-content" : "dropdown-content" }>
                                <p onClick={() => { setRegionSelected("All regions")}}>All regions</p> 
                                <p onClick={() => { setRegionSelected("Africa")}}>Africa</p>
                                <p onClick={() => { setRegionSelected("America")}}>America</p>
                                <p onClick={() => { setRegionSelected("Asia")}}>Asia</p>
                                <p onClick={() => { setRegionSelected("Europe")}}>Europa</p>
                                <p onClick={() => { setRegionSelected("Oceania")}}>Oceania</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tabElement">
            {
                regionSelected==="All regions"?
                props.sortedData
                .filter((pays)=>{return Search.toLowerCase()===""? pays : pays.name.common.toLowerCase().startsWith(Search)})
                .map((element)=>{
                    return(
                        <Link  to={`/pays/${element.name.common}`}>
                            <div className={props.DarkMode ===true ? "darkModeBorder country" : "country" } onClick={()=>{props.setpaysChoisi(element)}}>
                                <div className="imgCountry">
                                    <img src={element.flags.svg} alt={element.flags.alt}/>
                                </div>
                                <div className={props.DarkMode ===true ? "darkModeMode infoCountry" : "infoCountry" }>
                                    <p className="nameCountry">{element.name.common}</p>
                                    <p className="popCountry"><b>Population: </b> {element.population} </p>
                                    <p className="regionCountry"><b>Region: </b>{element.region} </p>
                                    <p className="capitalCountry"><b>Capital:</b> {element.capital} </p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            :
                props.sortedData
                                .filter((pays)=>{return Search.toLowerCase()===""? pays : pays.name.common.toLowerCase().startsWith(Search)})
                                .filter((fff)=>{return fff.region.includes(regionSelected)})
                                .map((element)=>{
                                    return(
                                        <Link  to={`/pays/${element.name.common}`}>
                                            <div className={props.DarkMode ===true ? "darkModeBorder country" : "country" } onClick={()=>{props.setpaysChoisi(element)}}>
                                                <div className="imgCountry">
                                                    <img src={element.flags.svg} alt={element.flags.alt}/>
                                                </div>
                                                <div className={props.DarkMode ===true ? "darkModeMode infoCountry" : "infoCountry" }>
                                                    <p className="nameCountry">{element.name.common}</p>
                                                    <p className="popCountry"><b>Population: </b> {element.population} </p>
                                                    <p className="regionCountry"><b>Region: </b>{element.region} </p>
                                                    <p className="capitalCountry"><b>Capital:</b> {element.capital} </p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            
                            }
            </div>
        </section>
    </main>

    )
}
export default Main

