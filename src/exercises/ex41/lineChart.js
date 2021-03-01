import React from 'react'
import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'

function LineChart(props) {
  const data = useSelector((state) => state.data)
  return (
    <Chart
      width={props.width}
      height={props.height}
      chartType='LineChart'
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Horizontal Values',
        },
        vAxis: {
          title: 'Vertical Values',
        },
      }}
    />
  )
}

export default LineChart
