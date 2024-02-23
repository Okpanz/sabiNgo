import React from "react";
import Blogcard from "./Blogcard";

function BlogCarocel() {
  return (
    <div className="py-8">
      <h1 className="  my-4 text-center   text-[40px] font-heading font-[600]">
        Latest News From <br></br> Sabi Blog
      </h1>

      <div className="flex flex-col items-center md:flex-row text-black justify-center gap-5">
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </div>
  );
}

export default BlogCarocel;
