const Main = () => {
  const clickAlert = () => {
    alert("Reacting!");
  };

  return (
    <div className="w-1/2 flex flex-col items-start gap-6 ml-11 pt-24">
      <h1 className="text-7xl text-white">Say Hello to ReactJS</h1>
      <p className="text-2xl text-white">
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button
        onClick={clickAlert}
        className="mt-4 bg-slate-50 rounded-lg p-4 w-32 text-blue-950"
      >
        Awesome!
      </button>
    </div>
  );
};

export default Main;
