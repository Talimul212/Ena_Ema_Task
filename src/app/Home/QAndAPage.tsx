import Q_and_ACard from "../Components/Cards/Q_and_ACard";

export default function QAndAPage(params: unknown) {
  const faqs = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish – design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, unlimited revisions until you're 100% satisfied with the final result.",
    },
    {
      question: "What's the payment process?",
      answer:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We run lean without big overheads – you get the same agency-level quality at a fraction of the cost.",
    },
  ];

  return (
    <div className="bg-[#192420] pt-[120px] lg:pb-36 px-6 sm:px-20">
      <div className="mb-10 text-center">
        <p className="text-[36px] sm:text-[48px] font-[monrope] font-medium text-[#F5F5F5] leading-tight">
          Got Questions<span className="text-[#1FFFA5]">? </span> We’ve Got The
          Answers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:px-16 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <Q_and_ACard key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}
