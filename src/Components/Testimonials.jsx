import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "طالب مميز",
      course: "دورة القدرات 2024",
      comment:
        "“الصراحة شكراً يا أستاذ على الدورة ممتازة والله جداً ومختصرة بالقدرات ارتفعت تقريباً 8 درجات والتحصيلي فهمت بوقت سريع جداً، ناجح ومختصر ومفهوم.”",
    },
    {
      name: "طالبة متفوقة",
      course: "التحصيلي 2024",
      comment:
        "“السلام عليكم ابشركم يا أستاذ 100% اللهم لك الحمد والله يا أستاذ أفضل جودة تعليمية لقيتها في حياتي كانت منك.”",
    },
    {
      name: "طالب ناجح",
      course: "قدرات 2024",
      comment:
        "“أبشرك بدرس الآن في طب الحرس، شكراً من القلب، ارتفعت درجتي 14% بمعظم المناهج.”",
    },
    {
      name: "طالب مجتهد",
      course: "التحصيلي 2024",
      comment: "“حيث أبشرك دكتووور قبل أي أحد 100% من أول محاولة وربي.”",
    },
    {
      name: "طالبة طموحة",
      course: "قدرات 2024",
      comment:
        "“استاااذ ارتفعت درجتي 12% شكرًاااااا ويإذن الله التحصيلي اللي ابيه ف الجيب.”",
    },
    {
      name: "طالب مميز",
      course: "قدرات 2024",
      comment:
        "“اشتركت وكان باقي شهر على اختباري ما أمداني اخلص كل الدورة خلصت التأسيس فقط كمي ولفظي وجبت 93% يعطيك العافية دكتور.”",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          آراء الطلاب
        </h2>
        <p className="text-lg text-gray-500 mb-12">ماذا يقول طلابنا عنا؟</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg 
                         transition-all duration-300 hover:scale-105 cursor-pointer "
            >
              <div className="flex justify-center text-yellow-500 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="ml-2 text-3xl" />
                ))}
              </div>
              <p className="text-gray-600 text-center mb-6 text-base leading-relaxed font-semibold ">
                {testimonial.comment}
              </p>

              <div className="flex items-center  mt-6">
                <div className="bg-purple-600  p-3 rounded-full shadow-md text-gray-700">
                  <FaUser size={20} />
                </div>
                <div className="mr-3">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <span className="text-sm text-gray-500 px-3 py-1 rounded-md font-medium">
                    {testimonial.course}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
