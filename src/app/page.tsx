'use client';
'use strict';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    //const time = setTimeout(() => {console.log('hihi')}, 1000);
    const inter = setInterval(() => { console.log('byebye') }, 1000);
    console.log('aaa');

    return () => {
      console.log('cleanup');
      //clearInterval(inter);
      // clearTimeout(time);
    }
  }, []);


  return (
    <div>
      <button onClick={() => {router.push("/test")}}>test로..</button>
    </div>)
}
