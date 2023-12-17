import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { loadingAtom } from "recoil/loadingAtom";

const Loading = () => {
  console.log(useRecoilValue(loadingAtom));
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40">
      <Spinner className="w-12 h-12"></Spinner>
    </div>
  );
};

export default Loading;
