import React from "react";
import profile2 from "../Images/suehirocreator1.jpeg";
import profile1 from "../Images/1000001726.jpg";

const Creators = () => {
  return (
    <div className="z-20 w-2/3 mt-20 flex flex-col p-5 gap-5">
      <div className="flex gap-4">
        <img src={profile1} className="w-40 drop-shadow-xl" alt=""></img>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-open font-normal">
            Nana Williams - Co-Creator / Tea Guide
          </h2>
          <p className="font-open font-normal text-sm tracking-wider">
            Nana grew up in Kyoto Japan, where it is called “Treasury of
            Japanese culture” She learned Japanese traditional tea ceremony from
            Master Issui Sasaki who is originator of “ Issui senchado
            一穂流煎茶道” She was taught how important hospitality and mind of
            zen are through tea ceremony. And she wants to share this to people
            outside of Japan as her master entrusted her.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src={profile2} className="w-40 drop-shadow-xl" alt=""></img>
        <div className="flex flex-col gap-2">
          <h2 className=" text-base font-open font-normal">
            Ayae Tueller - Co-Creator / Ceremony Artist
          </h2>
          <p className="font-normal text-sm font-open tracking-wider">
            Ever since Ayae was little, she had a passion for tea. Growing up in
            Japan, drinking Japanese tea was a daily routine after a meal/snack.
            When she was twenty, she decided to quit drinking caffeinated
            drinks, including Japanese tea. However, that did not stop her from
            drinking tea! She has fallown love with herbal teas that nourish
            people's bodies and souls. She always has various herbal teas in her
            cupboard and has been serving to friends and families for many
            years. She has attended multiple health classes to deepen her
            understanding of herbs and their nutrition values, which have been
            blessing her family and those who come into her life{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
