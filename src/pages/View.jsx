import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoWishlist } from '../redux/slices/wishlistSlice'
import { addtoCart } from '../redux/slices/cartSlice'



const View = () => {
    const userCart = useSelector(state=>state.cartReducer) 
    const dispatch = useDispatch()
    const userWishlist = useSelector(state=>state.wishlistReducer)
    const [product,setProduct] = useState({})
    const {id} = useParams() 
    console.log(id);
    console.log(product);
    
    useEffect(()=>{
        if(sessionStorage.getItem("allproducts")){
            const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
            //console.log(allProducts.find(item=>item.id==id) );
            setProduct(allProducts.find(item=>item.id==id))
        }
        
         
    },[])

    const handleWishlist =()=>{
        const existingProduct = userWishlist?.find(item=>item?.id==id)
        if(existingProduct){
            alert("Product already in your Wishlist!!")
        }else{
            dispatch(addtoWishlist(product))
        }
    }
    
    const handleCart =()=>{
        dispatch(addtoCart(product))
        const existingProduct = userCart?.find(item=>item?.id==id)
        if(existingProduct){
            alert("Product Quantity is Incrementing!!!")
        }else{
            alert("Product added to cart!!")
        }
    }

    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className='grid grid-cols-2 items-center h-screen '>
                    <div>
                        <img className='mt-5' width={'450px'} height={'200px'} src={product?.thumbnail} alt="" />
                        <div className='flex justify-between mt-5'>
                                    <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 rounded-md'>Add to Wishlist</button>
                                    <button onClick={handleCart} className='bg-green-600 text-white p-2 rounded-md'>Add to Cart</button>
                                </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>PID : {product?.id}</h3>
                        <h1 className='text-5xl font-bold '>{product?.title}</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
                        <h4><span className='font-bold'>Brand :</span> {product?.brand}</h4>
                        <h4><span className='font-bold'>Category :</span> {product?.category}</h4>
                        <p>
                            <span className='font-bold'>Description :</span> {product?.description}
                            
                        </p>
                        <h3 className='font-bold mt-4'>Client Reviews :</h3>
                        {
                            product?.reviews?.length>0 ?
                            product?.reviews?.map(item=>(
                                <div key={item?.date} className='shadow-border p-2 mb-2'>
                                     <h5>
                                    <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
                                </h5>
                                <p>Rating: {item?.rating}<i class="fa-solid fa-star text-yellow-400"></i></p>
                                </div>
                            ))
                            :
                            <div>No Reviews yet!!!</div>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default View