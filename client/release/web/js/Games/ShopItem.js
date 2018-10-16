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
    var ShopItem = (function (_super) {
        __extends(ShopItem, _super);
        function ShopItem() {
            return _super.call(this) || this;
        }
        ShopItem.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.m_buy.onClick(this, this.onClickBuyBtn);
        };
        ShopItem.prototype.onClickBuyBtn = function () {
            var _this = this;
            if (user.isMaxCar) {
                user.gameWindow.showTip("数量达到上限");
            }
            else {
                user.shopWindow.m_sure.show(function () {
                    _this.shopData.isBuyed = true;
                    user.gameWindow.showTip("购买成功");
                    user.shopWindow.hide();
                    user.gameWindow.createCar(_this.shopData.index);
                });
            }
        };
        /**
         *
         * @param shopData
         */
        ShopItem.prototype.updateView = function (shopData) {
            this.shopData = shopData;
            if (shopData.isBuyed) {
                // this.m_buy.enabled = false;
                this.m_c_state.selectedIndex = 1;
            }
            else {
                // this.m_buy.enabled = true;
                this.m_c_state.selectedIndex = 0;
            }
            this.m_c_icon.selectedIndex = shopData.index - 1;
            this.m_sec.text = "周期：" + shopData.schedule + "天";
            this.m_priece.text = "价格：" + shopData.price;
            this.m_num.text = "算力：" + shopData.schedule;
            this.m_daily.text = "日产属性" + shopData.daily;
        };
        return ShopItem;
    }(Main.UI_ShopItem));
    Games.ShopItem = ShopItem;
})(Games || (Games = {}));
//# sourceMappingURL=ShopItem.js.map