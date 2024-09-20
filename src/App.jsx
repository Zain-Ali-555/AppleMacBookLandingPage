import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text-white">
        <div className="navbar flex gap-8 border-b-[1px] border-[#333] items-center absolute pt-10 pb-3 top-0 left-1/2 -translate-x-1/2">
          {[
            "iPhone",
            "iPad",
            "services",
            "ios",
            "mac",
            "iPod",
            "iPhone",
            "iPad",
            "services",
            "ios",
            "mac",
            "Products",
          ].map((elem, index) => (
            <a key={index} href="" className="text-sm font-[400] capitalize">
              {elem}
            </a>
          ))}
        </div>
        <div className="txt flex items-center justify-center flex-col flex-wrap absolute top-[10.3rem] left-1/2 -translate-x-1/2">
          <h1 className="masked text-5xl font-bold tracking-tighter">
            macbook pro.
          </h1>
          <h5>Oh so pro !</h5>
          <p className="text-center w-3/4">
            MacBook Pro offers tailored performance,
            and personalized user experience for professionals.
          </p>
        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr",
            ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

export default App;
