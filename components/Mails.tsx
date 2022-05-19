import {
  ChevronLeft,
  ChevronRight,
  CropSquare,
  MoreVertOutlined,
  Refresh,
} from '@mui/icons-material'
import { collection, limit, orderBy, query, where } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../Firebase/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import Mail from './Mail'
import Loading from './Loading'

const menu = [
  {
    name: 'Primary',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
  },
  {
    name: 'Social',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
  },
  {
    name: 'Promotions',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
  },
  {
    name: 'Updates',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
  },
]

function Mails({ drafts, sent }: { drafts?: boolean; sent?: boolean }) {
  const [user] = useAuthState(auth)

  const [mailSnapshot, loading] = drafts
    ? useCollection(
        query(
          collection(db, 'drafts'),
          where('from', '==', user?.email),
          limit(15)
        )
      )
    : sent
    ? useCollection(
        query(
          collection(db, 'mails'),
          where('from', '==', user?.email),
          limit(15)
        )
      )
    : useCollection(
        query(
          collection(db, 'mails'),
          where('to', '==', user?.email),
          limit(15)
        )
      )

  if (loading) {
    return <Loading />
  }
  return (
    <div className="w-4/5">
      <div className="flex w-full items-center justify-between px-5 py-4">
        <div className="space-x-4">
          <CropSquare />
          <Refresh />
          <MoreVertOutlined />
        </div>
        <div className="space-x-4">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <hr />

      <div className="mt-4 flex w-full justify-between pr-10 pl-5">
        {menu.map((item) => (
          <MenuOption name={item.name} icon={item.icon} key={item.name} />
        ))}
      </div>

      <div className="mt-4 overflow-y-scroll scrollbar-hide">
        {mailSnapshot?.docs.map((item) => {
          return (
            <Mail
              mail={{ ...item.data(), id: item.id }}
              key={item.id}
              sent={sent}
              drafts={drafts}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Mails

const MenuOption = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex cursor-pointer space-x-4">
      <Image src={icon} height={20} width={20} />
      <p>{name}</p>
    </div>
  )
}
