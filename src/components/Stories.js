import { useState, useEffect } from 'react';
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import Story from './Story';

const Stories = () => {
    const [storyUsers, setStoryUsers] = useState([])
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => ({
            username: minifaker.username({ locale:'en' }).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
            id: i,
        }));
        setStoryUsers(storyUsers)
    }, [])

    const storyFeed = storyUsers.map(user => {
        return <Story key={user.id} username={user.username} image={user.img} />
    })
    
    return(
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm'>
            {storyFeed}
        </div>
    )
}

export default Stories;