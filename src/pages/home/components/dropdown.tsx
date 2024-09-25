import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { routes } from "@/data/route"
import { Link } from "react-router-dom"

const DropDown = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button size={"lg"} className="bg-customRed  hover:bg-customRed/90 text-white px-16 py-2 rounded-none">
              START
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-customRed text-white rounded-none">
           {routes.map((route, index) => (
            <>
            <DropdownMenuItem key={index} className="w-40  focus:bg-customDarkRed focus:text-white">
              <Link to={route.path} className="text-center">  {route.label} </Link>
            </DropdownMenuItem>
         {index != routes.length - 1 &&  <DropdownMenuSeparator />}
            </>
           ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDown