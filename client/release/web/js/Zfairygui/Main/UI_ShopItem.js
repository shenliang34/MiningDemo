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
    var UI_ShopItem = /** @class */ (function (_super) {
        __extends(UI_ShopItem, _super);
        function UI_ShopItem() {
            return _super.call(this) || this;
        }
        UI_ShopItem.createInstance = function () {
            return (fairygui.UIPackage.createObject("Main", "ShopItem"));
        };
        UI_ShopItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_c_state = this.getControllerAt(0);
            this.m_c_icon = this.getControllerAt(1);
            this.m_n0 = (this.getChildAt(0));
            this.m_icon = (this.getChildAt(1));
            this.m_priece = (this.getChildAt(2));
            this.m_num = (this.getChildAt(3));
            this.m_sec = (this.getChildAt(4));
            this.m_daily = (this.getChildAt(5));
            this.m_n6 = (this.getChildAt(6));
            this.m_buy = (this.getChildAt(7));
        };
        UI_ShopItem.URL = "ui://43jwvuthennx4t";
        return UI_ShopItem;
    }(fairygui.GComponent));
    Main.UI_ShopItem = UI_ShopItem;
})(Main || (Main = {}));
//# sourceMappingURL=UI_ShopItem.js.map