import React from 'react'
import { Link } from 'react-router-dom'
Link
const Footer = () => {
    return (
        <div style={{ height: '350px', marginTop: '100px' }} className='mt-5 w-full bg-violet-600 text-white p-4'>
            <div className='flex justify-between p-4'>
                <div style={{ width: '400px' }} className='intro' >
                    <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast me-2"></i> E-Cart</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, qui iste eveniet officia veniam, quibusdam eligendi culpa optio quod et eius ipsam ut delectus nam tenetur modi consequuntur maxime repellat.</p>
                    <p>code licensed luminar, docs cc BY 3.0.</p>
                    <p>Currently v5.3.2.</p>
                </div>
                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
                    <Link to={'home/'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                    <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>History Page</Link>


                </div>

                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Guides</h5>
                    <a href="https://react.dev/" style={{textDecoration: 'none' , color:'white'}} target='_blank'>React</a>
                    <a href="https://www.npmjs.com/package/react-bootstrap" style={{textDecoration: 'none' , color:'white'}} target='_blank'>React Bootstrap</a>
                    <a href="https://reactrouter.com/" style={{textDecoration: 'none' , color:'white'}} target='_blank'>React Router</a>
                </div>

                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Contacts</h5>
                    <div className='flex'>
                        <input type="text" placeholder='Enter Your Email Here..'
                            className='rounded p-1' />
                        <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                    </div >
                    <div className='icons flex justify-between mt-3 '>
                        <a href="https://en.wikipedia.org/wiki/Twitter" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/neeraja-sunny-66709b291/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-envelope"></i></a>
                    </div>
                    
                </div> 
                
            </div>
            <p  className='text-center mt-5 text-white'>Copyright © May 2024 Batch , E-Cart , Built with React.  </p>
        </div>
    )
}

export default Footer