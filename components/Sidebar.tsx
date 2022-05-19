import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const menu = [
  {
    name: 'Inbox',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
    url: '/'
  },
  {
    name: 'Starred',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
    url: '/'
  },
  {
    name: 'Sent',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
    url: '/sent'
  },
  {
    name: 'Drafts',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
    url: '/drafts'
  },
  {
    name: 'More',
    icon: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
    url: ''
  },
]

function Sidebar() {
  const router = useRouter();
  return (
    <div className="h-screen w-1/5 min-w-[20%]">
      <div onClick={()=>{router.push('/compose')}} className="mx-4 my-4 flex w-3/5 cursor-pointer space-x-4 rounded-full border-t bg-white py-2 pt-3 pl-4 shadow-lg">
        <div>
          <Image
            src={
              'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/create_gm_red_24_2x.png'
            }
            width={25}
            height={25}
          />
        </div>
        <p className="hidden xl:block">Compose</p>
      </div>

      <div className="space-y-3 mt-6">
        {menu.map((item) => (
          <MenuOption name={item.name} icon={item.icon} key={item.name} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar

function MenuOption({ name, icon, url }: { name: string; icon: string, url: string }) {
  const router = useRouter();
  return (
    <div className="flex mx-2 space-x-4 ml-8 cursor-pointer" onClick={()=>router.push(url)}>
      <Image src={icon} height={20} width={20} />
      <p>{name}</p>
    </div>
  )
}
