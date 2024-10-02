import { cn } from "@/lib/utils";

interface InstructionItemProps {
  instructions: {
    text?: string;
  }[];
}

export default function InstructionItem({
  instructions,
}: InstructionItemProps) {
  return (
    <ul className="list-disc pl-20 mb-4 max-w-[70%]">
      {instructions.map((instruction, index) => (
        <li
          className={cn(
            "py-4 font-medium text-customLightBlue",
            index != instructions.length - 1 && "border-b border-dashed"
          )}
          key={index}
        >
          {instruction?.text}
        </li>
      ))}
    </ul>
  );
}
