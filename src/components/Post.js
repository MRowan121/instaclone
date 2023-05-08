import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs'

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
            <p className='p-5 truncate'>
                <span className='font-bold mr-2'>
                    {username}
                </span>
                {caption}
            </p>
            <form className='flex items-center p-4'>
                <BsEmojiSmile className='btn mr-4' />
                <input 
                    className='border-none flex-1 focus:ring-0' 
                    type='text' 
                    placeholder='Enter your comment...'
                />
                <button className='text-blue-400 font-bold'>Post</button>
            </form>
        </div>
    )
}

export default Post;