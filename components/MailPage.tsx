import {
  ArchiveOutlined,
  ArrowBack,
  DeleteOutline,
  MailOutline,
  ReportOutlined,
  WatchLaterOutlined,
} from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function MailPage({ mailData }: { mailData: any }) {
  const router = useRouter()
  return (
    <div className="w-full">
      {/* header */}
      <div className="space-x-6 text-black py-3">
        <Link href='/'>
        <ArrowBack className='cursor-pointer mr-4' />
        </Link>
        <ArchiveOutlined className='cursor-pointer' />
        <ReportOutlined className='cursor-pointer' />
        <DeleteOutline className='cursor-pointer' />

        <MailOutline className='cursor-pointer' />
        <WatchLaterOutlined className='cursor-pointer' />
      </div>
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

      <div className="mt-8">
        <Button className="border-black">
          <p className="rounded-md border border-black p-4 py-2 text-black">
            Reply
          </p>
        </Button>
        <Button className="border-black">
          <p className="rounded-md border border-black p-4 py-2 text-black">
            Forward
          </p>
        </Button>
      </div>
    </div>
  )
}

export default MailPage
