const Button = (props) => {
  return (
    <div className="Button">
      <a href={props.url}>{props.text}</a>
    </div>
  );
};

export default Button;
