var Games;
(function (Games) {
    var User = /** @class */ (function () {
        function User() {
            this.curBagCarNum = 0;
            this.curCars = [];
            this.gold = 0;
            this.roads = [];
            this.initShopData();
        }
        // 绑定自定义
        User.bindUserAll = function () {
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_GameUI.URL, Games.GameWindow);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopWindow.URL, Games.ShopWindow);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopPanel.URL, Games.ShopPanel);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopItem.URL, Games.ShopItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_CoinItem.URL, Games.CoinItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_CoinMinItem.URL, Games.CoinMinItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_SurePanel.URL, Games.SurePanel);
        };
        User.prototype.initShopData = function () {
            this.shopDatas = [];
            var scale = [0.8, 0.85, 0.9, 0.95, 1];
            this.shopDatas.push(new Games.ShopData(1, 10, 0.4, 30, 1, 12, 1));
            this.shopDatas.push(new Games.ShopData(2, 100, 4, 40, 1.3, 160, 10));
            this.shopDatas.push(new Games.ShopData(3, 500, 16, 50, 1.5, 800, 50));
            this.shopDatas.push(new Games.ShopData(4, 1000, 25, 70, 1.7, 1750, 100));
            this.shopDatas.push(new Games.ShopData(5, 5000, 100, 90, 2, 9000, 150));
        };
        Object.defineProperty(User.prototype, "isMaxCar", {
            get: function () {
                return user.gameWindow.curCars.length >= 13;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    Games.User = User;
})(Games || (Games = {}));
//# sourceMappingURL=User.js.map