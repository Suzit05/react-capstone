import React from 'react'
import Movies from '../../pages/Movies'

const MovieGrid = ({ moviepass, selected, setselected }) => {
    const handleClick = () => { //isko fir se dhyn do
        if (selected.includes(moviepass.label)) {
            setselected(selected.filter(item => item !== moviepass.label))
        } else {
            setselected([...selected, moviepass.label])


        }

    }


    return ( //dynamic css pr dhyn do
        <div onClick={handleClick} className={`bg-red-400 m-2   w-[10vw] h-[20vh] border-2 ${selected.includes(moviepass.label) ? "border-red-500" : "border-black"} rounded-md border-black`} >
            <img src={moviepass.image} alt={moviepass.label} />
            <h1>{moviepass.label}</h1>
        </div>
    )
}

export default MovieGrid