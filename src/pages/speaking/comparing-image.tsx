import { Card, CardContent } from "@/components/ui/card";
import { ComparisonImage, SpeakingTestComparison } from "@/types/speaking";
import { useEffect, useState, useRef } from "react";
import Timer from "./timer";
import { cn } from "@/lib/utils";

export default function ComparingImage({
  comparison,
  images,
  question,
  additionalInfo,
  prepartionTime,
  recordingTime,
  selectionTime,
}: SpeakingTestComparison) {
  const [image1, setImage1] = useState(images[0]);
  const [image2, setImage2] = useState(images[1]);
  const selectedImageRef = useRef<ComparisonImage | null>(null);
  const [timer, setTimer] = useState(selectionTime);
  const [isPreparationPhase, setIsPreparationPhase] = useState(true);

  const handleImageSelect = (image: ComparisonImage) => {
    selectedImageRef.current = image;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (selectedImageRef.current) {
            setImage2(selectedImageRef.current);
          } else {
            setImage2(image1);
          }
          setImage1(comparison.image);

          setIsPreparationPhase(false);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
          i
        </span>
        {isPreparationPhase ? (
          <>
            <span>{question}</span>
            <p className="mt-2">{additionalInfo}</p>
          </>
        ) : (
          <span>{comparison.info}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          onClick={() => handleImageSelect(image1)}
          className={cn(
            "border border-black rounded-sm h-[500px] cursor-pointer",
            selectedImageRef.current === image1 && "bg-customDarkSkyBlue"
          )}
        >
          {!isPreparationPhase && (
            <p className="text-center mt-2 text-gray-600 text-sm font-medium">
              Your family's choice
            </p>
          )}
          <CardContent className="p-4">
            <img
              src={image1.imageUrl}
              alt={image1.name}
              width={300}
              height={250}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-sm text-gray-600">{image1.name}</h3>
            <div className="list-disc text-sm mt-4 list-inside text-gray-600">
              {image1.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => handleImageSelect(image2)}
          className={cn(
            "border border-black rounded-sm h-[500px] cursor-pointer",
            selectedImageRef.current === image2 && "bg-customDarkSkyBlue",
            timer === 0 && "bg-customLightGreen"
          )}
        >
          {!isPreparationPhase && (
            <p className="text-center mt-2 text-gray-600 text-sm font-medium">
              Your's choice
            </p>
          )}

          <CardContent className="p-4">
            <img
              src={image2.imageUrl}
              alt={image2.name}
              width={300}
              height={250}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-sm text-gray-600">{image2.name}</h3>
            <div className="list-disc text-sm mt-4 list-inside text-gray-600">
              {image2.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {isPreparationPhase && (
        <Timer preparationTime={selectionTime} recordingTime={recordingTime} />
      )}
      {!isPreparationPhase && (
        <Timer preparationTime={prepartionTime} recordingTime={recordingTime} />
      )}
    </div>
  );
}
