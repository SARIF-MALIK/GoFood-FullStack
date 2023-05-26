import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousal from '../components/Carousal'


export const Home = () => {

    const [foodCat, setFoodCat] = useState([]); 
    const [foodItem, setFoodItem] = useState([]); 

    const loadData = async()=>{
        let response = await fetch('http://localhost:5000/api/fooddata',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },    
        })
        const json = await response.json(); 
        // console.log(json[0], json[1]); 
        setFoodItem(json[0])
        setFoodCat(json[1])

    }

    useEffect(()=>{
        loadData(); 
    }, [])

    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousal />
            </div>
            
            <div>
            {
                foodCat !==[]? foodCat.map((data)=>{
                    return (
                    <div>{data.CategoryName}</div>
                    )   
                }) : <div>""""</div>
            }
                <Card />
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    )
}
