import listeningTestMockData from "@/data/listeningTest"
import ListeningCardLayout from "./listening-page-layout"

const VideoInstruction = () => {

  return (
   

      <ListeningCardLayout
        title={"Listening Instruction Video"}
        nextLink={"/listening/demo-test"}
        prevLink="/listening"
      >

        <div className="py-8 px-16  min-h-[75vh] bg-gray-50">

        <video
          controls
          src={listeningTestMockData.videoInstruction}
          className="w-full h-[50vh]"
          autoPlay
          
          />
          </div>
      
      </ListeningCardLayout>


 
  )
}
export default VideoInstruction