import ProfilePicture from '../common/ProfilePicture';

const ChatPreviewItem = () => {
  return (
    <div className='flex flex-row p-10'>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
        imageWidth={60}
        imageHeight={30}
        styleClass='p-2'
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