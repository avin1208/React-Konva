import { Fragment } from "react";

import React from 'react';

import { Stage, Layer, Transformer, Rect, Text } from "react-konva";

const Circ = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Rect
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};

const initialCircles = [
  {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: "aqua",
    id: "rect1"
  },
  {
    x: 200,
    y: 100,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect2"
  }
];

const Transforme = () => {
  const [circles, setCircles] = React.useState(initialCircles);
  const [selectedId, selectShape] = React.useState(null);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={e => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectShape(null);
        }
      }}
    >
   
      <Layer>
      <Text text="Transformer" fontSize={25} padding={20} />
        {circles.map((circ, i) => {
          return (
            <Circ
              key={i}
              shapeProps={circ}
              isSelected={circ.id === selectedId}
              onSelect={() => {
                selectShape(circ.id);
              }}
              onChange={newAttrs => {
                const circs = circles.slice();
                circs[i] = newAttrs;
                setCircles(circs);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Transforme;