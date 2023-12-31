import ChatConversation from "@/components/messages/ChatConversation";
import ChatFriendSearch from "@/components/messages/ChatFriendSearch";
import ChatPreviewList from "@/components/messages/ChatPreviewList";
import ProfilePicture from "@/components/common/ProfilePicture";

const Messages = () => {
  const toggleDisplay = () => {
    console.log("here to toggle display!");
  };
  return (
    <section id="messages" className="flex justify-around p-3 bg-cyan-100 dark:bg-cyan-800 dark:text-white">
      {/* Left side section with search bar and chat preview */}
      <article id="messages-preview" className="bg-white dark:bg-cyan-700 rounded-lg">
        <ChatFriendSearch styleClass="p-5 border-b-[1px]" />
        <ChatPreviewList styleClass="p-5 overflow-y-auto h-[73vh]" onClickToggle={toggleDisplay} />
      </article>
      {/* right side section with chat owner info, chat details and message text area */}
      {/* on mobile show this only when chat is clicked from preview : To follow up */}
      <article id="messages-details" className="basis-1/2 hidden md:block">
        <div className="flex items-center p-3 border-b-[1px]">
          <ProfilePicture
            imageUrl='/profile.png'
            altText='Profile Picture'
            styleClass='bg-cyan-200 !important'
          />
          <p className="pl-5">Jordan King</p>
        </div>
        <ChatConversation styleClass="overflow-y-auto h-[66vh]" />
        <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter message here" />
      </article>
    </section>
  );
};

export default Messages;