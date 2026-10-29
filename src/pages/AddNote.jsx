import axios from "axios"
import { backendurl } from "../config"
import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"

function AddNote(){
    const [title,setTitle]=useState('')
const [description,setDescription]=useState('')

const addNote = async (e) => {
    e.preventDefault()
    try {
        await axios.post(`${backendurl}/api/addNote`, {
            title,
            description
        })
        toast.success('Note added successfully')
        setTitle('')
        setDescription('')
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || error.message)
    }
}
    return <div>
       <div>
   <form  onSubmit={addNote} className="mx-10" >
    <input  value={title} onChange={(e)=> setTitle (e.target.value)} className="border-2 py-2 mt-2 " type="text" />
    <br />
    <textarea value={description} onChange={(e)=> setDescription(e.target.value)} rows={6} className="border-2 py-2 mt-2" name="" id=""></textarea>
    <br />
    <button className="bg-gray-500 px-10 py-2 rounded-2xl" type="submit">Add</button>
   </form>
   <Toaster/>
    </div>
    </div>
}
export default AddNote