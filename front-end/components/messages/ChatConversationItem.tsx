import ProfilePicture from "../common/ProfilePicture";
import classNames from "classnames";

const ChatConversationItem = (prop: chatConversationProp) => {
  const className = classNames('flex flex-row p-5 items-center', {
    'justify-end': prop.owner
  });
  return (
    <div className={className}>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
        imageWidth={30}
      />
      <p className="ml-2">{prop.message}</p>
    </div>
  );
};

export default ChatConversationItem;