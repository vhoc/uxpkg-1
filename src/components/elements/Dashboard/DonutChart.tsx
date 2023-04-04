import React from 'react'
import { Pie, measureTextWidth } from '@ant-design/plots';
import { IChartItem } from '../../../types';

export interface DonutChartProps {
    /** Text override for the label at the center of the donut. */
    shortTitle: string
    /**
     * Array of IChartItem  
     * -- type: string  
     * -- title?: string | undefined  
     * -- risk?: string | undefined  
     * -- color?: string | undefined  
     * -- value: number  
     * -- percent: number  
     * -- caption?: string | undefined  
     */
    data: IChartItem[]
    /** Width of the chart. */
    width?: number | undefined,
    /** Height of the chart. */
    height?: number | undefined,
}

export const DonutChart = ({ shortTitle, data, width, height }: DonutChartProps): JSX.Element => {

    const color = data.map( item => item.color)

    function renderStatistic(containerWidth: any, text:any, style:any) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
    
        let scale = 1;
    
        if (containerWidth < textWidth) {
          scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }
    
        const textStyleStr = `width:${containerWidth}px;`;
        return `
            <div style="${textStyleStr};font-size:${14}px;line-height:${scale < 1 ? 1 : 'inherit'};font-weight:600; font-family: IBM Plex Sans;">${text}</div>`;
    }

    function renderStatistic2(containerWidth: any, text:any, style:any) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
    
        let scale = 1;
    
        if (containerWidth < textWidth) {
          scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }
    
        const textStyleStr = `width:${containerWidth}px;`;
        return `
            <div style="${textStyleStr};font-size:${24}px;line-height:${scale < 1 ? 1 : 'inherit'};font-weight:500; font-family: IBM Plex Sans;">${text}</div>`;
    }

    return (
        <Pie
            width={width}
            height={height}
            appendPadding={10}
            data={data}
            color={color as string[]}
            angleField={'value'}
            colorField={'type'}
            radius={1}
            innerRadius={0.82}
            legend={false}
            label={{
                content: "",
            }}
            interactions={[
                {
                    type: 'element-selected',
                },
                {
                    type: 'element-active',
                },
                {
                    type: 'pie-statistic-active',
                },
            ]}
            statistic={{
                title: {
                    offsetY: -4,
                    customHtml: (container, view, datum) => {
                      const { width, height } = container.getBoundingClientRect();
                      const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                      const text = datum ? datum.type : shortTitle;
                      return renderStatistic(d, text || 'Total', {
                        fontSize: 14,
                      });
                    },
                },
                content: {
                    customHtml: (container, view, datum) => {
                        const { width, height } = container.getBoundingClientRect();
                        const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                        const text = datum ? datum.value : ( data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0) );
                        return renderStatistic2(d, text, {
                          fontSize: 24,
                        });
                    },
                }
            }}
        />
    )

}