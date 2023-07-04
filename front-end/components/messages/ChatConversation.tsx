
import ChatConversationItem from "./ChatConversationItem";

const Conversation = (props: chatProp) => {
  return (
    <div className={props.styleClass}>
      <ChatConversationItem
        message="Hi! How are you?"
        owner={true}
      />
      <ChatConversationItem
        message="I'm good!"
        owner={false}
      />
      <ChatConversationItem
        message="It was nice meeting you yesterday!"
        owner={false}
      />
      <ChatConversationItem
        message="Hi! How are you?"
        owner={true}
      />
      <ChatConversationItem
        message="I'm good!"
        owner={true}
      />
      <ChatConversationItem
        message="It was nice meeting you yesterday!"
        owner={true}
      />
      <ChatConversationItem
        message="Hi! How are you?"
        owner={false}
      />
      <ChatConversationItem
        message="I'm good!"
        owner={false}
      />
      <ChatConversationItem
        message="It was nice meeting you yesterday!"
        owner={true}
      />
      <ChatConversationItem
        message="Hi! How are you?"
        owner={true}
      />
      <ChatConversationItem
        message="I'm good!"
        owner={false}
      />
      <ChatConversationItem
        message="It was nice meeting you yesterday!"
        owner={true}
      />
    </div>);
};

export default Conversation;