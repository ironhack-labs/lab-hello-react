
import * as Components from './main.styles'

export const Main = () => {
  const contents = [
    {title: 'Declarative', text: 'React makes it \npainless to create \ninteractive UIs.', image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'},
    {title: 'Components', text: 'Build encapsulated \ncomponents that \nmanage their state.', image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'},
    {title: 'Single-Way', text: 'A set of immutable \nvalues are passed to \nthe components.', image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png'},
    {title: 'JSX', text: 'Statically-typed \ndesigned to run on\nmodern browsers.', image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png'},

  ]
  return(
    <>
      <Components.Main>
        <section>
          {contents.map((content) => {
            return (
              <div>
                <img src={content.image} alt={content.title}/>
                <h3>{content.title}</h3>
                <p>{content.text}</p>
              </div>
            )
          })}
        </section>
      </Components.Main>
    </>
  )

}