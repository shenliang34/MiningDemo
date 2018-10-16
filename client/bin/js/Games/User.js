var Games;
(function (Games) {
    var User = (function () {
        function User() {
            this.road1 = new Games.Road();
            this.road2 = new Games.Road();
            this.road3 = new Games.Road();
            this.road4 = new Games.Road();
            this.road5 = new Games.Road();
            this.curBagCarNum = 0;
            this.curCars = [];
            this.gold = 0;
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
            this.shopDatas.push(new Games.ShopData(1, 10, 0.4, 30, 0.8, 12));
            this.shopDatas.push(new Games.ShopData(1, 100, 4, 40, 0.85, 160));
            this.shopDatas.push(new Games.ShopData(1, 500, 16, 50, 0.9, 800));
            this.shopDatas.push(new Games.ShopData(1, 1000, 25, 70, 0.95, 1750));
            this.shopDatas.push(new Games.ShopData(1, 5000, 100, 90, 1, 9000));
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