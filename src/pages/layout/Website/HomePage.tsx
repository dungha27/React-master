import React from 'react'
import Banner from './Banner'
import Content  from './content'
import FooterWebsite from './FooterWebsite'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>
        <div className="max-w-2xl mx-auto">
            
            <nav className="border-gray-200">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="#" className="flex">
                    <img className='w-32 h-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAm5iUbmMAA8_fSOnxG5e8YgI53nsw0U2JQ&usqp=CAU" alt="" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap pt-4 text-red-700">CMOBILE</span>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium "  >
                   
                <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-4 pr-4 py-2 md:hover:text-blue-700 md:p-4 text-lg">Home</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-4 pr-4 py-2 md:hover:text-blue-700 md:p-4 text-lg">Produc</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-4 pr-4 py-2 md:hover:text-blue-700 md:p-4 text-lg">Blog</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-4 pr-4 py-2 md:hover:text-blue-700 md:p-4 text-lg">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <Banner/>
            <h1 className="text-xl pl-64">Sản Phẩm Nổi Bật</h1>
            <Content />
            <FooterWebsite/>
        </div>
        
        <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script></div>
    )
}

export default HomePage