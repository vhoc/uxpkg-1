import { Meta } from "@storybook/react/types-6-0";
import AlertModal from "../../components/elements/AlertModal";
import { Button } from "../../components/elements/Button";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTriangleExclamation } from "@fortawesome/sharp-solid-svg-icons";
import React from "react";

export default {
    title: 'Composite/AlertModal',
    component: AlertModal,
} as Meta

export const Default = {
    args: {
        icon: faTriangleExclamation,
        title: 'Title',
        description: 'Description',
        children: <>
            <Button variant={'gray'}>Cancel</Button>
            <Button variant={'grayRed'} onClick={() => alert('Some action triggered.')}>Delete</Button>
        </>
    }
}

library.add(faTriangleExclamation)