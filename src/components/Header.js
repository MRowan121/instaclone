import Image from "next/legacy/image";
import logo from '../../public/logo.png'
import { 
    AiOutlineSearch, 
    AiFillHome, 
    AiOutlinePlusCircle 
} from 'react-icons/ai'

const Header = () => {
    return (
        <header className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-48 relative hidden lg:inline-grid">
                <Image 
                    src={logo} 
                    layout="fill"
                    className="object-contain"
                />
            </div>
            <div className="cursor-pointer h-24 w-16 relative lg:hidden">
                <Image 
                    src={'https://raw.githubusercontent.com/ijsto/reactnextjssnippets/master/images/logo02.png'} 
                    layout="fill"
                    className="object-contain"
                />
            </div>
            <form className="relative mt-1">
                <div className="absolute top-1 left-1">
                    <AiOutlineSearch className="text-2xl text-gray-500" />
                </div>
                <input type="text" placeholder="Search" className="bg-gray-50 pl-8 border-gray-500 text-lg focus:ring-black focus:border-black rounded-md border-2" />
            </form>
            <div className="flex space-x-5">
                <AiFillHome className="text-3xl" />
                <AiOutlinePlusCircle className="text-3xl" />
                <p>User Pic</p>
            </div>
        </header>
    )
}

export default Header;