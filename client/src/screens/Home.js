import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
export const Home = () => {
    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousal />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    )
}
