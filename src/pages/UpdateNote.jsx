import axios from "axios"
import { backendurl } from "../config"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { useEffect } from "react"


function UpdateNote(){


    const {_id} = useParams()
    const navigate = useNavigate()

    const [title,setTitle]=useState('')

const [description,setDescription]=useState('')

const getSingleNote =  async ()=>{
    try {
     const response =   await axios.get(`${backendurl}/api/SingleNote/${_id}`)
     console.log(response.data)
        setTitle(response.data.title),
        setDescription(response.data.description)
     
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}


const updateNote =  async (e)=>{
    e.preventDefault()
    try {
        await axios.put(`${backendurl}/api/updateNote/${_id}`,{
            title,
    description
        })
  toast.success('Note updated successfully')
navigate('/')


    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
    
}

useEffect(()=>{
    getSingleNote()
},[])
    return <div>
   <form onSubmit={updateNote} className="mx-10" >
    <input value={title} onChange={(e)=> setTitle(e.target.value)} className="border-2 py-2 mt-2 " type="text" />
    <br />
    <textarea value={description} onChange={(e)=> setDescription(e.target.value)} rows={6} className="border-2 py-2 mt-2" name="" id=""></textarea>
    <br />
    <button className="bg-gray-500 px-10 py-2 rounded-2xl" type="submit">Update</button>
   </form>
   <Toaster/>
    </div>
}
export default UpdateNote