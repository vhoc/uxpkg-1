import { Meta } from "@storybook/react/types-6-0"
import { ChartPercentBar } from "../../../components/elements/Dashboard/ChartPercentBar"

export default {
    title: 'dashboard/ChartPercentBar',
    component: ChartPercentBar,
} as Meta

export const Default = {
    args: {
      criteria: 'Users',
      data: [
        {// LOW
          risk: '24',
          'Users': 'Users',
          value: 24,
        },
        {// MEDIUM
          risk: '40',
          'Users': 'Users',
          value: 40,
        },
        {// HIGH
          risk: '27',
          'Users': 'Users',
          value: 27,
        },
        {// CRITICAL
          risk: '3',
          'Users': 'Users',
          value: 3,
        },
      ]
    }
}

export const Broader = {
  args: {
    maxBarWidth: 79,
    height: 109,
    criteria: 'Users',
    data: [
      {// LOW
        risk: '24',
        'Users': 'Users',
        value: 24,
      },
      {// MEDIUM
        risk: '40',
        'Users': 'Users',
        value: 40,
      },
      {// HIGH
        risk: '27',
        'Users': 'Users',
        value: 27,
      },
      {// CRITICAL
        risk: '3',
        'Users': 'Users',
        value: 3,
      },
    ]
  }
}

export const NoLegend = {
  args: {
    legend: false,
    maxBarWidth: 79,
    height: 109,
    criteria: 'Users',
    data: [
      {// LOW
        risk: '24',
        'Users': 'Users',
        value: 24,
      },
      {// MEDIUM
        risk: '40',
        'Users': 'Users',
        value: 40,
      },
      {// HIGH
        risk: '27',
        'Users': 'Users',
        value: 27,
      },
      {// CRITICAL
        risk: '3',
        'Users': 'Users',
        value: 3,
      },
    ]
  }
}