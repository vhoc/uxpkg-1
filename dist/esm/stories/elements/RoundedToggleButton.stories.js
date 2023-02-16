import RoundedToggleButton from "../../components/elements/RoundedToggleButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretUp, faCaretDown } from "@fortawesome/sharp-solid-svg-icons";
export default {
    title: 'elements/Buttons/RoundedToggleButton',
    component: RoundedToggleButton
};
export var Default = {
    args: {
        active: false,
        assigned: false,
        icon: faCaretUp,
        label: 'More',
        onClick: function () { alert("Button pressed, from here you can handle the active state."); }
    }
};
library.add(faCaretUp, faCaretDown);
