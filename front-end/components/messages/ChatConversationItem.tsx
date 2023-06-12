import ProfilePicture from "../common/ProfilePicture";

const ChatConversationItem = (prop: chatConversation) => {
  return (
    <div className='flex flex-row p-10'>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
        imageWidth={60}
        imageHeight={30}
      />
      <p>{prop.message}</p>
    </div>
  );
};

export default ChatConversationItem;