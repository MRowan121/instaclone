import { useState, useEffect } from 'react';
import Story from './Story';
import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';

const Stories = () => {
    const [storyUsers, setStoryUsers] = useState([])
    const {data: session} = useSession();

    useEffect(() => {
        const storyUsers = Array.from({length: 20}, () => (
            {
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),
            }
        ))
        setStoryUsers(storyUsers)
    }, [])

    const storyFeed = storyUsers.map(user => {
        return <Story key={user.userId} username={user.username} image={user.avatar} />
    })
    
    return(
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm no-scrollbar'>
            {session && (
                <Story image={session.user.image} username={session.user.username} isUser="true"/>
            )}
            {storyFeed}
        </div>
    )
}

export default Stories;