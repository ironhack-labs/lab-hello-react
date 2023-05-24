const Hero = (props) => {
  return (
    <div className="bg-cover bg-zinc-800 m-8 pb-24 ">{props.children}</div>
  );
};

export default Hero;
