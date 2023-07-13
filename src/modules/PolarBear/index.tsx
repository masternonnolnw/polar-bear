import { useEffect, useState } from "react";

const PolarBearPage = () => {
  const [mousePos, setMousePos] = useState<any>({});
  const [windowSize, setWindowSize] = useState<any>({});

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const middleX = windowSize.width / 2;
  const middleY = windowSize.height / 2;
  const px = mousePos.x - middleX;
  const py = mousePos.y - middleY;
  console.log(px, py);
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#5cd8fd] relative overflow-visible">
      <div className="flex w-[600px] max-w-[90%] h-[400px] max-h-[90%] border-[1px] rounded-xl absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] overflow-visible">
        {/* body */}
        <div className="flex w-[300px] h-[200px] bg-white absolute left-[50%] transform translate-x-[-50%] bottom-0" />
        {/* head */}
        <div className="flex w-[300px] h-[280px] bg-white absolute left-[50%] transform translate-x-[-50%] bottom-[60px] rounded-full" />
        {/* left ear */}
        <div
          className={`flex w-[90px] h-[90px] bg-white z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${220 + py * 0.03}px`,
            left: `calc(50% - ${140 + px * 0.01}px)`,
            transform: `scale(${1 + px * 0.0001}) translateX(-50%)`
          }}
        />
        {/* right ear */}
        <div
          className={`flex w-[90px] h-[90px] bg-white z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${220 + py * 0.03}px`,
            left: `calc(50% - ${-140 + px * 0.01}px)`,
            transform: `scale(${1 - px * 0.0001}) translateX(-50%)`
          }}
        />
        {/* left eye */}
        <div
          className={`flex w-[20px] h-[20px] bg-black z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${250 - py * 0.03}px`,
            left: `calc(50% - ${30 - px * 0.02}px)`,
            transform: `scale(${1 + px * 0.00005}) translateX(-50%)`
          }}
        />
        {/* right eye */}
        <div
          className={`flex w-[20px] h-[20px] bg-black z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${250 - py * 0.03}px`,
            left: `calc(50% - ${-30 - px * 0.02}px)`,
            transform: `scale(${1 - px * 0.00005}) translateX(-50%)`
          }}
        />
        {/* bg mouth */}
        <div
          className={`flex w-[80px] h-[110px] bg-[#def9fe] z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${140 - py * 0.03}px`,
            left: `calc(50% - ${-px * 0.02}px)`,
            transform: `scale(${1 - px * 0.0}) translateX(-50%)`
          }}
        />
        {/* nose */}
        <div
          className={`flex w-[50px] h-[50px] bg-black z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${190 - py * 0.03}px`,
            left: `calc(50% - ${-px * 0.03}px)`,
            transform: `scale(${1 - px * 0}) translateX(-50%)`
          }}
        >
          <div className="flex bg-white w-[12px] h-[12px] absolute top-[8px] left-[8px] rounded-full" />
        </div>

        {/* mouth */}
        <div
          className={`flex w-[20px] h-[6px] bg-black z-[10] absolute rounded-full overflow-visible`}
          style={{
            bottom: `${160 - py * 0.03}px`,
            left: `calc(50% - ${-px * 0.03}px)`,
            transform: `scale(${1 - px * 0}) translateX(-50%)`
          }}
        />
      </div>
    </div>
  );
};

export default PolarBearPage;
