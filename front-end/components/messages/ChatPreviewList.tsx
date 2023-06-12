import ChatPreviewItem from "./ChatPreviewItem";

const ChatPreviewList = (props: chatProp) => {
  return (
    <div className={props.styleClass}>
      <h1>this is the list of chats preview panel</h1>
      <ChatPreviewItem />
      <ChatPreviewItem />
      <ChatPreviewItem />
    </div>
  );
};

export default ChatPreviewList;