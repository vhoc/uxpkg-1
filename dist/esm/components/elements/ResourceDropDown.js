import React from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import { OptionUnstyled } from '@mui/base';
export var ResourceDropDown = function () {
    /*
    return (
        <SelectUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='a' resourceType='b'/>} value={'1'}>Option 1</OptionUnstyled>
            <OptionUnstyled component={() => <ResourceDropDownItem icon={'i'} resourceName='d' resourceType='e'/>} value={'2'}>Option 2</OptionUnstyled>
        </SelectUnstyled>
    )*/
    return (React.createElement(SelectUnstyled, null,
        React.createElement(OptionUnstyled, { value: '1' }, "Option 1"),
        React.createElement(OptionUnstyled, { value: '2' }, "Option 2")));
};
