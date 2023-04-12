"use strict";
exports.__esModule = true;
exports.SingleItemButton = exports.Primary = void 0;
var ResourceCard_1 = require("../../components/elements/ResourceCard");
var sample_data_1 = require("../../util/sample-data");
exports["default"] = {
    title: 'Composite/ResourceCard',
    component: ResourceCard_1.ResourceCard
};
exports.Primary = {
    args: {
        variant: 'primary',
        accessState: 'access',
        bookmarked: false,
        resourceName: 'vol-00g7cadc84aa19292',
        resourceType: 'AWS EC2 EBS Volume',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        dropDownItems: sample_data_1.menuItems,
        dotMenuItems: sample_data_1.menu2Items,
        onClickBookmark: function () { return alert('Bookmark button triggered.'); },
        onClickMoreInfo: function () { return alert('More Info button triggered.'); }
    }
};
exports.SingleItemButton = {
    args: {
        variant: 'primary',
        accessState: 'access',
        bookmarked: false,
        resourceName: 'vol-00g7cadc84aa19292',
        resourceType: 'AWS EC2 EBS Volume',
        accountName: 'StagingAWSAcc',
        region: 'US-west',
        dropDownItems: sample_data_1.menu4Items,
        dotMenuItems: sample_data_1.menu2Items,
        onClickBookmark: function () { return alert('Bookmark button triggered.'); },
        onClickMoreInfo: function () { return alert('More Info button triggered.'); }
    }
};
