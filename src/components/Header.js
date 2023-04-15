import Image from "next/legacy/image";
import logo from '../../public/logo.png'

const Header = () => {
    return (
        <header className="flex justify-between max-w-6xl">
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
            <form>
                <input type="text" placeholder="Search" />
            </form>
            <div>
                <p>Home Button</p>
                <p>+ Button</p>
                <p>User Pic</p>
            </div>
        </header>
    )
}

export default Header;