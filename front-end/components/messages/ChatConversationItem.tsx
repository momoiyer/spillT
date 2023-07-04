import ProfilePicture from "../common/ProfilePicture";

const ChatConversationItem = (prop: chatConversationProp) => {
  return (
    <div className='flex flex-row p-10'>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
      />
      <p>{prop.message}</p>
    </div>
  );
};

export default ChatConversationItem;