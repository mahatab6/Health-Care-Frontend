"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const DashboardSearch = () => {
  return (
    <div className="flex-1 flex items-center justify-end gap-2">
      <div className="relative w-full max-w-md hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"/>
        <Input
          type="text"
          placeholder="Search..."
          className="pl-9 pr-4"
        />
      </div>
    </div>
  )
}

export default DashboardSearch