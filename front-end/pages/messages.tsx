import ChatFriendSearch from "@/components/messages/ChatFriendSearch";
import ChatPreviewList from "@/components/messages/ChatPreviewList";
import ChatConversation from "@/components/messages/ChatConversation";

const Messages = () => {
  return (
    <div className="flex flex-row p-10 messages">
      <div className="basis-1/2">
        <ChatFriendSearch styleClass="p-10 messages__search" />
        <ChatPreviewList styleClass="p-10 messages__preview" />
      </div>
      <ChatConversation styleClass="basis-1/2 p-10 messages__conversation" />
    </div>
  );
};

export default Messages;