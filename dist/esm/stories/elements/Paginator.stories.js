import { Paginator } from "../../components/elements/Paginator";
export default {
    title: 'elements/Paginator',
    component: Paginator
};
export var Detault = {
    args: {
        count: 10,
        page: 4,
        onChange: function () { return alert("Changed the page."); },
        boundaryCount: 1
    }
};
