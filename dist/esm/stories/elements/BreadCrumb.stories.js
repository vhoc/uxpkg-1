import { BreadCrumb } from "../../components/elements/BreadCrumb";
export default {
    title: 'elements/Labels/BreadCrumb',
    component: BreadCrumb
};
export var Default = {
    args: {
        items: [
            {
                label: "Resource Catalog",
                onClick: function () { return alert("Clicked on Resource Catalog"); }
            },
            {
                label: "Access Request Submission",
                onClick: function () { return alert("Clicked on Access Request Submission"); }
            },
            {
                label: "A third, non clickable element"
            },
        ]
    }
};
