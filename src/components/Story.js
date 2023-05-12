import { AiOutlinePlus } from 'react-icons/ai'

const Story = ({ username, image, isUser }) => {
    return (
        <div className='relative group cursor-pointer'>
            <img 
                src={image} 
                referrerPolicy="no-referrer"
                alt={username}
                className="h-14 rounded-full p-[1.5px] border-red-500 border-2 groupedIcon"
            />
            {isUser && <AiOutlinePlus className='text-2xl absolute bottom-3 right-0 text-white bg-blue-500 rounded-full groupedIcon'/>}
            <p className="text-xs w-14 truncate">
                {username}
            </p>
        </div>
    )
}

export default Story;