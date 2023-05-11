import { AiOutlinePlus } from 'react-icons/ai'

const Story = ({ username, image, isUser }) => {
    return (
        <div className='relative group cursor-pointer'>
            <img 
                src={image} 
                referrerPolicy="no-referrer"
                alt={username}
                className="h-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out"
            />
            {isUser && <AiOutlinePlus className='text-2xl absolute top-4 left-4 text-white'/>}
            <p className="text-xs w-14 truncate">
                {username}
            </p>
        </div>
    )
}

export default Story;