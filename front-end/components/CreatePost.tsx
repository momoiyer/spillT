const CreatePost = () => {
  return (
    <div>
      <h3>Create post</h3>
      <form action="" method="post">
        <label>What's on your mind?</label>
        <input type="text" id="postText" name="postText" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
