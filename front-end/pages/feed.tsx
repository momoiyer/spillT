import CreatePost from "../components/CreatePost"

const Feed = (props: postProp) => {
  return (
    <div>
      <h1>This is your feed</h1>
      <CreatePost />
    </div>
  );
};

export default Feed;