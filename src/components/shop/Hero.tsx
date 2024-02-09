export const Hero = () => {
  return (
    <section className="m-auto w-5/6 flex flex-col items-center p-12">
      <h1 className="z-50 text-7xl font-satisfy">Katia Kameneva</h1>
      <div className="relative -top-4">
        <div className="absolute bg-gray-500 bg-opacity-40 w-[230px] h-[230px] -rotate-[6deg]" />
        <div className="w-56 h-56 bg-test-patern bg-cover bg-center -rotate-[4deg]" />
      </div>
      <h2 className="z-50 font-prompt font-bold text-7xl uppercase tracking-wider -mt-6">
        painter artist
      </h2>
    </section>
  );
};
