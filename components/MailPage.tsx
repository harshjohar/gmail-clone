import { Avatar, Button } from '@mui/material'
import React from 'react'

function MailPage({ mailData }: { mailData: any }) {
  return (
    <div className="w-full">
      {/* header */}
      <p>icons</p>
      <hr />
      <div className="p-10 py-5">
        <h3 className="text-3xl">{mailData.subject}</h3>
      </div>
      <div className="flex space-x-4">
        <Avatar />
        <div>
          <p className="text-sm font-bold">
            name{' '}
            <span className="text-xs font-normal text-gray-500">
              {'<' + mailData.from + '>'}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-5 w-full text-sm text-black">{mailData.message}</div>

      <div className='mt-8'>
      <Button className="border-black">
          <p className="text-black border border-black p-4 py-2 rounded-md">Reply</p>
        </Button>
        <Button className="border-black">
          <p className="text-black border border-black p-4 py-2 rounded-md">Forward</p>
        </Button>
      </div>
    </div>
  )
}

export default MailPage
