import { Fragment } from 'react'
import './App.css'

// import data from './data/data.json'



import Navbar from './componets/Navbar/Navbra'
import Cards from './componets/Cards-container/Cards-container'


function App() {

    
    return (
        <Fragment>
                <Navbar/>
                <main>
                    <Cards/>
                </main>
        </Fragment>
    )
}

export default App