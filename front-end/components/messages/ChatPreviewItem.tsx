import ProfilePicture from '../common/ProfilePicture';

const ChatPreviewItem = (props: any) => {
  return (
    <div className='flex items-center flex-row p-3' onClick={props.onClickToggle}>
      <ProfilePicture
        imageUrl='/profile.png'
        altText='Profile Picture'
      />
      <div className='ml-4'>
        <p>Jordan King</p>
        <p>last message is this...</p>
        <p>this message was sent 5hrs ago</p>
      </div>
    </div>
  );
};

export default ChatPreviewItem;