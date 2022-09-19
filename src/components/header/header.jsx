import * as Components from './header.styles'

export const Header = () => {
  return(
    <>
      <Components.Header>
        <Components.Nav>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="Ironhack Logo" />
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="Menu" />
        </Components.Nav>
        <Components.Content>
          <h1>Say hello to <br/> ReactJS</h1>
          <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer.</p>
          <Components.Button>
            Awesome!
          </Components.Button>
        </Components.Content>
      </Components.Header>
    </>
  )

}

