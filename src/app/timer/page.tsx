'use client';
import { use, useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    // 케이스1. setInterval을 본문에 두고 cleanup 함수를 작성하지 않은 경우
    // const timer = setInterval(() => {
    //     setCount(count => count + 1);
    // }, 1000);

    // 리렌더링 될 때마다 setInterval이 계속 생성되어 누적됨.

    // 케이스2. setInterval을 useEffect에 넣고 cleanup 함수를 작성하지 않은 경우
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCount(count => count + 1);
    //     }, 1000);
    // }, []);

    // 개발모드에서 2번씩 useEffect가 실행되어 2개의 setInterval이 생성됨. 2배씩 빨라짐

    // 케이스3. setInterval을 useEffect에 넣고 cleanup 함수를 작성했지만 setCount를 함수업데이트로 하지 않은 경우
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         // setCount(count => count + 1);
    //         setCount(count + 1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);

    // setInterval이 시작하는 시점에서 count가 0이므로 interval은 그 시점의 count만을 가져와서 동작함. 결과적으로 계속 1로 나옴.올바르게 동작함

    // 케이스4. setInterval을 useEffect에 넣고 cleanup 함수를 작성하고 setCount를 함수업데이트로 한 경우
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
            // setCount(count + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    // 잘 동작함

    return (
        <div>
            <div>숫자 : {count}</div>
        </div>
    )
}