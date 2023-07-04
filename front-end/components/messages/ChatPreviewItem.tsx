import ProfilePicture from '../common/ProfilePicture';

const ChatPreviewItem = () => {
  return (
    <div className='flex flex-row p-10'>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
      />
      <div className=''>
        <p>Jordan King</p>
        <p>last message is this...</p>
        <p>this message was sent 5hrs ago</p>
      </div>
    </div>
  );
};

export default ChatPreviewItem;