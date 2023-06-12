import ProfilePicture from "../common/ProfilePicture";
import ChatConversationItem from "./ChatConversationItem";

const Conversation = (props: chatProp) => {
  return (
    <div className={props.styleClass}>
      <div>
        <ProfilePicture
          imageUrl='/profile.png'
          altText='Profile Picture'
          imageWidth={60}
          imageHeight={30}
          styleClass='p-2'
        />
        <p>Jordan King</p>
      </div>
      <div>
        <ChatConversationItem
          message="Hi! How are you?" />
        <ChatConversationItem
          message="I'm good!" />
        <ChatConversationItem
          message="It was nice meeting you yesterday!" />
      </div>
      <div>
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter message here" />
      </div>
    </div>);
};

export default Conversation;