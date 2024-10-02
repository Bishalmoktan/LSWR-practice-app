interface InstructionVideoProps {
  videoSrc: string;
}

const InstructionVideo = ({
  videoSrc
} : InstructionVideoProps) => {
  return (
   
      <div className="min-h-[75vh] px-8 pt-8  bg-customLighGray">
        <video
          controls
          src={videoSrc}
          className="w-full h-[50vh]"
          autoPlay
        />
      </div>
  );
};
export default InstructionVideo;
