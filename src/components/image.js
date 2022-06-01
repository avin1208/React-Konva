import React, { useState, useEffect} from 'react';

// import Konva from 'konva';

import { Stage, Layer, Image, Text } from 'react-konva';

const Iamge = () => {

    const [image, setImage] = useState(new window.Image());

    // const imageRef = useRef();

    useEffect(() => {
        const img = new window.Image();

        // img.crossOrigin = "Anonymous";

        img.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

        setImage(img);
    }, []);


    // useEffect(() => {
    //     if (image) {
    //         imageRef.current.cache();
    //         imageRef.current.getLayer().batchDraw();
    //     }
    // }, [image]);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            <Text text="Image" fontSize={25} padding={20} />
                <Image
                    shadowBlur={50}
                    // filters={[Konva.Filters.Blur]}
                    x={100}
                    y={200}
                     image={image}
                    // ref={imageRef}
                />
            </Layer>
        </Stage>
    )
}

export default Iamge;