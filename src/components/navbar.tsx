import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="flex flex-1 items-center">
          <Link to={"/"}>
          <img
            src="/logo.png"
            alt="CELPIP Logo"
            className="mr-2 w-48 object-cover"
            />
            </Link>
          <h1 className="text-xl font-semibold text-gray-800">
            Study Materials
          </h1>
        </div>
        <div className="flex-1 hidden md:flex gap-2 items-center ">
          <p className="text-customRed text-sm">Selected Product: </p>
          <Select>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Click to Select Product" />
            </SelectTrigger>
            <SelectContent className="bg-customRed text-white">
              <SelectItem value="practice-test" className="focus:bg-customDarkRed focus:text-white">FREE CELPIP-GENERAL PRACTICE TESTS (STARTER SET)</SelectItem>
              <SelectItem value="ls-practice-test" className="focus:bg-customDarkRed focus:text-white">FREE CELPIP-GENERAL LS PRACTICE TESTS (STARTER SET)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 flex justify-end">
          <Button
            variant="ghost"
            className="hover:bg-transparent group"
            aria-label="Sign in"
          >
            <Settings className="mr-2" />
            <span className="group-hover:text-customGold text-base transition duration-200">
              SIGN IN
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navabr;
