export const Button = ({ text, link }) => {
  return (
    <a href={link}>
      <button>{text}</button>
    </a>
  );
};
