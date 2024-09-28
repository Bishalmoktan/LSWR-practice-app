import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CardLayout {
  title: string; 
  nextLink?: string; 
  prevLink?: string; 
  isPrevDisabled?: boolean; 
  children: ReactNode; 
  timer?: number,
  enableNext?: boolean
  recordingTime?: number;
}

export default function CardLayout({
  title,
  nextLink,
  prevLink,
  isPrevDisabled = false, 
  children,
  enableNext = true,
  timer,
  recordingTime
}: CardLayout) {
  
  const displayTimer = (time: number) => {
    if(time){
      if (time > 60) {
        return `${Math.floor(time / 60)} minute${Math.floor(time / 60) > 1 ? 's' : ''}`;
      } else if (time > 0) {
        return `${timer} second${time > 1 ? 's' : ''}`;
      }
      } else {
        return 'None';
      }
  };
  const location = useLocation(); 
  const showTime = location.pathname.includes("speaking") ? "Prepartion: " : "Remaining time ";
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="bg-white shadow overflow-hidden rounded-none border border-gray-300 mx-auto max-w-5xl">
        <CardHeader className="flex flex-row justify-between bg-gray-200 py-2 border-gray-300 border-b">
          <h2 className="text-gray-600">{title}</h2>
          <div className="flex gap-4 text-sm relative">
           {recordingTime !== undefined && <p className="absolute right-44 top-0 w-[180px]">
              Recording:{" "}
              <span className={cn("text-red-600", recordingTime
                 >= 60 && "text-gray-700 font-medium"
              )}>
                {displayTimer(recordingTime)}
              </span>
            </p>}
           {timer !== undefined && <p className={cn("absolute right-12 top-0 w-[180px]", location.pathname.includes("speaking") && "w-[150px]")}>
              {showTime}
              <span className={cn("text-red-600", timer
                 >= 60 && "text-gray-700 font-medium"
              )}>
                {displayTimer(timer)}
              </span>
            </p>}
            {enableNext && (
              <Link to={nextLink!}>
                <Button className="bg-customBlue hover:bg-customDarkBlue px-2 h-6 text-sm text-white rounded-none">
                  Next
                </Button>
              </Link>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-0 text-base min-h-[75vh] tracking-wide">
          {children}
        </CardContent>
        <CardFooter className="flex justify-end py-2 bg-customGray border-gray-300 border-t">
          <Button
            className="bg-customRed hover:bg-customRed/90 px-2 h-6 text-sm text-white rounded-none"
            disabled={isPrevDisabled}
            onClick={() => prevLink && window.history.back()} 
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
