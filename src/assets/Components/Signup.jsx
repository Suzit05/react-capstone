import React, { useState } from 'react'

const Signup = () => {
    const [formData, setformData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        termsandconditions: false,
    })

    const [error, seterror] = useState({
        name: false,
        username: false,
        email: false,
        mobile: false,
        termsandconditions: false,
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const { name, username, email, mobile, termsandconditions } = formData;
        seterror({
            name: false,
            username: false,
            email: false,
            mobile: false,
            termsandconditions: false,
        })
        if (name.trim().length === 0) {
            seterror((prevState) => { return { ...prevState, name: true } })
        }
        if (username.trim().length === 0) {
            seterror((prevState) => { return { ...prevState, username: true } })
        }
        if (email.trim().length === 0) {
            seterror((prevState) => { return { ...prevState, email: true } })
        }
        if (mobile.trim().length === 0) {
            seterror((prevState) => { return { ...prevState, mobile: true } })
        }
        if (termsandconditions === false) {
            seterror((prevState) => { return { ...prevState, termsandconditions: true } })
        }
    }
    return (
        <div className='text-black'>

            <div className=' flex flex-col  items-center justify-center mt-[10vh]'>
                <div className='flex flex-col justify-center items-center h-fit  p-6  w-fit'>
                    <h1 className='text-4xl font-mono text-green-400'>Super app</h1>
                    <h3 className='text-sm'>Create your own account</h3>
                </div>
                <form className='flex-col flex gap-4   w-[40vh] ' action="">
                    <input onChange={(e) => { setformData({ ...formData, name: e.target.value }) }} className='bg-zinc-300 p-2 rounded-md' type="text" placeholder='Name' value={formData.name} />
                    {error.name ? <p className='text-red-500 text-xs' >Required valid data</p> : ""}

                    <input onChange={(e) => { setformData({ ...formData, username: e.target.value }) }} className='bg-zinc-300 p-2 rounded-md' type="text" placeholder='username' value={formData.username} />
                    {error.username ? <p className='text-red-500 text-xs' >Required valid data</p> : ""}
                    <input onChange={(e) => { setformData({ ...formData, email: e.target.value }) }} className='bg-zinc-300 p-2 rounded-md' type="email" placeholder='email' value={formData.email} />
                    {error.email ? <p className='text-red-500 text-xs' >Required valid data</p> : ""}

                    <input onChange={(e) => { setformData({ ...formData, mobile: e.target.value }) }} className='bg-zinc-300 p-2 rounded-md' type="text" placeholder='Mobile' value={formData.mobile} />
                    {error.mobile ? <p className='text-red-500 text-xs' >Required valid data</p> : ""}
                    <div >     <input onChange={(e) => { setformData({ ...formData, termsandconditions: e.target.checked }) }} type="checkbox" name="checkbox" id="checkbox" checked={formData.termsandconditions} />
                        <label className='text-white' htmlFor="checkbox">Agree to terms and conditions</label>
                        {error.termsandconditions ? <p className='text-red-500 text-xs' >Agree to proceed</p> : ""}</div>



                    <button onClick={handleSubmit} className='bg-green-400 rounded-md p-1 text-white ' type="submit">Sign up</button>
                </form>
            </div>

        </div>
    )
}

export default Signup