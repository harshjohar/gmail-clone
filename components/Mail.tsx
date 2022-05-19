import {
  CropSquare,
  LabelImportantOutlined,
  StarOutline,
} from '@mui/icons-material'
import React from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'

function Mail({ mail, sent, drafts }: any) {
  const router = useRouter()

  return (
    <div
      className="flex cursor-pointer items-center space-x-2 border py-2 hover:shadow-lg"
      onClick={!drafts?() => router.push(`/mail/${mail.id}`):()=>router.push(`/mail/draft/${mail.id}`)}
    >
      <div className="flex w-[10%] space-x-3">
        <CropSquare />
        <StarOutline />
        <LabelImportantOutlined />
      </div>

      <div className="w-1/5">
        <p className="truncate">{sent?mail.to:mail.from}</p>
      </div>

      <div className="w-3/5">
        <p className="truncate">
          {mail.subject} - <span className='text-sm text-gray-500'>{mail.message}</span>
        </p>
      </div>

      <div><p>{mail.time?moment(mail.time.toDate().getTime()).format('LT'):".."}</p></div>
    </div>
  )
}

export default Mail
