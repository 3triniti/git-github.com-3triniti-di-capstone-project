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
          <div className=" ">
            <img src={history} className="h-96 w-72  ml-16" alt="" />
          </div>
          <div className=" ">
            <img src={history3} className="h-96 w-72  ml-16" alt="" />
          </div>
          <div className=" ">
            <img src={history2} className="h-96 w-72 ml-16" alt="" />
          </div>
        </div>
        <div className="text-right -mt-96">
          <div className=" pr-12 ml-6 drop-shadow-sm">
            <div className="font-noto text-9xl">お</div>
            <div className="font-noto text-9xl  pt-10">も</div>
            <div className="font-noto text-9xl  pt-10">て</div>
            <div className="font-noto text-9xl  pt-10">な</div>
            <div className="font-noto text-9xl  pt-10">し</div>
          </div>
          <div>
            <div className="">
              <p className="font-open font-thin text-base text-black text-left ml-16 mr-52 -mt-96 ">
                Zen Buddhism was a primary influence in the development of the
                culture of Japanese tea. Much less commonly, Japanese tea
                practice uses leaf tea, primarily sencha, a practice known as
                senchadō (煎茶道, 'the way of sencha').
              </p>
              <p className="font-open font-thin text-base text-black text-left ml-16 mr-52 pt-10 pb-10 ">
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
            <img src={history4} className="h-72 w-96 ml-16 z-50" alt="" />
            <div className="bg-history w-screen h-96 md:-ml-14 bg-no-repeat drop-shadow-2xl"></div>
            <div className="flex">
              <img
                src={SpecialEventsImg}
                className=" w-80 h-96 md:mr-96 md:-ml-48 md:-mt-24 drop-shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <img
              src={history1}
              className=" pt-10 ml-16 w-60 h-52 drop-shadow-xl mt-2"
              alt=""
            />

            <p className="ml-16 w-60 h-52 font-open font-semibold text-xs pt-3">
              Obakusan Manpukuji Temple
            </p>
          </div>
          <p className="font-open font-thin text-base text-black text-left ml-16 mr-16 mt-12">
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
        <div className="-mt-32">
          <div className=" w-screen -mb-2 h-1 bg-slate-100"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default History;
