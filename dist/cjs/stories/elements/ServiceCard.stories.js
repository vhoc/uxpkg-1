"use strict";
exports.__esModule = true;
exports.WithMoreInfoButton = exports.Default = void 0;
var ServiceCard_1 = require("../../components/elements/ServiceCard");
var sample_data_1 = require("../../util/sample-data");
exports["default"] = {
    title: 'Composite/ServiceCard',
    component: ServiceCard_1.ServiceCard
};
exports.Default = {
    args: {
        serviceType: 'server',
        accessState: 'granted',
        bookmarked: false,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-west',
        dotMenuItems: sample_data_1.menu2Items,
        onBookmarkClick: function () { return alert('Bookmark button triggered.'); },
        onMoreInfoClick: function () { return alert('More Info button triggered.'); }
    }
};
exports.WithMoreInfoButton = {
    args: {
        serviceType: 'database',
        accessState: 'granted',
        bookmarked: false,
        showMoreInfoButton: true,
        resourceName: 'Server name',
        resourceType: 'Server type',
        accountName: 'Account',
        region: 'us-east',
        dotMenuItems: sample_data_1.menu2Items,
        onBookmarkClick: function () { return alert('Bookmark button triggered.'); },
        onMoreInfoClick: function () { return alert('More Info button triggered.'); }
    }
};
