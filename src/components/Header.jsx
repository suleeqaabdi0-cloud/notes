
import { Link } from "react-router-dom"

function Header (){
    return <div className="bg-blue-700 h-16 w-full text-center">
        <Link to="/add">
            <button className="bg-gray-300 py-2 px-20 rounded-md mt-4">Add Note</button>
        </Link>
    </div>
}

export default Header;