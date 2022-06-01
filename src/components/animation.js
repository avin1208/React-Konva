import React from 'react'

import { useRef } from 'react';

import { Stage, Layer, Circle, Text } from 'react-konva';


const PulseShap = (shape) => {
    shape.to({
        scaleX: 1.5,
        scaleY: 1.5,
        onFinish: () => {
            shape.to({
                scaleX: 1,
                scaleY: 1,
            });
        },
    });
};

const Animation = () => {

    const circleRef = useRef(null);

    const handleStageClick = () => {
        const shape = circleRef.current;
        PulseShap(shape);
    };


    const handleCircleClick = (e) => {
        const shape = e.target;
        PulseShap(shape);

        e.cancleBubble = true;
    }
    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onClick={handleStageClick}
            onTap={handleStageClick}
        >
            <Layer>
                <Text text="Click on any place to see an animation" padding={40} fontSize={30}/>
                <Circle
                    ref={circleRef}
                    x={window.innerWidth / 2}
                    y={window.innerHeight / 2}
                    radius={80}
                    fill="aqua"
                    shadowBlur={8}
                    onClick={handleCircleClick}
                    onTap={handleCircleClick}
                />
            </Layer>
        </Stage>

    )
}

export default Animation;