import React from 'react'

const Title = ({children}) => {
  return (
    <h2
        className = "animate-in"
        style = {{
            animationDelay: '600ms'
        }}
    >
        {children}
    </h2>
  )
}

export default Title