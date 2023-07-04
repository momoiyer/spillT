import ChatPreviewItem from "./ChatPreviewItem";

const ChatPreviewList = (props: chatProp) => {
  return (
    <div className={props.styleClass}>
      <ChatPreviewItem />
      <ChatPreviewItem />
      <ChatPreviewItem />
    </div>
  );
};

export default ChatPreviewList;