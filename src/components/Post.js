import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { database } from "../../firebase";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

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

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(database, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(database, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(database, "posts", id, "comments"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [database, id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "posts", id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [database]);

  const displayComments = comments.map((comment) => (
    <div className="flex items-center space-x-2 mb-2">
      <img
        src={comment.data().userImage}
        alt="user-image"
        className="h-7 rounded-full object-cover"
      />
      <p className="font-semibold">{comment.data().username}</p>
      <p className="flex-1 truncate">{comment.data().comment}</p>
      <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
    </div>
  ));

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
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <AiFillHeart className="btn text-red-400" onClick={likePost} />
            ) : (
              <AiOutlineHeart className="btn" onClick={likePost} />
            )}
            <AiOutlineMessage className="btn" />
          </div>
          <BsBookmark className="btn" />
        </div>
      )}

      {/* Post Comments */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll no-scrollbar">
          {displayComments}
        </div>
      )}

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
