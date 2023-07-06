import ChatPreviewItem from "./ChatPreviewItem";

const ChatPreviewList = (props: chatProp) => {
  return (
    <div className={props.styleClass}>
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
      <ChatPreviewItem onClickToggle={props.onClickToggle} />
    </div>
  );
};

export default ChatPreviewList;