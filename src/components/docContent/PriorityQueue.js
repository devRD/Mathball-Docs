import React, { Component } from "react";
import Content from "./Content";

const validCode=
`M.avg([1, 0, 5, 6]);   // 3
M.avg([8, 7]);         // 7.5`;

const inValidCode=
` /*
* TypeError: Invalid argument received: <argument>
* 'avg()' only accept an array of real numbers!
*/
M.avg(1, 2);
M.avg([NaN, 5, Infinity]);
M.avg(['foo', 'bar']);`;


export default class PriorityQueue extends Component {
  render() {
    return (
			<div className="tab-pane fade" id="priority-queue" role="tabpanel" aria-labelledby="priority-queue-tab">

				<h1>Priority Queue</h1>

				{/* <Content
					title={'Priority-Queue'}
					description={`The <b>M.avg()</b> function returns the average of the numbers provided.`}
					syntax={['M.avg([value1, value2, ...])']}
					arguments={['Array <Number>']}
					return={['Number']}
					validCode={validCode}
					inValidCode={inValidCode}
					info={`Implemented using JavaScript's built-in <b>reduce</b> function.`}
				/> */}

			</div>
    );
  }
}

