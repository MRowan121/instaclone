import Post from "./Post";

const Posts = () => {
    const posts = [
        {
            id: "1",
            username: "RowanTheBoat68",
            userImg: "/headshot.png",
            img: "https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            caption: "Swimming in the ocean"
        },
        {
            id: "2",
            username: "RowanTheBoat68",
            userImg: "/headshot.png",
            img: "https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            caption: "Standing in the desert"
        }
    ]
    
    return (
        <>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </>
    )
}

export default Posts;