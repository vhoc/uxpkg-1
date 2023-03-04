import { PickListRowHeading } from "../../components/elements/PickListRowHeading";
export default {
    title: 'composite/PickList Elements/PickListRowHeading',
    component: PickListRowHeading
};
export var ButtonAdd = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'add',
        onClickAddAll: function () { return alert("Pressed the Add all button"); },
        onClickRemoveAll: function () { return alert("Pressed the Remove all button"); }
    }
};
export var ButtonRemove = {
    args: {
        title: 'eks:AccessKubernetesAPI',
        button: 'remove',
        onClickAddAll: function () { return alert("Pressed the Add all button"); },
        onClickRemoveAll: function () { return alert("Pressed the Remove all button"); }
    }
};
