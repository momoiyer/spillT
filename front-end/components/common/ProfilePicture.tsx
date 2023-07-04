import Image from 'next/image';

const ProfilePicture = (props: profilePicture) => {
  let baseClass = "p-1 rounded-full bg-neutral-300";
  return (
    <Image
      src={props.imageUrl}
      alt={props.altText}
      width={props.imageWidth ? props.imageWidth : 50}
      height={props.imageHeight ? props.imageHeight : 50}
      className={props.styleClass ? props.styleClass + baseClass : baseClass} />
  );
};

export default ProfilePicture;