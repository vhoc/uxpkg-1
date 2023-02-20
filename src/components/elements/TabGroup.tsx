import * as React from 'react'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Tabs, Theme, ThemeProvider } from '@mui/material'    
import { Tab } from '@mui/material'
import { colors } from '../../theme'
import { SxProps } from '@mui/material'
import { mtheme } from "../../theme"
import { ITab } from '../../types'

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    index: number
    value: number
}

export const TabPanel = ({ children, index, value, ...props}: TabPanelProps) => {

    return (
        <div
            role={'tabpanel'}
            hidden={ value !== index }
            id={ `tabpanel-${index}` }
            aria-labelledby={`tab-${index}`}
            style={{
                paddingTop: '14px',
                paddingBottom: '14px',
                paddingLeft: '24px',
                paddingRight: '24px',
                backgroundColor: colors.white,
            }}
            {...props}
        >

        {
            value === index ?
                (
                    <ThemeProvider theme={mtheme}>
                    <div>
                        {children}
                    </div>
                    </ThemeProvider>
                )
            :
                null
        }

        </div>
    )

}

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    }
}

export const TabGroup = ({tabs}: any) => {
    const [value, setValue] = useState(0)

    const handleChange = ( event: React.SyntheticEvent, newValue: number ) => {
        setValue(newValue)
    }

    const tabStyles = (currentValue: number):SxProps<Theme> | undefined => {
        return {
            marginRight: '4px',
            minHeight: '41px',
            fontWeight: value === currentValue ? 'bold' : 'regular',
            textTransform: 'capitalize',
            paddingRight: '25px',
            paddingLeft: '25px',
            color: value === currentValue ? colors.blue[60] : colors.gray[70],
            bgcolor: value === currentValue ? colors.white : colors.blue[5],
            borderBottom: value !== currentValue ? `1px solid ${colors.blue[30]}` : 'none',
            borderTop: `1px solid ${colors.blue[30]}`,
            borderLeft: `1px solid ${colors.blue[30]}`,
            borderRight: `1px solid ${colors.blue[30]}`,
            borderRadius: '4px 4px 0px 0px',
            '&:active': {
                bgcolor: colors.white,
            },
        }        
    }
    return (
        <ThemeProvider theme={mtheme}>
        <div
            style={{
                width: '100%',
            }}
        >

            <div>
            {   
                tabs && tabs.length >= 1 ?
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="here are the tabs"
                        TabIndicatorProps={{
                            style: {
                                display: 'none'
                            }
                        }}
                        style={{
                            height: '41px',
                            minHeight: '41px',
                            maxHeight: '41px',
                        }}
                        sx={{
                            height: '41px',
                            minHeight: '41px',
                            maxHeight: '41px',
                            '& .MuiTabs-flexContainer': {
                                height: '41px',
                                minHeight: '41px',
                                maxHeight: '41px',
                            },
                            bgcolor: colors.white,
                            borderBottom: `1px solid ${colors.blue[30]}`,
                        }}
                    >
                    {
                        tabs.map((tab: ITab, index: number) => {
                            return (
                                <Tab
                                    key={index}
                                    sx={tabStyles(index)}
                                    label={ tab.label }
                                    {...a11yProps(index)}
                                />
                            )
                        })
                    }
                    </Tabs>
                :
                    null
            }
                
            </div>
            {
                tabs && tabs.length >= 1 ?
                    <>
                    {
                        tabs.map((tab: ITab, index: number) => {
                            return (
                                <TabPanel
                                    key={index}
                                    value={value}
                                    index={index}
                                >
                                    {tab.tabContent}
                                </TabPanel>
                            )
                        })
                    }
                    </>
                :
                    null
            }

            

        </div>
        </ThemeProvider>
    )
}