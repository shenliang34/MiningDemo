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
    var UI_Toast = /** @class */ (function (_super) {
        __extends(UI_Toast, _super);
        function UI_Toast() {
            return _super.call(this) || this;
        }
        UI_Toast.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "Toast"));
        };
        UI_Toast.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_n0 = (this.getChild("n0"));
            this.m_msg = (this.getChild("msg"));
        };
        UI_Toast.URL = "ui://43jwvuthennx4w";
        return UI_Toast;
    }(fairygui.GComponent));
    Main.UI_Toast = UI_Toast;
})(Main || (Main = {}));
//# sourceMappingURL=UI_Toast.js.map