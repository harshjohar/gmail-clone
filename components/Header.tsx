import { Apps, Help, Menu, Search, Settings } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase'

function Header() {
  return (
    <div className="flex h-full items-center border-b">
      <div className="flex h-full w-1/5 items-center space-x-4 p-3 px-8">
        <MenuIcon className="cursor-pointer text-gray-700" />
        <div>
          <Image
            src={
              'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png'
            }
            height={40}
            width={110}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex h-full w-4/5 items-center justify-between">
        <div className="flex w-3/5 items-center space-x-3 rounded-lg border bg-gray-100 px-3">
          <Search className="cursor-pointer text-gray-500" />
          <input
            type="text"
            className="w-full bg-transparent p-3 outline-none placeholder:text-gray-700"
            placeholder="Search Mail"
          />
          <SettingsInputComponentIcon className="cursor-pointer text-gray-500" />
        </div>

        <div className="flex w-2/5 items-center justify-end space-x-3 pr-5">
          <Help className="cursor-pointer text-gray-700" />
          <Settings className="cursor-pointer text-gray-700" />
          <Apps className="cursor-pointer text-gray-700" />
          <div>
            <Image
              src={
                'https://lh3.googleusercontent.com/ogw/ADea4I6mhFiIaHKJjMiKeBpGlzQYguoYvbNmDiVdi7AryQ=s64-c-mo'
              }
              height={40}
              width={40}
              className='rounded-full cursor-pointer'
              onClick={()=>{signOut(auth)}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
