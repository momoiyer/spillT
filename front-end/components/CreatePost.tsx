import ProfilePicture from "./common/ProfilePicture";

const CreatePost = () => {
  return (
    <div className="flex flex-col justify-items-center w-[32rem] shadow-lg p-3 rounded-lg">
      <div className="flex justify-center relative">
        <span className="font-semibold">Create post</span>
        <p className="absolute top-0 right-0">x</p>
      </div>
      <div className="flex items-center mt-2 mb-2">
        <ProfilePicture
          imageUrl="/profile.png"
          altText="Profile Picture"
          imageWidth={50}
          imageHeight={30}
          styleClass="p-2"
        />
        <p>Sally Jenkins</p>
      </div>
      <div>
        <input
          type="text"
          id="post_text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Got Tea to Spill?"
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-3"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;