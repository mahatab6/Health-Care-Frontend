"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge, Bell, Calendar, CheckCircle, Clock, UserPlus } from "lucide-react";



interface Notification {
  id: string;
  title: string;
  message: string;
  type: "appointment" | "schedule" | "system" | "user";
  timestamp: Date;
  read: boolean;
}

const MOCK_NOTIFICATION: Notification[] = [
  {
    id: "1",
    title: "New Appointment Booked",
    message: "A new appointment has been scheduled with Dr. Ahmed for tomorrow at 10:30 AM.",
    type: "appointment",
    timestamp: new Date("2026-03-06T10:30:00"),
    read: false,
  },
  {
    id: "2",
    title: "Schedule Updated",
    message: "Your schedule has been updated for the upcoming week.",
    type: "schedule",
    timestamp: new Date("2026-03-05T14:00:00"),
    read: true,
  },
  {
    id: "3",
    title: "System Maintenance",
    message: "The system will undergo maintenance tonight from 12:00 AM to 2:00 AM.",
    type: "system",
    timestamp: new Date("2026-03-04T18:00:00"),
    read: false,
  },
  {
    id: "4",
    title: "New User Registered",
    message: "A new patient has registered on the platform.",
    type: "user",
    timestamp: new Date("2026-03-03T09:15:00"),
    read: true,
  },
  {
    id: "5",
    title: "Appointment Reminder",
    message: "Reminder: You have an appointment with Dr. Rahman today at 4:00 PM.",
    type: "appointment",
    timestamp: new Date("2026-03-07T15:00:00"),
    read: false,
  },
];

const getNotificationIcon = (type : Notification["type"]) => {
    switch(type){
        case "appointment":
            return <Calendar className="h-4 w-4 text-blue-600"/>
        case "schedule":
            return <Clock className="h-4 w-4 text-amber-600"/>
        case "system":
            return <CheckCircle className="h-4 w-4 text-purple-600"/>
        case "user":
            return <UserPlus className="h-4 w-4 text-green-600"/>
        default:
            return <Bell className="h-4 w-4 text-gray-600"/>
    }
}


const NotificationDropdown = () => {
  
    const unreadCount = MOCK_NOTIFICATION.filter(notification => !notification.read).length

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"} className="relative">
                <Bell className="w-5 h-5"/>
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded full p-0 flex items-center justify-center">
                    <span className="text-[10px]">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                </Badge>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-center">
                <span>
                    Notifications
                </span>
                {
                    unreadCount > 0 && (
                        <Badge className="ml-2">
                            {unreadCount} new
                        </Badge>
                    )
                }
            </DropdownMenuLabel>

            <DropdownMenuSeparator>
                <ScrollArea className="h-75">
                    {
                        MOCK_NOTIFICATION.length > 0 ? (
                            <DropdownMenuItem>

                            </DropdownMenuItem>
                        ) : ("")
                    }
                </ScrollArea>
            </DropdownMenuSeparator>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationDropdown