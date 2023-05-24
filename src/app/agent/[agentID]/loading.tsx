import React from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
<AiOutlineLoading3Quarters className='text-4xl animate-spin duration-300 text-primary' />
    </div>
  )
}

export default Loading