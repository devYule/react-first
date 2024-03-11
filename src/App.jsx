import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {


    console.log("렌더링!!");

    // State 정의
    const [num, setNum] = useState(0);




    useEffect(() => {
        if (num != 0 && num % 2 == 0) alert();
    }, [num]);



    // 버튼 클릭시 실행되는 함수 정의
    const onClickButton = () => {
        setNum(n => n + 1);
    };

    return (
        <>
            <h1 style={{ color: "red" }}>안녕하세요?</h1>
            <ColoredMessage color="pink">잘 지냅니다.</ColoredMessage>
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <hr></hr>
            <p>{num}</p>
        </>
    );
};