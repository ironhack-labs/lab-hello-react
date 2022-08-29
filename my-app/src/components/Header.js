
function Header(){
    const title ='Say hello to ReactJS';
    const description = 'You will learn how to use the most popular frontend library, and become a super Ninja developer.';
    const button = 'Awesome!';
    const link='#';

    return (
        <div className="text">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>{button}</a>
      </div>
      )
}

export default Header