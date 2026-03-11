import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getIconComponent } from "@/lib/iconMapper"
import { cn } from "@/lib/utils"
import { createElement } from "react"


interface statsCardProps {
    title: string
    value : string | number
    iconName : string
    description ?: string
    className ?: string
}

const StatsCard = ({title, value, iconName, description, className} : statsCardProps) => {
  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <div>
                {createElement(getIconComponent(iconName), {className : "w-6 h-6"})}
            </div>
        </CardHeader>

        <CardContent className="space-y-1">
            <div className="text-2xl font-bold">{value}</div>
            {
                description && (
                    <p className="text-xl font-medium text-muted-foreground">{description}</p>
                )
            }
        </CardContent>
    </Card>
  )
}

export default StatsCard