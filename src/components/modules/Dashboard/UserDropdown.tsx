"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { UserInfo } from "@/types/user.types"

interface Props {
  userInfo: UserInfo
}

const UserDropdown = ({ userInfo }: Props) => {
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="w-5 h-5"/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          Settings
        </DropdownMenuItem>

        <DropdownMenuItem>
          Logout
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default UserDropdown