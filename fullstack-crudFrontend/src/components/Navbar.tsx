import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <a href="#" className="text-3xl font-bold text-blue-700">SIMPLE-CRUD</a>
            </div>
            <div className=" md:flex md:items-center md:w-auto w-full" id="menu">
                <div className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <Link to="/addUsers" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                        ADD USER
                    </Link>
                </div>
            </div>
        </header>
    )
}
