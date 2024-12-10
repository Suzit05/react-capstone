import React from 'react'
import Signup from '../assets/Components/Signup'

const Home = () => {
    return (
        <>
            <div className=' text-black w-full h-full flex  justify-evenly '>

                <div className='bg-purple-400 w-full h-[100vh]'>pic</div>
                <div className='bg-black w-full h-[100vh]'><Signup></Signup></div>

            </div>
        </>

    )
}

export default Home