import { Meta } from '@storybook/react/types-6-0'
import { Diagram } from "../../components/elements/Diagram";

const _data = [
  [
    {
      id: "11",
      value: "1",
      label: "Andrew Jackson",
      description: "andrew@company.com",
      type: 0,
      route: ["21", "31", "33", "42", "44", "45", "49"],
    },
    {
      id: "12",
      value: "2",
      label: "Andrew Jackson",
      description: "andrew@company.com",
      type: 0,
      route: ["21", "32", "42", "43", "47"],
    },
    {
      id: "13",
      value: "3",
      label: "Andrew Jackson",
      description: "andrew@company.com",
      type: 0,
      route: ["21", "34", "41", "45", "46", "48"],
    },
  ],
  [
    {
      id: "21",
      value: "1",
      label: "AWSTestPol",
      type: 1,
      description: "SumaAWS/98012083109281",
    },
  ],
  [
    {
      id: "31",
      value: "1",
      type: 2,
      label: "AdministratorAccess-Amplify",
    },
    { id: "32", value: "2", type: 2, label: "AmazonAugmentedAI" },
    { id: "33", value: "3", type: 2, label: "AccessAnalyzerService" },
    { id: "34", value: "4", type: 2, label: "AWSCustomRole" },
  ],
  [
    {
      id: "41",
      value: "1",
      label: "i-0054d9cfe5771e555",
      description: "AWS EC2 Instance",
      type: 3,
    },
    {
      id: "42",
      value: "2",
      label: "alias/aws/rds",
      description: "RDS DB",
      type: 4,
    },
    {
      id: "43",
      value: "3",
      label: "vpc-21b0035c",
      description: "VPC",
      type: 5,
    },
    {
      id: "44",
      value: "4",
      label: "i-0054d9cfe5771e555",
      description: "AWS EC2 Instance",
      type: 3,
    },
    {
      id: "45",
      value: "5",
      label: "alias/aws/rds",
      description: "RDS DB",
      type: 4,
    },
    {
      id: "46",
      value: "6",
      label: "vpc-21b0035c",
      description: "VPC",
      type: 5,
    },
    {
      id: "47",
      value: "7",
      label: "i-0054d9cfe5771e555",
      description: "AWS EC2 Instance",
      type: 3,
    },
    {
      id: "48",
      value: "8",
      label: "alias/aws/rds",
      description: "RDS DB",
      type: 4,
    },
    {
      id: "49",
      value: "9",
      label: "vpc-21b0035c",
      description: "VPC",
      type: 5,
    },
  ],
];

const action = (e: any) => {
  console.log("Action for", e.target.id, "action");
};

const actions = [
  { id: "print-action", label: "More details", onClick: action },
  { id: "print-action-2", label: "Another print details", onClick: action, type: 5 },
  { id: "print-action-3", label: "Some more details", onClick: action},
  { id: "user-action", label: "Some user action", onClick: action, type: 0},
  { id: "role-action", label: "Some role action", onClick: action, type: 1},
  { id: "policy-action", label: "Some policy action", onClick: action, type: 2},
  { id: "db-action", label: "Some database action", onClick: action, type: 3},
  { id: "awsUser-action", label: "Some aws user action", onClick: action, type: 4},
  { id: "instance-action", label: "Some instance action", onClick: action, type: 5 },
];

const connections = [
  { startID: "11", endID: "21" },
  { startID: "12", endID: "21" },
  { startID: "13", endID: "21" },
  { startID: "21", endID: "31" },
  { startID: "21", endID: "32" },
  { startID: "21", endID: "33" },
  { startID: "21", endID: "34" },
  { startID: "31", endID: "42" },
  { startID: "31", endID: "49" },
  { startID: "32", endID: "42" },
  { startID: "32", endID: "43" },
  { startID: "32", endID: "47" },
  { startID: "33", endID: "44" },
  { startID: "33", endID: "45" },
  { startID: "34", endID: "41" },
  { startID: "34", endID: "45" },
  { startID: "34", endID: "46" },
  { startID: "34", endID: "48" },
];

export default {
  title: "elements/Graphical/Diagram",
  component: Diagram,
} as Meta
/*
export const PrimaryButton = () => (
  <Diagram data={_data} arrows={connections} actions={actions} />
);*/

export const Default = {
    args: {
        data: _data,
        arrows: connections,
        actions: actions,
    }
}