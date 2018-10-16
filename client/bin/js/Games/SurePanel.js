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
/**
* name
*/
var Games;
(function (Games) {
    var SurePanel = /** @class */ (function (_super) {
        __extends(SurePanel, _super);
        function SurePanel() {
            return _super.call(this) || this;
        }
        SurePanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_buy.onClick(this, this.onClickBuy);
            this.m_close.onClick(this, this.onClickClose);
        };
        SurePanel.prototype.onClickBuy = function () {
            this.sureFunc && this.sureFunc();
        };
        SurePanel.prototype.onClickClose = function () {
            user.shopWindow.m_t3.play(Handler.create(null, function () {
                user.shopWindow.m_c_show_sure.selectedIndex = 0;
            }), 1);
        };
        SurePanel.prototype.show = function (sureFunc) {
            user.shopWindow.m_c_show_sure.selectedIndex = 1;
            user.shopWindow.m_t2.play(Handler.create(null, function () {
            }), 1);
            this.sureFunc = sureFunc;
        };
        return SurePanel;
    }(Main.UI_SurePanel));
    Games.SurePanel = SurePanel;
})(Games || (Games = {}));
//# sourceMappingURL=SurePanel.js.map