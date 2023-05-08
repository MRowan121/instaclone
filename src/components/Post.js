import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'

const Post = ({ key, id, username, userImg, img, caption }) => {
    return (
        <div className='bg-white my-7 border rounded-md'>
            <div className="flex items-center p-5">
                <img 
                    className='h-12 rounded-full object-cover border p-1 mr-3' 
                    src={userImg} 
                    alt={username} 
                />
                <p className='font-bold flex-1'>{username}</p>
                <BiDotsHorizontalRounded className='h-7 text-2xl' />
            </div>
            <img
                className='object-cover w-full'
                src={img}
                alt=''
            />
            <div className='flex justify-between p-4'>
                <div className='flex space-x-4'>
                    <AiOutlineHeart className='btn'/>
                    <AiOutlineMessage className='btn' />
                </div>
                <BsBookmark className='btn' />
            </div>
        </div>
    )
}

export default Post;