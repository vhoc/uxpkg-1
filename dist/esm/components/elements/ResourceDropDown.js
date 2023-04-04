import React from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import { OptionUnstyled } from '@mui/base';
export var ResourceDropDown = function () {
    return (React.createElement(SelectUnstyled, null,
        React.createElement(OptionUnstyled, { value: '1' }, "Option 1"),
        React.createElement(OptionUnstyled, { value: '2' }, "Option 2")));
};
