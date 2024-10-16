import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { FormErrors, LoginCredentials, SignupCredentials } from "@/types/auth";
import { toast } from "sonner";
import axios from "axios";
import { apiClient } from "@/services/apiClient";

export default function AuthForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupCredentials>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const endpoint = isSignUp ? "/auth/signup" : "/auth/login";
      const credentials: LoginCredentials = {
        email: formData.email,
        password: formData.password,
      };

      const { data } = await apiClient.post(endpoint, credentials);

      login(data.result.token);

      toast.success(
        isSignUp ? "Account created successfully!" : "Welcome back!"
      );

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-2">
      <Card className="w-[500px] max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {isSignUp ? "Sign Up" : "Sign In"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs text-gray-500" htmlFor="email">
                Email or mobile phone number
              </Label>
              <Input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-xs text-gray-500" htmlFor="password">
                  {isSignUp ? "Create password" : "Your password"}
                </Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-sm text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <>
                      <EyeOffIcon className="w-4 h-4 mr-1" />
                      Hide
                    </>
                  ) : (
                    <>
                      <EyeIcon className="w-4 h-4 mr-1" />
                      Show
                    </>
                  )}
                </Button>
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>
            {isSignUp && (
              <div className="space-y-2">
                <Label
                  className="text-xs text-gray-500"
                  htmlFor="confirmPassword"
                >
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <p className="text-xs text-center text-gray-500">
              By continuing, you agree to the{" "}
              <Link to="#" className="underline">
                Terms of use
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </form>
      </Card>
      <div className="w-[400px]">
        {!isSignUp && (
          <div className="w-full mb-4 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">
                  New to our community
                </span>
              </div>
            </div>
          </div>
        )}
        <Button
          variant="outline"
          className="w-full"
          onClick={toggleAuthMode}
          type="button"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "New to our community? Sign Up"}
        </Button>
      </div>
    </section>
  );
}
