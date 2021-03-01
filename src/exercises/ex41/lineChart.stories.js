import React from 'react'
import LineChart from './lineChart'
import storeConfig from './redux/store'
import { Provider } from 'react-redux'

const chart = {
  title: 'LineChart',
  component: LineChart,
}
const store = storeConfig

const Template = (args) => (
  <Provider store={store}>
    <LineChart {...args} />
  </Provider>
)

export const Primary = Template.bind({})
Primary.args = {
  height: '400px',
  width: '600px',
}

export default chart
