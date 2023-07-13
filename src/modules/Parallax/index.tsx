import { useRef, useState, useEffect } from "react";

const ParallaxPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current;
        setScrollPosition(scrollTop);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-transparent relative overflow-x-hidden overflow-y-hidden">
      <div
        ref={containerRef}
        className="flex flex-col w-full h-full overflow-y-auto"
      >
        {/* moon */}
        <div
          className="w-[100px] z-[-1] min-h-[100px] rounded-full bg-yellow-500 absolute  left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          style={{
            top: `calc(40% + ${scrollPosition * 0.05}px)`
          }}
        />
        {/* mountain */}
        <div
          className="w-[100px] z-[-1] min-h-[400px] bg-slate-400 absolute transform translate-x-[-50%] translate-y-[-50%]"
          style={{
            top: `calc(50% + ${scrollPosition * 0}px)`,
            left: `calc(35% + ${scrollPosition * -0.3}px)`
          }}
        />
        {/* mountain */}
        <div
          className="w-[100px] z-[-1] min-h-[400px] bg-slate-500 absolute transform translate-x-[-50%] translate-y-[-50%]"
          style={{
            top: `calc(40% + ${scrollPosition * 0}px)`,
            left: `calc(30% + ${scrollPosition * -0.4}px)`
          }}
        />
        {/* mountain */}
        <div
          className="w-[100px] z-[-1] min-h-[400px]  bg-slate-400 absolute transform translate-x-[-50%] translate-y-[-50%]"
          style={{
            top: `calc(50% + ${scrollPosition * 0}px)`,
            left: `calc(65% + ${scrollPosition * 0.3}px)`
          }}
        />
        {/* mountain */}
        <div
          className="w-[100px] z-[-1] min-h-[400px]  bg-slate-500 absolute transform translate-x-[-50%] translate-y-[-50%]"
          style={{
            top: `calc(40% + ${scrollPosition * 0}px)`,
            left: `calc(70% + ${scrollPosition * 0.4}px)`
          }}
        />
        <div className="flex w-full min-h-[1800px]" />
        <div className="flex w-full min-h-[800px] bg-slate-700 relative">
          <div className="flex w-[80px] h-[200px] bg-slate-700 absolute left-0 top-[-200px]" />
        </div>
        <div className="flex w-full min-h-[800px] bg-slate-700" />
      </div>
    </div>
  );
};

export default ParallaxPage;
