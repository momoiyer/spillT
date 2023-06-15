const CreatePost = () => {
  return (
    <div className="flex-col border-solid border-2">
      <p>Create post</p>
      <div>
        <input
          type="text"
          id="post_text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What's on your mind?"
        />
        <button
          type="submit"
          className="text-white absolute bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
