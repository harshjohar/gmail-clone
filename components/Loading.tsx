import React from 'react'
function Loading() {
  return (
    <div className='h-screen w-screen overflow-hidden grid place-items-center'>
      <img src={'./loading.gif'} alt="Gmail" />
    </div>
  )
}

export default Loading