import React from "react";
import { PickListContainer } from "../../components/elements/PickListContainer";
import { UserGroupBar } from "../../components/elements/UserGroupBar";
export default {
    title: 'composite/PickList Elements/PickListContainer',
    component: PickListContainer
};
export var Default = {
    args: {
        style: {
            width: '396px',
            height: '459px'
        }
    }
};
export var WithChildren = {
    args: {
        style: {
            width: '396px',
            height: '459px'
        },
        children: React.createElement(React.Fragment, null,
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "bill@company.com", name: "Bill Murray", removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "user" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "keanu@company.com", name: "Keanu Reeves", removeButtonOnClick: function () { return console.log('click'); }, selected: true, style: {
                    width: '394px'
                }, type: "user" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "ana@company.com", name: "Ana de Armas", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "user" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            React.createElement(UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }))
    }
};
