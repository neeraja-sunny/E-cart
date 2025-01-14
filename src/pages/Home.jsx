// rafce
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { current } from '@reduxjs/toolkit'

const Home = () => {
    const dispatch = useDispatch()

    const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
    // console.log(allProducts, loading, errorMsg);
     const [currentPage, setCurrentPage] = useState(1)
     const productPerPage = 8
     const totalPages = Math.ceil(allProducts?.length/productPerPage)
     const currentPageProductLastIndex = currentPage * productPerPage
     const currentPageProductFirstIndex = currentPageProductLastIndex-productPerPage
     const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

     const navigateToNextPage =()=>{
        if(currentPage!=totalPages){
            setCurrentPage(currentPage+1)
        }
     }

     const navigateToPrevPage =()=>{
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
     }



    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-1 mx-auto' >
                {
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>
                            <img width={'100px'} height={'100px'} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEO1m-2p6bxZvDYTAYAVyI3qbBLSWXfZB1Zc767VZXmp3EVEG1sf1T_pREx50jtMtRK2RtRoBpynzwf_r1gYu6ABj_tnMrFa_8A6m0Qqb86yTtaSqDCWmARZ8ST9ak3Uv2ahvYYr0TbUg/s1600/1.gif" alt="" />
                            Loading....
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    allProducts?.length > 0 ?
                                    visibleAllProducts?.map(product=>(
                                        <div key={product?.id} className='rounded border p-2 shadow'>
                                            <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
                                            <div className='text-center'>
                                                <h3 className='text-xl font-bold'>{product?.title}</h3>
                                                <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More..</Link>
                                            </div>
                                        </div>
                                        ))
                                        :
                                        <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                                            Product Not found!!!
                                        </div>
                                }

                            </div>
                            <div className='text-2xl text-center font-bold mt-20'>
                                <span onClick={navigateToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
                                <span>{currentPage} of {totalPages}</span>
                                <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Home