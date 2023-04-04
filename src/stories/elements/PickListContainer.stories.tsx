import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { PickListContainer } from "../../components/elements/PickListContainer";
import { UserGroupBar } from "../../components/elements/UserGroupBar";

export default {
    title: 'composite/PickList Elements/PickListContainer',
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
                onClickAddButton={() => console.log('click')}
                caption="bill@company.com"
                name="Bill Murray"
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="keanu@company.com"
                name="Keanu Reeves"
                onClickRemoveButton={() => console.log('click')}
                selected
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="ana@company.com"
                name="Ana de Armas"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="user"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
            <UserGroupBar
                onClickAddButton={() => console.log('click')}
                caption="12 users"
                name="Billing Team"
                assigned
                onClickRemoveButton={() => console.log('click')}
                style={{
                    width: '394px'
                }}
                type="group"
            />
        </>
    }
}