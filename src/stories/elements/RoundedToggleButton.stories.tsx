import { Meta } from "@storybook/react/types-6-0";
import RoundedToggleButton from "../../components/elements/RoundedToggleButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretUp, faCaretDown } from "@fortawesome/sharp-solid-svg-icons";

export default {
    title: 'elements/Buttons/RoundedToggleButton',
    component: RoundedToggleButton
} as Meta

export const Default = {
    
    args: {
        active: false,
        iconOn: faCaretUp,
        iconOff: faCaretDown,
        labelOn: 'Less',
        labelOff: 'More',
        onClick: () => {alert(`Button pressed, from here you can handle the active state.`)}
    }
}

library.add(faCaretUp, faCaretDown)