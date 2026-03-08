"use client"

import { NavSection } from "@/types/dashboardtypes"
import { UserInfo } from "@/types/user.types"
import DashboardMobileMenu from "./DashboardMobileMenu"
import DashboardSearch from "./DashboardSearch"
import DashboardActions from "./DashboardActions"


interface DashboardNavbarContentProps {
  userInfo: UserInfo
  navItems: NavSection[]
  dashboardHome: string
}

const DashboardNavbarContent = ({
  userInfo,
  navItems,
  dashboardHome
}: DashboardNavbarContentProps) => {

  return (
    <div className="flex items-center gap-3 w-full border-b py-3.5 px-3">

      {/* Mobile Menu */}
      <DashboardMobileMenu
        userInfo={userInfo}
        navItems={navItems}
        dashboardHome={dashboardHome}
      />

      {/* Search */}
      <DashboardSearch />

      {/* Right Side */}
      <DashboardActions userInfo={userInfo} />

    </div>
  )
}

export default DashboardNavbarContent