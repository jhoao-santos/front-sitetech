import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Clock, DollarSign, Building2 } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  salary: string
  postedAt: string
  tags: string[]
  logo: string
}

export function JobCard({ title, company, location, type, salary, postedAt, tags, logo }: JobCardProps) {
  return (
    <Card className="overflow-hidden border-muted/60 transition-all hover:border-primary/50 hover:shadow-lg">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
        <Avatar className="h-12 w-12 rounded-lg border">
          <AvatarImage src={logo} alt={company} />
          <AvatarFallback className="rounded-lg bg-muted"><Building2 className="h-6 w-6 text-muted-foreground" /></AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg leading-tight tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground font-medium">{company}</p>
        </div>
      </CardHeader>
      <CardContent className="px-6 py-0 grid gap-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {type}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium text-emerald-600 dark:text-emerald-400">
            <DollarSign className="h-4 w-4" />
            {salary}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Postada em {postedAt}</span>
        <Button size="sm">Candidatar-se</Button>
      </CardFooter>
    </Card>
  )
}
