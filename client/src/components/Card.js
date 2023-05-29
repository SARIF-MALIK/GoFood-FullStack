import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItem = props.foodItems;
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    let finalPrice = qty * parseInt(options[size]);

    const handleAddToCart = async () => {
        let food = [];
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
                return;
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, img: foodItem.img, price: finalPrice, qty: qty, size: size })
                // await console.log(data); 
                return; 
            }
            return;
        }
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, img: foodItem.img, price: finalPrice, qty: qty, size: size })
    }
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    return (
        <div className="card m-3" style={{ "width": "18rem", "maxWidth": "360px" }}>
            <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{foodItem.foodName}</h5>
                <p className="card-text">{foodItem.description}</p>
                <div className='container w-100' >
                    <select className='m-2 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {
                            priceOptions.map((data) => {
                                return (
                                    <option value={data} key={data}>{data}</option>
                                )
                            })
                        }

                    </select>
                    <div className='d-inline h-100 fs-6' >
                        ₹{finalPrice}/-
                    </div>
                    <hr />
                    <button className='btn btn-success text-white' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
