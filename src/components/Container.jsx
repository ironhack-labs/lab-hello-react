import React from 'react'

const Container = (variable) => {
  return (
    <div>
        <h1>
            {variable.title}
        </h1>
        <p>
            {variable.paragraph}
        </p>
    </div>
  )
}

export default Container
