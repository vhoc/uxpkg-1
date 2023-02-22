import { SelectDate } from "../../components/elements/SelectDate";
export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
};
export var Default = {
    args: {
        onChange: function () { return alert("Date changed!"); },
        onClick: function () { return alert("Component clicked"); }
    }
};
