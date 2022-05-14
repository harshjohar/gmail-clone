import {
  CropSquare,
  LabelImportantOutlined,
  StarOutline,
} from '@mui/icons-material'
import React from 'react'
import moment from 'moment'

function Mail({ mail }: any) {
  return (
    <div className="flex items-center space-x-2 py-2 border hover:shadow-lg cursor-pointer">
      <div className="flex w-[10%]">
        <CropSquare />
        <StarOutline />
        <LabelImportantOutlined />
      </div>

      <div className="w-1/5">
        <p className="truncate">{mail.from}</p>
      </div>

      <div className='w-3/5'>
        <p className='truncate'>{mail.subject} - <span>{mail.message}</span></p>
      </div>

      <div>
          {/* <p>{mail.time?moment(mail.time).format('LT'):".."}</p> */}
      </div>
    </div>
  )
}

export default Mail
