import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { PickListContainer } from "../../components/elements/PickListContainer";
import { UserGroupBar } from "../../components/elements/UserGroupBar";

export default {
    title: 'elements/PickListContainer',
    component: PickListContainer,
} as Meta



export const Default = {
    args: {
        style: {
            width: '396px',
            height: '459px',
        },
    }
}

export const WithChildren = {
    args: {
        style: {
            width: '396px',
            height: '459px',
        },
        children: <>
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="bill@company.com"
                name="Bill Murray"
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="keanu@company.com"
                name="Keanu Reeves"
                removeButtonOnClick={() => console.log('click')}
                selected
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="ana@company.com"
                name="Ana de Armas"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                addButtonOnClick={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                removeButtonOnClick={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
        </>
    }
}