import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react'

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = Array.from({length: 5}, () => (
            {
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                jobTitle: faker.name.jobTitle(),
                avatar: faker.image.avatar(),
            }
        ))
        setSuggestions(suggestions)
    }, [])

    const display = suggestions.map(suggestion => {
        return (
            <div className='flex items-center justify-between mt-3' key={suggestion.userId}>
                <img
                    className='h-10 rounded-full border p-[2px]' 
                    src={suggestion.avatar} 
                    alt={suggestion.username}
                />
                <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                    <h3 className='text-sm text-gray-400 truncate w-[230px]'>{suggestion.jobTitle}</h3>
                </div>
                <button className='font-semibold text-blue-400 text-sm'>Follow</button>
            </div>
        )
    })

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between mb-5 text-sm">
                <h3 className="font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See all</button>
            </div>
            {display}
        </div>
    )
}

export default Suggestions