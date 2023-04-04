function Button(props) {
  return (
    <button type="button" className={`btn btn-${props.mode}${props.color}`}>{props.text}</button>
  )
}

export default Button