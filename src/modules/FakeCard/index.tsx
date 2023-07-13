import Image from "next/image";

const FakeCard = () => {
  return (
    <div className="flex w-[200px] h-[450px] relative">
      <Image
        src="/images/CardTemplate2.png"
        width={200}
        height={450}
        alt="cardTemplate"
        className="absolute top-0 left-0 z-[0]"
      />
      <div className="flex bg-transparent z-[10] w-[200px] h-[450px]" />
      <div
        className="left-[23px] bottom-[195px] flex w-[152px] h-[41px] hover:bg-slate-700 absolute z-[20] transition-all duration-150 rounded-lg opacity-10 cursor-pointer"
        onClick={() => {
          console.log("click");
        }}
      />
    </div>
  );
};

export default FakeCard;
