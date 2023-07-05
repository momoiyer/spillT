interface chatProp {
  styleClass: string;
  onClickToggle?: () => void;
}

interface chatConversationProp {
  profilePicture?: profilePicture;
  message: string;
  owner: boolean;
}