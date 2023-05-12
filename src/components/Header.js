import Image from "next/legacy/image";
import logo from "../../public/logo.png";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <header className="shadow-sm border-b sticky top-0 bg-white bg-gr z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 shadow-sm xl:mx-auto">
        <div className="cursor-pointer h-24 w-48 relative hidden lg:inline-grid">
          <Image src={logo} layout="fill" className="object-contain" />
        </div>
        <div className="cursor-pointer h-24 w-16 relative lg:hidden">
          <Image
            src={
              "https://raw.githubusercontent.com/ijsto/reactnextjssnippets/master/images/logo02.png"
            }
            layout="fill"
            className="object-contain"
          />
        </div>
        <form className="relative mt-1">
          <div className="absolute top-1 left-1">
            <AiOutlineSearch className="text-2xl text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-8 border-gray-500 text-lg focus:ring-black focus:border-black rounded-md border-2"
          />
        </form>
        <div className="flex space-x-5 items-center">
          <AiFillHome className="icon hidden md:inline-flex" />
          {session ? (
            <>
              <AiOutlinePlusCircle
                className="icon"
                onClick={() => setOpen(true)}
              />
              <img
                src={session.user.image}
                alt="user-image"
                referrerPolicy="no-referrer"
                className="icon h-14 rounded-full"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
