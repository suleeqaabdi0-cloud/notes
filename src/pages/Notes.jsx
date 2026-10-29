import axios from "axios"
import { backendurl } from "../config"
import { useState, useEffect } from "react"
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import toast, {Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";


function Notes(){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    const getAllData = async ()=>{
        try {
            const response = await axios.get(`${backendurl}/api/getResult`)
            setData(response.data.result || [])
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || 'Could not load notes')
        } finally {
            setLoading(false)
        }
    }

   const removeNote = async(id)=>{
    try {
        await axios.delete(`${backendurl}/api/removeNote/${id}`)
        toast.success('Note has been  deleted successfully')
        getAllData()
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
   }

    useEffect(()=>{
        getAllData()
    },[])


    return (
    <div>
        {loading ? (
            <p className="p-4 text-center">Loading notes...</p>
        ) : data.length === 0 ? (
            <p className="p-4 text-center text-gray-500">No notes found.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {data.map((note) => (
                    <div key={note._id} className="border border-gray-300 rounded-lg p-3 bg-white shadow-sm">
                        <div className="border-b py-2 mb-2">
                            <h1 className="font-semibold">{note.title}</h1>
                        </div>
                        <div className="min-h-24 py-2 whitespace-pre-wrap">
                            <p>{note.description}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => removeNote(note._id)} className="text-2xl text-red-500" aria-label="Delete note">
                                <MdOutlineDeleteForever />
                            </button>
                            <Link to={`/update/${note._id}`} aria-label="Update note">
                                <button className="text-2xl text-green-500">
                                    <MdBrowserUpdated />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )}
        <Toaster />
    </div>
    )
}
export default Notes