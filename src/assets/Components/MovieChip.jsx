import React from 'react'

const MovieChip = ({ moviepass, selected, setselected }) => {
    const handleClick = () => {
        if (selected.includes(moviepass)) {
            setselected(selected.filter(item => item !== moviepass))
        } else {
            setselected([...selected, moviepass])
        }

    }

    return (
        <>
            <div className='flex  bg-green-600 w-fit h-fit border-2 py-1 px-2.5 gap-1 mx-2 rounded-lg' onClick={handleClick}>
                <h1 className='text-white'>{moviepass}</h1>
                <span onClick={handleClick}>x</span>

            </div>
        </>


    )
}

export default MovieChip