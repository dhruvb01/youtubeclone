import React from "react";
import { useSearchParams } from "react-router-dom";
import Commentscontainer from "./Commentscontainer";
import Livechat from "./Livechat";
const Videoelement = () => {
  const [search] = useSearchParams();
  const id = search.get("v");
  console.log("https://www.youtube.com/embed/"+id+"?autoplay=1")
  return (
    <div className="flex flex-col w-full">
  <div className="px-5 flex flex-col lg:flex-row w-full">
    <div className="w-full lg:w-2/3">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Commentscontainer ></Commentscontainer>
    </div>
    <div className="w-full lg:w-1/3">
      <Livechat></Livechat>
    </div>
  </div>
</div>

  );
};

export default Videoelement;
