import {useState,useEffect} from 'react'
import Card from "../card/Card"


import data from '../../data/data.json'

function Cards() {
    const [dataset,setdataset] = useState([])

    useEffect(()=>{
        setdataset(data)
    },[])

    return (
        <div className="flex card-container">
            {dataset && dataset.map(function(data){
                return <Card key={data.id} data={data}/>
            })}
        </div>
    )
}

export default Cards