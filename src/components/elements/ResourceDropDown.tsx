import React from 'react'
import SelectUnstyled from '@mui/base/SelectUnstyled'
import { OptionUnstyled } from '@mui/base'



export const ResourceDropDown = () => {
    /*
    return (
        <SelectUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='a' resourceType='b'/>} value={'1'}>Option 1</OptionUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='d' resourceType='e'/>} value={'2'}>Option 2</OptionUnstyled>
        </SelectUnstyled>
    )*/

    return (
        <SelectUnstyled>
            <OptionUnstyled value={'1'}>Option 1</OptionUnstyled>
            <OptionUnstyled value={'2'}>Option 2</OptionUnstyled>
        </SelectUnstyled>
    )

}