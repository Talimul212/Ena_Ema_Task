type QAndAType = {
  question: string;
  answer: string;
};

export default function Q_and_ACard({ question, answer }: QAndAType) {
  return (
    <div className="relative group bg-[#1E2B26] rounded-xl p-6 border border-[#2C3A35] hover:border-[#1FFFA5] transition duration-300 shadow-md hover:shadow-lg">
      {/* Glow effect on hover */}
      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 translate-y-1/2 md:w-[600px] w-[300px] h-24 bg-gradient-to-t from-[#1fffa560] to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col items-start gap-3">
        <div className="w-2 h-2 my-2 bg-[#1FFFA5] rounded-full " />
        <div>
          <h4 className="text-[#F5F5F5] font-semibold text-[24px] mb-2">
            {question}
          </h4>
          <p className="text-lg mt-4 text-[#B2B2B2] font-light">{answer}</p>
        </div>
      </div>
    </div>
  );
}
