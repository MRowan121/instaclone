

const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
                src="/headshot.png"
                alt="user-image" 
                className="h-16 rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">RowanTheBoat68</h2>
                <h3 className="text-sm text-gray-400">Welcome to InstaClone!</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">Sign out</button>
        </div>
    )
}

export default MiniProfile;