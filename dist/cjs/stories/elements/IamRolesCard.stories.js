"use strict";
exports.__esModule = true;
exports.LessContent = exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var IamRolesCard_1 = require("../../components/elements/IamRolesCard");
exports["default"] = {
    title: 'composite/IamRolesCard',
    component: IamRolesCard_1.IamRolesCard
};
exports.Default = {
    args: {
        selected: false,
        assigned: false,
        title: 'AmazonAugmentedAIFullAccess',
        description: 'Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI.',
        onClickButtonTopRight: function () { return alert("Do something."); },
        onClickButtonBottomLeft: function () { return alert("Do something else."); },
        children: react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", { style: { fontSize: '18px', fontWeight: 'bold' } }, "ReactNode Children here"),
            react_1["default"].createElement("p", null, "Anything can go in here!"),
            react_1["default"].createElement("p", null, "This is the default style of this container..."),
            react_1["default"].createElement("p", { style: { fontSize: '13px', fontWeight: 'bold', color: 'blue', textTransform: 'capitalize' } }, "...but you can override it styling the components you place in here."),
            react_1["default"].createElement("p", null, "Dictum tellus sodales nam gravida inceptos ligula ante etiam facilisis. Taciti, cursus libero vehicula. Dignissim vivamus posuere inceptos dis ad? Neque nisl et torquent. Feugiat massa nam lobortis mollis orci elit. Nam odio tortor malesuada condimentum dis. Cum mus conubia malesuada porttitor odio ridiculus urna viverra dignissim. Odio vehicula congue dis, neque magna. Platea rutrum volutpat potenti donec sociosqu feugiat vulputate per ullamcorper suspendisse libero nec. Felis dapibus lectus elementum mauris diam mollis aliquam nulla neque nec! Taciti scelerisque sociosqu duis magna dapibus penatibus urna imperdiet at quisque scelerisque diam. Pulvinar eleifend aliquet phasellus vel ut tellus sed primis eget rhoncus ultricies. Cubilia est quis ullamcorper ad imperdiet malesuada. Etiam rutrum nibh enim pellentesque? Fringilla lacinia lacus."),
            react_1["default"].createElement("p", null, "Tincidunt, sed euismod congue aptent pharetra penatibus taciti luctus suscipit arcu elit. Porta torquent hac senectus phasellus ipsum sed viverra litora. Metus velit maecenas aptent ultrices quis metus elit cubilia sodales donec. Eleifend augue elementum nostra leo vitae a tempus torquent. Dui nam maecenas cursus nibh dis euismod augue. Justo natoque molestie eleifend! Nulla eu mus odio venenatis vitae libero ullamcorper curabitur lectus? Donec fermentum est pharetra egestas mattis sem. A sociosqu porta curae; neque imperdiet volutpat aptent cubilia. Tincidunt eget egestas porttitor netus nibh suspendisse duis nisl, himenaeos hac! Sed placerat urna donec neque penatibus sociis euismod consectetur risus? In luctus aptent luctus pellentesque curabitur venenatis lacinia laoreet morbi. Arcu fringilla justo dictum arcu scelerisque nibh euismod. Convallis purus tempus mauris vivamus. Ad congue orci."),
            react_1["default"].createElement("p", null, "Sit vehicula volutpat elit potenti fermentum, aptent nostra. Etiam penatibus sollicitudin venenatis felis aliquet et sem adipiscing penatibus. Posuere adipiscing consequat facilisis torquent potenti vivamus lobortis imperdiet ligula. Phasellus pharetra ridiculus imperdiet dis fermentum nam felis cum sodales placerat fames vulputate. Leo feugiat pulvinar penatibus vel lectus erat neque hac. Eget dis aliquet dis mauris."),
            react_1["default"].createElement("p", null, "Dignissim purus ante mollis maecenas tempor gravida lorem! Volutpat rhoncus gravida aliquet primis luctus scelerisque nulla primis elit. Quis, penatibus penatibus et aliquam. A ornare dictumst vivamus tempus lacus curae; primis? Purus malesuada elementum montes sociis feugiat pretium, faucibus mus porta convallis arcu. Magna vehicula inceptos aliquet ac turpis volutpat libero. Duis inceptos odio ornare convallis ligula integer risus eros. Vulputate ridiculus commodo interdum eu cubilia lacinia mus molestie semper interdum. Cras vivamus dictum auctor, lectus sit enim lectus in. Justo aenean dictum eu maecenas fermentum fermentum convallis interdum cras congue. Odio fringilla convallis sodales parturient curae; accumsan nostra. Primis egestas, nisi ut dolor ridiculus posuere eros taciti gravida. Cum quis tortor erat purus eros nullam curae; in malesuada!"),
            react_1["default"].createElement("p", null, "Taciti dapibus litora sed mattis blandit; diam dis fermentum phasellus. Nisi porta, enim fames euismod. Aenean penatibus non nunc, quam penatibus eget sed porttitor taciti. Morbi mauris consectetur gravida pulvinar faucibus mattis quam. Gravida donec pulvinar justo. Aenean ligula condimentum, volutpat ipsum aliquet adipiscing consectetur laoreet. Elit cubilia nisi, erat parturient. Odio nulla penatibus egestas placerat sodales cursus. Cursus ad lorem vulputate. Non aptent vel velit molestie dignissim nulla sit."))
    }
};
exports.LessContent = {
    args: {
        selected: false,
        assigned: false,
        title: 'AmazonAugmentedAIFullAccess',
        description: 'Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI.',
        onClickButtonTopRight: function () { return alert("Do something."); },
        onClickButtonBottomLeft: function () { return alert("Do something else."); },
        children: react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", { style: { fontSize: '18px', fontWeight: 'bold' } }, "ReactNode Children here"),
            react_1["default"].createElement("p", null, "Anything can go in here!"),
            react_1["default"].createElement("p", null, "This is the default style of this container..."),
            react_1["default"].createElement("p", { style: { fontSize: '13px', fontWeight: 'bold', color: 'blue', textTransform: 'capitalize' } }, "...but you can override it styling the components you place in here."))
    }
};
