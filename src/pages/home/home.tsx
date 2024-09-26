import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DropDown from "./components/dropdown";

export default function Home() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="bg-white shadow overflow-hidden rounded-none border border-gray-300 mx-auto max-w-4xl">
        <CardHeader className="bg-gray-200 px-4 py-2 font-normal text-gray-600 border-b border-gray-300">
          Practice Test A
        </CardHeader>
        <CardContent className="min-h-[80vh]">
        <div className="p-6 space-y-4 text-gray-600 text-sm">
          <ol className="list-decimal list-inside space-y-4 mb-16">
            <li>
              You should give yourself 2 hours and 39 minutes to complete
              CELPIP-General Practice Test A. Press Start and select Complete
              Test from the drop-down menu to do the whole test, or click on one
              of the individual tests underneath it to try one component.
            </li>
            <li>
              Once you have completed the test, you can consult the{" "}
              <span className="text-customRed">
                Performance Standards for Writing
              </span>{" "}
              and{" "}
              <span className="text-customRed">
                Performance Standards for Speaking
              </span>{" "}
              to understand how your responses would be evaluated by CELPIP
              Raters. Please be sure to save your Writing responses and record
              your Speaking responses so you can review them later using the
              Performance Standards.
            </li>
            <li>
              You will need a headset or speakers for the Listening and Speaking
              components of the test. The practice test will not record your
              Speaking responses. If you wish to record your Speaking responses,
              we advise you to set up your recording device (cellphone, digital
              recorder, etc.) prior to starting the speaking section. For
              optimal performance, your computer should have a minimum
              resolution of 1024 x 768. Paper and pencils will be provided at
              the offical test for note-taking, so before you begin this sample
              test make sure that you have paper and a pen or pencil, since you
              may want to take notes.
            </li>
          </ol>
          <Separator />
          <div className="flex justify-center">
          <DropDown />
          </div>
           
          <Separator />

          <div
            className="bg-customGray border border-customRed text-gray-600 text-sm  px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="bg-customRed p-1 px-2 rounded-2xl text-white">
              NOTE
            </span>
            <span className="block sm:inline">
              {" "}
              In response to ongoing research and development, changes may
              occasionally be made to the CELPIP Test. There may be short
              periods of time when study materials do not exactly match the
              current official test format, and content may be updated to match
              changes to the CELPIP Test without prior notice. Check the CELPIP
              website for any updates to the CELPIP Test: <a href="https://www.celpip.ca" target="_blank" className="text-customRed"> https://www.celpip.ca </a>.
            </span>
          </div>
        </div>
        </CardContent>
      <CardFooter className="h-8 bg-customGray border-t border-gray-300">

      </CardFooter>
      </Card>
    </section>
  );
}
