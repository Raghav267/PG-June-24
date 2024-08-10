function HelloClass(props) {
  //   props.name = "harsh";
  return (
    <>
      <h1>Hello {props.name} from the pregrad team</h1>
      <h1> {props.children}</h1>
    </>
  );
}

export default HelloClass;
