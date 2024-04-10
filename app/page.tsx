import BgVideo from "@/components/BgVideo";


export default function Home() {
  return (
    <>
      
      <div className="relative top-0 backdrop:blur-sm width-full h-full  bg-opacity-80">
        <div className="felx flex-cal h-[850px] gap-20">
          <BgVideo />
        </div>
      </div>
    </>
  );
}
