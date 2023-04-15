const Story = ({ username, image }) => {
    return (
        <div>
            <img src={image} alt={username} />
            <p>{username}</p>
        </div>
    )
}

export default Story;