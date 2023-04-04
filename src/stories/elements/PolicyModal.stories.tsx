import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { PolicyModal } from "../../components/elements/PolicyModal";
import { ResourceDropDownItem } from "../../components/elements/ResourceDropDownItem";
import { UserGroupBar } from "../../components/elements/UserGroupBar";

export default {
    title: 'composite/PolicyModal',
    component: PolicyModal
} as Meta

export const Default = {
    args: {
        title: 'AWSTestPol',
        caption: 'StagingAWSAcc / 581726338340',
        onClickFullDetail: () => alert(`View Full Detail button clicked!`),
        onClickClose: () => alert(`Close button clicked!`),
        resourcesAmount: 9,
        identitiesAmount: 3,
        tabs: [
            {
                label: `Resources (7)`,
                tabContent: <>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c5 clicked!`)} resourceName="eni-03a9ab07d4c9111c5" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c6 clicked!`)} resourceName="eni-03a9ab07d4c9111c6" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c7 clicked!`)} resourceName="eni-03a9ab07d4c9111c7" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c8 clicked!`)} resourceName="eni-03a9ab07d4c9111c8" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c9 clicked!`)} resourceName="eni-03a9ab07d4c9111c9" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c0 clicked!`)} resourceName="eni-03a9ab07d4c9111c0" resourceType="AWS EC2 Network Interface"/>
                    <ResourceDropDownItem icon="[i]" onClick={() => alert(`Resource eni-03a9ab07d4c9111c1 clicked!`)} resourceName="eni-03a9ab07d4c9111c1" resourceType="AWS EC2 Network Interface"/>
                </>
            },
            {
                label: `Identities with access (3)`,
                tabContent: <>
                    <UserGroupBar
                        onClickAddButton={() => alert(`Adding user Bill Murray`)}
                        caption="bill@company.com"
                        name="Bill Murray"
                        onClickRemoveButton={() => alert(`Removing user Bill Murray`)}
                        style={{
                            width: '100%'
                        }}
                        type="user"
                        endButton={false}
                        onClick={() => alert(`Bill Murray clicked!`)}
                    />
                    <UserGroupBar
                        onClickAddButton={() => alert(`Adding user John Travolta`)}
                        caption="john@company.com"
                        name="John Travolta"
                        onClickRemoveButton={() => alert(`Removing user John Travolta`)}
                        style={{
                            width: '100%'
                        }}
                        type="user"
                        endButton={false}
                        onClick={() => alert(`John Travolta clicked!`)}
                    />
                    <UserGroupBar
                        onClickAddButton={() => alert(`Adding user Will Smith`)}
                        caption="will@company.com"
                        name="Will Smith"
                        onClickRemoveButton={() => alert(`Removing user Will Smith`)}
                        style={{
                            width: '100%'
                        }}
                        type="user"
                        endButton={false}
                        onClick={() => alert(`Will Smith clicked!`)}
                    />
                </>
                },
        ]
    }
}