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
      //clearInterval(inter); // 이거 주석처리하면 cleanup이 안됨. test로 페이지 이동해도 interval이 계속 돌아감. cleanup 하면 interval이 멈추고 test로 이동함. console에서 확인 가능.
      // clearTimeout(time);
    }
  }, []);


  return (
    <div>
      <button onClick={() => {router.push("/test")}}>test로..</button>
    </div>)
}
