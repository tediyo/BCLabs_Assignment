const SwapLoader = () => {
  return (
    <div className="w-100 py-16">
      <div className="flex flex-col justify-center items-center self-center max-w-8xl">
        <div className="bg-black bg-opacity-80 rounded-lg p-8 px-6 lg:px-10 w-full self-center backdrop-blur border border-borders">
          <div className="flex justify-between">
            <h2 className="text-white text-xl font-semibold mb-8 shimmer h-8 w-40"></h2>
            <div className="w-8 h-8 shimmer rounded-full"></div>
          </div>
          <div className="flex justify-center items-center self-center">
            <div className="bg-exchangeBg rounded-l-lg p-4 px-8 mb-4 w-full">
              <div className="flex justify-between items-center">
                <div className="w-3/4 shimmer h-12 mb-2"></div>
                <div className="w-16 h-16 shimmer rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-center -mt-3 -mx-6 shadow-sm relative z-10">
              <div className="bg-black p-3 rounded-full shimmer w-8 h-8"></div>
            </div>
            <div className="bg-exchangeBg rounded-r-lg p-4 px-8 mb-4 w-full">
              <div className="flex justify-between items-center">
                <div className="w-3/4 shimmer h-12 mb-2"></div>
                <div className="w-16 h-16 shimmer rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-primary text-white py-3 px-16 rounded-tl-xl rounded-br-xl shimmer w-40 h-12"></div>
          </div>
          <div className="flex justify-between text-zinc-50 text-sm mb-4 mt-5">
            <div className="w-24 h-4 shimmer"></div>
            <div className="w-24 h-4 shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapLoader;
