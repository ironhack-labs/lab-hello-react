function Container(props) {
  const styles = {
    container: {
      display: "flex",
    },
  };
  return <div style={styles.container}>{props.children}</div>;
}
export default Container;
