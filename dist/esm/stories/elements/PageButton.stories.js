import { PageButton } from "../../components/elements/PageButton";
export default {
    title: 'elements/Buttons/PageButton',
    component: PageButton
};
export var Default = {
    args: {
        pageNumber: 1,
        onClick: function () { return alert("This is page number 1"); }
    }
};
export var Selected = {
    args: {
        pageNumber: 1,
        onClick: function () { return alert("This is page number 1"); },
        selected: true
    }
};
