import React from 'react'

const Friend = props => {
  const {name, age, email} = props.friend

  return (
    <div className='friend'>
      <p className='name'>Name: {name}</p>
      <p className='age'>Age: {age}</p>
      <p className='email'>Email: {email}</p>
    </div>
  )
}

export default Friend
