var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* name
*/
var Games;
(function (Games) {
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            return _super.call(this) || this;
        }
        ShopPanel.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_list.itemRenderer = Handler.create(this, this.updateShopItem, null, false);
        };
        ShopPanel.prototype.updateShopItem = function (index, item) {
            item.updateView(user.shopDatas[index]);
        };
        ShopPanel.prototype.show = function (shopWindow) {
            this.shopWindow = shopWindow;
            this.m_close.onClick(this, this.onClickCloseBtn);
            this.m_list.numItems = user.shopDatas.length;
        };
        ShopPanel.prototype.onClickCloseBtn = function () {
            this.hide();
        };
        ShopPanel.prototype.hide = function () {
            this.m_close.offClick(this, this.onClickCloseBtn);
            this.shopWindow.hide();
        };
        return ShopPanel;
    }(Main.UI_ShopPanel));
    Games.ShopPanel = ShopPanel;
})(Games || (Games = {}));
//# sourceMappingURL=ShopPanel.js.map