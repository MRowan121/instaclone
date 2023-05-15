import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../../firebase";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(database, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <BiDotsHorizontalRounded className="h-7 text-2xl" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt={username} />

      {/* Post Buttons */}
      {session && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <AiOutlineHeart className="btn" />
            <AiOutlineMessage className="btn" />
          </div>
          <BsBookmark className="btn" />
        </div>
      )}

      {/* Post Comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <BsEmojiSmile className="btn mr-4" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 outline-none"
            type="text"
            placeholder="Enter your comment..."
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={(e) => sendComment(e)}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
