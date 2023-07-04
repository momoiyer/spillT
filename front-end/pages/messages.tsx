import ChatConversation from "@/components/messages/ChatConversation";
import ChatFriendSearch from "@/components/messages/ChatFriendSearch";
import ChatPreviewList from "@/components/messages/ChatPreviewList";
import ProfilePicture from "@/components/common/ProfilePicture";

const Messages = () => {
  return (
    <section className="flex justify-around p-5 bg-cyan-100 dark:bg-cyan-800 dark:text-white">
      {/* Left side section with search bar and chat preview */}
      <article className="basis-1/4 bg-white dark:bg-cyan-700">
        <ChatFriendSearch styleClass="p-5" />
        <ChatPreviewList styleClass="p-5" />
      </article>
      {/* right side section with chat owner info, chat details and message text area */}
      <article className="basis-1/2">
        <div className="flex items-center p-5">
          <ProfilePicture
            imageUrl='/profile.png'
            altText='Profile Picture'
            styleClass='bg-cyan-200 !important'
          />
          <p className="pl-5">Jordan King</p>
        </div>
        <ChatConversation styleClass="p-5 overflow-y-auto h-[65vh]" />
        <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter message here" />

      </article>
    </section>
  );
};

export default Messages;