import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Image />
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