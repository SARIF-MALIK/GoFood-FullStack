import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'


export const Home = () => {

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');

    const loadData = async () => {
        let response = await fetch('http://localhost:5000/api/fooddata', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        // console.log(json[0], json[1]); 
        setFoodItem(json[0])
        setFoodCat(json[1])

    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <div className='carousel'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner " id="carousel">
                        <div class="carousel-caption d-none d-md-block" style={{ zIndex: 10 }}>
                            <div className='d-flex justify-content-center '>
                                <input className='form-control me-2' type='search' placeholder='search' aria-label='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                                {/* <button cl  assName='btn btn-outline-success' type='submit'>Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900×700/?toast" className="d-block w-100 " style={{ filter: "brightness(40%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?dish" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='Card'>
                {
                    foodCat !== [] ? foodCat.map((data) => {
                        return (<div className='row mb-3'>
                            <div key={data._id} className='fs-3 m-3'>
                                {data.CategoryName}
                            </div>
                            <hr />
                            {
                                foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map((filteredItem) => {
                                        return (
                                            <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3' >
                                                <Card foodItems={filteredItem}
                                                    options={filteredItem.options[0]}
                                                />
                                            </div>
                                        )
                                    })
                                    : <div>No such data found</div>
                            }

                        </div>)
                    }) : <div>""""</div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    )
}
