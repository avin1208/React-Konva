import React from 'react';

import { Circle } from 'react-konva';

import { SEAT_SIZE } from './layout';

function getColor(isBooked, isSelected) {
    if (isSelected) {
        return "red";
    } else if (isBooked) {
        return "#1b728d";
    } else {
        return "lightgrey";
    }
}

const Seat = props => {

    const isBooked = props.data.status === "booked";

    return (
        <Circle
            x={props.x}
            y={props.y}
            radius={SEAT_SIZE / 2}
            fill={getColor(isBooked, props.isSelected)}
            strokeWidth={1}
            onMouseEnter={e => {
                e.target._clearCache();
                props.onHover(props.data.name, e.target.getAbsolutePosition());

                const container = e.target.getStage().container();
                if (isBooked) {
                    container.style.cursor = "not-allowed";
                } else {
                    container.style.cursor = "pointer";
                }
            }}
            onMouseLeave={e => {
                props.onHover(null);
                const container = e.target.getStage().container();
                container.style.cursor = "";
            }}
            onClick={e => {
                if (isBooked) {
                    return;
                }
                if (props.isSelected) {
                    props.onDeselect(props.data.name);
                } else {
                    props.onSelect(props.data.name);
                }
            }}
            onTap={e => {
                if (isBooked) {
                    return;
                }
                if (props.isSelected) {
                    props.onDeselect(props.data.name);
                } else {
                    props.onSelect(props.data.name);
                }
            }}
        />
    )
}

export default Seat;


// import React from "react";

// import { Group, Text } from "react-konva";

// import Seat from "./Seat";

// import { SEATS_DISTANCE, SUBSECTION_PADDING, SEAT_SIZE } from "./layout";

// export default ({
//   width,
//   x,
//   y,
//   data,
//   onHoverSeat,
//   onSelectSeat,
//   onDeselectSeat,
//   selectedSeatsIds
// }) => {
//   return (
//     <Group x={x} y={y}>
//       {Object.keys(data.seats_by_rows).map((rowKey, rowIndex) => {
//         const row = data.seats_by_rows[rowKey];
//         return (
//           <React.Fragment key={rowKey}>
//             {row.map((seat, seatIndex) => {
//               return (
//                 <Seat
//                   key={seat.name}
//                   x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
//                   y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
//                   data={seat}
//                   onHover={onHoverSeat}
//                   onSelect={onSelectSeat}
//                   onDeselect={onDeselectSeat}
//                   isSelected={selectedSeatsIds.indexOf(seat.name) >= 0}
//                 />
//               );
//             })}
//             <Text
//               text={rowKey}
//               x={SUBSECTION_PADDING - SEATS_DISTANCE}
//               y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING - SEAT_SIZE / 2}
//               fontSize={SEAT_SIZE}
//               key={"label-left" + rowKey}
//             />
//           </React.Fragment>
//         );
//       })}
//       {data.seats_by_rows[1].map((_, seatIndex) => {
//         return (
//           <Text
//             text={(seatIndex + 1).toString()}
//             x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING - 50}
//             width={100}
//             y={
//               Object.keys(data.seats_by_rows).length * SEATS_DISTANCE +
//               SUBSECTION_PADDING
//             }
//             key={"label-bottom" + seatIndex}
//             align="center"
//             fontSize={SEAT_SIZE}
//           />
//         );
//       })}
//       <Text text={data.name} width={width} align="center" y={-10} fontSize={SEAT_SIZE} />
//     </Group>
//   );
// };