/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main;
(function (Main) {
    var UI_CommonBtn = /** @class */ (function (_super) {
        __extends(UI_CommonBtn, _super);
        function UI_CommonBtn() {
            return _super.call(this) || this;
        }
        UI_CommonBtn.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "CommonBtn"));
        };
        UI_CommonBtn.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_button = this.getController("button");
            this.m_icon = (this.getChild("icon"));
        };
        UI_CommonBtn.URL = "ui://43jwvuthaiq554";
        return UI_CommonBtn;
    }(fairygui.GButton));
    Main.UI_CommonBtn = UI_CommonBtn;
})(Main || (Main = {}));
//# sourceMappingURL=UI_CommonBtn.js.map