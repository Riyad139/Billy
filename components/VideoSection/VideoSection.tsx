export default function VideoSection() {
  return (
    <div className="z-10 flex-col relative py-7 w-full flex items-center justify-center">
      <video src="video.MP4" autoPlay muted loop className="max-h-[50rem]" />
      <h3 className="text-sm sm:text-4xl bg-[#EFF7FA] my-6">
        Xiaopang the Chinese dog
      </h3>
      <h2 className="text-sm sm:text-4xl bg-[#EFF7FA] my-6">
        ca: 000000000000000000000000000000000000000000
      </h2>
    </div>
  );
}
