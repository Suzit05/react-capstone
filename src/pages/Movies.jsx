import React, { useState } from 'react'
import MovieGrid from '../assets/Components/MovieGrid'
import MovieChip from '../assets/Components/MovieChip'

const Movies = () => {
  const [selected, setselected] = useState([])
  console.log(selected)

  const movies = [{
    value: "action",
    label: "Action",
    image: "",
  },
  {
    value: "romance",
    label: "Romance",
    image: "",
  },
  {
    value: "drama",
    label: "Drama",
    image: "",
  },
  {
    value: "horror",
    label: "Horror",
    image: "",
  },
  {
    value: "comedy",
    label: "Comedy",
    image: "",
  },
  {
    value: "kids",
    label: "Kids",
    image: "",
  },
  {
    value: "music",
    label: "Music",
    image: "",
  },
  {
    value: "fantasy",
    label: "Fantasy",
    image: "",
  },
  {
    value: "thriller",
    label: "Thriller",
    image: "",
  },
  ]
  return (
    <>
      <div className='OuterContainer flex justify-center  w-full h-screen'>
        <div className='flex-1 bg-gray-600'>
          <div className='flex-1 bg-yellow-200 w-full h-[60vh]'>asf</div>
          <div className='grid grid-rows-3 grid-cols-3 gap-1.5  w-fit  mx-[12vw]'>{selected.map((movie) => (<MovieChip selected={selected} setselected={setselected} key={movie.value} moviepass={movie} />))}</div>
          {selected.length < 3 ? <p className='absolute text-sm text-red-500  ml-[12vw]'>(min three req)</p> : ""}
        </div>
        <div className='flex-1 bg-pink-400 '>
          <h1>Movies</h1>
          <div className='grid ml-[12vw] grid-rows-3 grid-cols-3 bg-purple-500  justify-center w-fit    '>
            {movies.map((movie) => (<MovieGrid selected={selected} setselected={setselected} key={movie.value} moviepass={movie} />
            ))}
          </div>

        </div>


      </div>


    </>
  )
}

export default Movies