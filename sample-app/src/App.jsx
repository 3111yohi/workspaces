import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {

    const [num, setNum] = useState(22);
    const [faceShowFlag, setFaceShowFlag] = useState(true);

    const onClickCountUp = () => {
        setNum(num + 1);
    };

    const onCLickSwitchShowFlag = () => {
        setFaceShowFlag(faceShowFlag? false : true);
    };

    useEffect(() => {
        console.log("あいうえお");
        if (num % 3 === 0) {
            faceShowFlag || setFaceShowFlag(true);
        } else {
            faceShowFlag && setFaceShowFlag(false);
        }
    }, [num]);

    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは</h1>
            <ColorfulMessage color="blue">げんきですか</ColorfulMessage>
            <ColorfulMessage color="pink">げげんきです</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <br />
            <button onClick={onCLickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>(^^♪</p>}
        </>
    );
};

export default App;

