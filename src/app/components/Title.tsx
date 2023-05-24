import React from 'react';

type PropTypes = {
    title: String
}

const Title:React.FC<PropTypes> = ({title}) => {
  return (
    <div className='text-golden text-xl font-bold'>{title}</div>
  )
}

export default Title