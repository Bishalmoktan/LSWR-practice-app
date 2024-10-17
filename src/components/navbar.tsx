import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/context/AuthContext";
import { useTestContext } from "@/context/TestContext";
import { getAllTests } from "@/services/testService";
import { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { tests, setCurrentTest } = useTestContext();
  const navigate = useNavigate();

  useEffect(() => {
    getAllTests();
  }, []);

  const handleChange = (id: string) => {
    const currentTest = tests?.find((test) => test?._id === id) && tests[0];
    if (currentTest) {
      setCurrentTest(currentTest);
    }
  };

  const handleLogout = () => {
    toast.success("Logout successful");
    navigate("/auth");
    logout();
  };

  const testItems = useMemo(
    () =>
      tests?.map((test) => (
        <SelectItem key={test._id} value={test._id}>
          {test.title}
        </SelectItem>
      )),
    [tests]
  );
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2 lg:px-6">
        <div className="flex items-center flex-1">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="CELPIP Logo"
              className="object-cover mr-2 w-80"
            />
          </Link>
        </div>
        <div className="items-center flex-1 hidden gap-2 md:flex ">
          <p className="text-sm text-[#262161] font-semibold">
            Selected Product:{" "}
          </p>
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Click to Select Product" />
            </SelectTrigger>
            <SelectContent className="">{testItems}</SelectContent>
          </Select>
        </div>
        <div className="flex justify-end flex-1">
          {!isAuthenticated ? (
            <Button
              variant="ghost"
              className="text-white bg-customBlue hover:bg-customBlue/90 hover:text-white"
              aria-label="Sign in"
            >
              <Link to={"/auth"}>
                <span className="transition duration-200">SIGN IN</span>
              </Link>
            </Button>
          ) : (
            <Button onClick={handleLogout}>Logout</Button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
