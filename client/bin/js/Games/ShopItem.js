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
    var ShopItem = /** @class */ (function (_super) {
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
                    user.shopWindow.hide();
                    Games.NetWork.getInstance.sendBuy(_this.shopData.index);
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
            this.m_sec.text = "周期：" + shopData.outPutDay + "天";
            this.m_priece.text = "价格：" + shopData.price;
            this.m_num.text = "算力：" + shopData.sl;
            this.m_daily.text = "日产：" + shopData.dayOutPut;
        };
        return ShopItem;
    }(Main.UI_ShopItem));
    Games.ShopItem = ShopItem;
})(Games || (Games = {}));
//# sourceMappingURL=ShopItem.js.map