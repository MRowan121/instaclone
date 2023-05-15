import Post from "./Post";

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
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
  );
};

export default Posts;
