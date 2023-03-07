import "./navbar.css";
function Navbar(props) {
  let dMBody = ()=>{
    if (props.DarkMode ===true) {
      document.body.style="background-color: black;"
    }else{
      document.body.style="background-color: whitesmoke;"
    }
  }
  return (
    <div className={props.DarkMode ===true ? "darkModeMode" : "" }>
      <nav  className={props.DarkMode ===true ? "darkModeBorder" : "" }>
        <div className="leftNavbar">Where in the world ?</div>
        <div>
          <button className={props.DarkMode ===true ? "darkModeBtn darkMode" : "darkMode" } onClick={()=>{props.setDarkMode(!props.DarkMode)}}>Dark Mode</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
