import React from "react";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar";
import history1 from "../Images/history1.jpg";
import SpecialEventsImg from "../Images/specialEvents.jpg";
import history from "../Images/history.jpg";
import history2 from "../Images/history2.jpg";
import history3 from "../Images/history3.jpg";
import history4 from "../Images/history4.jpg";

const History = () => {
  return (
    <>
      <div className="history-page">
        <Navbar />

        <div className="grid-cols-1 md:flex">
          <div className="">
            <img
              src={history}
              className="w-screen h-full md:h-96 md:w-72 md:ml-16 mt-6 md:mt-0 rounded-md"
              alt=""
            />
          </div>
          <div className=" ">
            <img
              src={history3}
              className="w-screen h-full md:h-96 md:w-72 md:ml-16 mt-6 md:mt-0 rounded-md"
              alt=""
            />
          </div>
          <div className=" ">
            <img
              src={history2}
              className="w-screen h-full md:h-96 md:w-72 md:ml-16 mt-6 md:mt-0 rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="md:text-right ml-28 md:ml-0 -mt-96 md:mr-0">
          <div className=" pr-12 ml-6 drop-shadow-sm">
            <div className="font-noto text-9xl">お</div>
            <div className="font-noto text-9xl  pt-10">も</div>
            <div className="font-noto text-9xl  pt-10">て</div>
            <div className="font-noto text-9xl  pt-10">な</div>
            <div className="font-noto text-9xl  pt-10">し</div>
          </div>

          <div>
            <div className="">
              <p className="font-open font-thin text-base text-black text-left mt-8 md:ml-16 md:mr-52 mr-24 md:-mt-96 ">
                Zen Buddhism was a primary influence in the development of the
                culture of Japanese tea. Much less commonly, Japanese tea
                practice uses leaf tea, primarily sencha, a practice known as
                senchadō (煎茶道, 'the way of sencha').
              </p>
              <p className="font-open font-thin text-base text-black text-left md:ml-16 md:mr-52 mr-24 md:pt-10 md:pb-10 mt-6">
                Like the formal traditions of matcha, there are formal
                traditions of sencha, distinguished as senchadō, typically
                involving the high-grade gyokuro class of sencha. This offering,
                more Chinese in style, was introduced to Japan in the 17th
                century by Ingen, the founder of the Ōbaku school of Zen
                Buddhism, also more Chinese in style than earlier schools. In
                the 18th century, it was popularized by the Ōbaku monk Baisao,
                who sold tea in Kyoto, and later came to be regarded as the
                first sencha master. It remains associated with the Ōbaku
                school, and the head temple of Manpuku-ji hosts regular sencha
                tea conventions.
              </p>
            </div>
          </div>
          <div className="flex space-y-24">
            <img
              src={history4}
              className="w-screen h-full md:h-72 md:w-96 pr-24 md:pr-0 mt-6 md:mt-0 md:ml-16 z-50 rounded-md"
              alt=""
            />
            <div className="bg-history md:w-screen md:h-96 md:-ml-14 bg-no-repeat drop-shadow-2xl"></div>
            <div className="flex">
              <img
                src={SpecialEventsImg}
                className=" md:w-80 md:h-96 md:mr-96 md:-ml-48 md:-mt-24 drop-shadow-2xl rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 mt-10 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
        <div className="md:flex">
          <div className="">
            <img
              src={history1}
              className="w-56 ml-20 md:mt-4 md:pt-10 md:ml-16 md:w-60 md:h-52 drop-shadow-xl mt-20 rounded-md"
              alt=""
            />

            <p className="ml-20 md:ml-24 md:mb-0 mb-12 md:w-60 md:h-52 font-open font-semibold text-xs pt-3">
              Obakusan Manpukuji Temple
            </p>
          </div>
          <p className="font-open font-thin text-base text-black text-left ml-12 mr-10 md:ml-16 md:mr-16 md:mt-12">
            The Japanese tea ceremony, also known as the Way of Tea, is a
            traditional ritual in which green tea is prepared and served to
            guests. The ceremony has its origins in the 15th century, during the
            Muromachi period, when Zen Buddhism was introduced to Japan from
            China. The tea ceremony was heavily influenced by Zen philosophy,
            which emphasizes simplicity, humility, and mindfulness. The tea
            ceremony was also influenced by the traditional Japanese arts of
            flower arrangement, calligraphy, and architecture. The ceremony was
            originally only practiced by the elite, but it later became more
            widespread among the general population. Today, the tea ceremony is
            still an important part of Japanese culture and is often performed
            during special occasions such as weddings and business meetings.
          </p>
        </div>
        <div className="md:hidden bg-teal-500 h-1.5 w-5/6 mt-10 md:w-3/4 md:ml-24 ml-8 md:-mt-20 mb-8 md:mb-24"></div>
        <div className="md:-mt-32">
          <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default History;
