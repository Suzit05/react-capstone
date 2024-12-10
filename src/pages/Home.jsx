import React from 'react'
import Signup from '../assets/Components/Signup'

const Home = () => {
    return (
        <>
            <div className=' text-white w-full h-full flex  justify-evenly '>

                <div className='bg-purple-400 w-full h-[100vh]'>
                    <p className='absolute top-[80%] left-[16%] text-2xl bg-black'>Discover new things on Super app</p>
                    <img className='w-full h-full' src="https://images.unsplash.com/photo-1563901529645-025f8e326bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllc3xlbnwwfDF8MHx8fDA%3D" alt="" /></div>
                <div className='bg-black w-full h-[100vh]'><Signup></Signup></div>

            </div>
        </>

    )
}

export default Home