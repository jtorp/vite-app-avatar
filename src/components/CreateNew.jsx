import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const CreateNew = () => {
    const [file, setFile] = useState()
    const [caption, setCaption] = useState('')
    let navigate = useNavigate()

    const proxyUrl = "/api/v1/"


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        formData.append('caption', caption)
        const result =
            await axios.post(`${proxyUrl}items`, formData) 
        navigate('/')
    }

    const uploadFile = (e) => {
        const file = e.target.files[0]
        setFile(file)
    }
    const handleAddCaption = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div className='w-full h-screen mt-20 flex flex-col gap-3 items-center justify-start'>
            <form className='border-2 px-5 py-10 flex flex-col space-y-5' action="submit" onSubmit={handleSubmit}>
                <label htmlFor="image" className="sr-only">upload image</label>
                <input className="bg-gray-800 p-2 rounded" type="file" accept="image/*"
                    onChange={uploadFile}
                />
                <input className="bg-gray-800 p-2  rounded" type="text" name="caption" id="caption" placeholder='image caption' onChange={handleAddCaption} />
                <button className="rounded bg-gray-700 p-2">Submit</button>
            </form>
        </div>
    )
}

export default CreateNew