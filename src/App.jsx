import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Pays from './components/pays/Pays';
import "./app.css"
function App() {
    const [DarkMode,setDarkMode]=useState(false)
    const [paysChoisi, setpaysChoisi] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) =>setData(data))
        .catch((error) => console.error(error))
        
    },[])
    function compare(a, b) {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    }
    const sortedData = data.sort(compare);
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Main DarkMode={DarkMode} setDarkMode={setDarkMode} sortedData= {sortedData} setpaysChoisi={setpaysChoisi} paysChoisi={paysChoisi} />,
        },
        {
            path:"/pays/:id",
            element: <Pays DarkMode={DarkMode} setDarkMode={setDarkMode} sortedData= {sortedData} paysChoisi={paysChoisi} data={data} />,
        },
    ])
    return (
        <div className={DarkMode ===true ? "darkModeMode body" : "body" }>
        <RouterProvider router={router} />
        </div>
    )
}

export default App
