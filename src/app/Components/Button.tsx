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
          className={` ${params?.width} shadow-inner  mt-5 bg-[#003D25]  text-[#00E58A] font-normal py-3 rounded-lg flex items-center justify-center gap-2 transition`}
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
          className={` ${params?.width} shadow-inner shadow-cyan-50  mt-5 bg-[#1FFFA5]  text-black font-normal py-3 rounded-lg flex items-center justify-center gap-2 transition`}
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
