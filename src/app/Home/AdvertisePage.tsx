/* eslint-disable @next/next/no-img-element */
import frame1 from "../assets/image 1.png";
import frame2 from "../assets/image 10.png";
import frame3 from "../assets/image 18.png";
import frame4 from "../assets/image 4.png";
import frame5 from "../assets//Size=Default.png";
export default function Advertice(params: unknown) {
  return (
    <div className="my-20">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="marquee-track">
          <div className="marquee-content">
            {[frame1, frame2, frame3, frame4, frame5].map((frame, index) => (
              <img
                key={`original-${index}`}
                src={frame.src}
                alt=""
                className="inline-block mx-4 rounded-2xl w-[748px] h-[470px]"
              />
            ))}
            {[frame1, frame2, frame3, frame4, frame5].map((frame, index) => (
              <img
                key={`clone-${index}`}
                src={frame.src}
                alt=""
                className="inline-block mx-4 rounded-2xl w-[748px] h-[470px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
