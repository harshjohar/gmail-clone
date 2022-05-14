import {
  ChevronLeft,
  ChevronRight,
  CropSquare,
  MoreVertOutlined,
  Refresh,
} from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

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

function Mails() {
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

      <div className='flex w-full justify-between pr-10 pl-5 mt-4'>
        {menu.map((item) => (
          <MenuOption name={item.name} icon={item.icon} />
        ))}
      </div>

      <div>
          
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
