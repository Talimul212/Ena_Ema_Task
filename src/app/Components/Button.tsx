/* eslint-disable @next/next/no-img-element */
import ArrowRight from "../assets/icon/ArrowRight.png";
import greenArrowRight from "../assets/icon/greenArrowRight.png";
interface ButtonPross {
  width: string;
  title: string;
  color: string;
}
export default function Button(params: ButtonPross) {
  return (
    <div>
      {params?.color ? (
        <button
          type="submit"
          className={` ${params?.width} shadow-inner  mt-5 bg-[#003D25] transition-all 
  duration-400 
  hover:rounded-2xl 
  hover:gap-3   md:text-[15px] 
  text-[12px]  text-[#00E58A] font-normal py-3 rounded-lg flex items-center justify-center gap-2 `}
        >
          {params?.title}
          <span>
            <img
              src={greenArrowRight.src}
              alt="greenArrowRight"
              className="text-gray-500 mr-2"
            />
          </span>
        </button>
      ) : (
        <button
          type="submit"
          className={` 
  ${params?.width} 
  mt-5 
  
  bg-[#1FFFA5] 
  text-black 
  font-normal 
  py-3 
  rounded-lg 
  flex 
  items-center 
  justify-center 
  gap-2 
  transition-all 
  duration-400 
  hover:rounded-2xl 
  hover:gap-3
  md:text-[15px] 
  text-[12px]
  shadow-inner 

   shadow-[#ffffff8a]
`}
          style={{
            boxShadow: "0px 3px 4px rgba(255, 255, 255, 0.918)",
          }}
        >
          {params?.title}
          <span>
            <img
              src={ArrowRight.src}
              alt="greenArrowRight"
              className="text-gray-500 mr-2"
            />
          </span>
        </button>
      )}
    </div>
  );
}
