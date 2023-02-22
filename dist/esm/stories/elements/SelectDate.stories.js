import { SelectDate } from "../../components/elements/SelectDate";
export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
};
export var Default = {
    args: {
        onChange: function () { return alert("Date changed!"); },
        //onClick: () => alert(`Component clicked`),
        value: function () { return '2014-08-18T21:11:54'; },
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
export var Open = {
    args: {
        onChange: function () { return alert("Date changed!"); },
        //onClick: () => alert(`Component clicked`),
        value: function () { return '2014-08-18T21:11:54'; },
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
