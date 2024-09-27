import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface DropdownSelectProps {
  options: string[];
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
}) => {
  return (
    <Select>
      <SelectTrigger className={cn("min-w-20 h-6 w-fit rounded-none border-none bg-white font-semibold text-xl focus:outline-none focus:ring-0")}>
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
