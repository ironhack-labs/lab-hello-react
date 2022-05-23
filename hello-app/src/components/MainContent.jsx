import Heading from "./Heading";
import Info from "./Info";
import Button from "./Button";

function MainContent({ data }) {
  const { title, infoText, btnText } = data;
  return (
    <article className='main-content'>
      <Heading title={title} />
      <Info infoText={infoText} />
      <Button btnText={btnText} />
    </article>
  );
}

export default MainContent;
