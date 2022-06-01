import Konva from 'konva';

import React from 'react';

import { Stage, Layer, Rect, Text } from 'react-konva';

const Recte = () => {

    const handleDragStart = e => {
        e.target.setAttrs({
            shadowOffSet: {
                x: 15,
                y: 15
            },
            scale: 1.1,
            scaleY: 1.1
        });
    };


    const handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffSetX: 5,
            shadowOffSetY: 5
        });
    };
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            <Text text="Try to Drag Rectengle" fontSize={25} padding={20} />
                <Rect
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

export default Recte;