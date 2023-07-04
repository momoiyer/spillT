import ProfilePicture from "../common/ProfilePicture";
import classNames from "classnames";

const ChatConversationItem = (prop: chatConversationProp) => {
  const className = classNames('flex flex-row p-10 items-center', {
    'justify-end': prop.owner
  });
  return (
    <div className={className}>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
        imageWidth={40}
      />
      <p className="ml-2">{prop.message}</p>
    </div>
  );
};

export default ChatConversationItem;