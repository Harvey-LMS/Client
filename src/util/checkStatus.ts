interface Props {
  title: string;
  content: string;
}

export const handleCheckStatus = ({ title, content }: Props) => {
  if (
    title.length === 0 ||
    content.length === 0 ||
    title === "This is title" ||
    content === "This is content"
  ) {
    return true;
  }

  return false;
};
