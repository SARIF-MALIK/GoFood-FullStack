import React from 'react'

export default function Carousal() {
    return (
        <div ><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div className="carousel-inner " id="carousel">
                <div class="carousel-caption d-none d-md-block" style={{zIndex:10}}>
                    <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='search' aria-label='search'/>
                        <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900×700/?toast" className="d-block w-100 " style={{filter:"brightness(40%)"}} alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?dish" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."/>
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
        </div></div>
    )
}
