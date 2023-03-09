import { MenuButton } from "../../components/elements/MenuButton";
export default {
    title: 'elements/Buttons/MenuButton',
    component: MenuButton
};
export var Default = {
    args: {
        menuItems: [
            {
                title: 'Option 1'
            },
            {
                title: 'Option 2',
                action: function () { return alert("Clicked on option 2!"); }
            },
            {
                title: 'Option 3'
            }
        ]
    }
};
