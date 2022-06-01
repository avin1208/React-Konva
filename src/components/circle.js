import React from 'react';

import Konva from 'konva';

import { Stage, Layer, Circle, Text } from 'react-konva';

const Crcle = () => {

    const handleDragStart = e => {
        e.target.setAttrs({
            shadowOffSet: {
                x:15,
                y:15
            },
            scaleX: 1.5,
            scaleY: 1.5
        });
    };

    const handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1.3,
            scaleX: 1.3,
            shadowOffSetX: 5,
            shadowOffSetY: 5
        });
    };

    // const circ = React.useRef();
    // const changeSize = () => {
    //   circ.current.to({
    //     scaleX: Math.random() + 0.9,
    //     scaleY: Math.random() + 0.8,
    //     duration: 0.2
    //   });
    // };
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            <Text text="Try to Drag Circle" fontSize={25} padding={20} />
                <Circle
                    x={100}
                    y={100}
                    width={100}
                    height={100}
                    fill='aqua'
                    shadowBlur={8}
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />
            </Layer>
        </Stage>
    )
}

export default Crcle;