import ProfilePicture from "../common/ProfilePicture";
import ChatConversationItem from "./ChatConversationItem";

const Conversation = (props: chatProp) => {
  return (
    <div className={props.styleClass}>

      <div>
        <ChatConversationItem
          message="Hi! How are you?" />
        <ChatConversationItem
          message="I'm good!" />
        <ChatConversationItem
          message="It was nice meeting you yesterday!" />
        <ChatConversationItem
          message="Hi! How are you?" />
        <ChatConversationItem
          message="I'm good!" />
        <ChatConversationItem
          message="It was nice meeting you yesterday!" />
        <ChatConversationItem
          message="Hi! How are you?" />
        <ChatConversationItem
          message="I'm good!" />
        <ChatConversationItem
          message="It was nice meeting you yesterday!" />
        <ChatConversationItem
          message="Hi! How are you?" />
        <ChatConversationItem
          message="I'm good!" />
        <ChatConversationItem
          message="It was nice meeting you yesterday!" />
      </div>
    </div>);
};

export default Conversation;