import React from 'react'

const Error = (props) => {
  return (
    <h1>Oops, something happened: {props.errorMessage}</h1>
  )
}

export default Error ;