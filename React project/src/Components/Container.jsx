function Container(props) {
  const styles = {
    container: {
      display: "flex",
    },
  };
  return <div>{props.children}</div>;
}
export default Container;
