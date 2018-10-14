var Games;
(function (Games) {
    var User = /** @class */ (function () {
        function User() {
            this.road1 = new Games.Road();
            this.road2 = new Games.Road();
            this.road3 = new Games.Road();
            this.road4 = new Games.Road();
            this.road5 = new Games.Road();
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
            for (var index = 0; index < 5; index++) {
                var data = new Games.ShopData();
                data.index = index + 1;
                data.scale = scale[index];
                data.reward = index + 1;
                this.shopDatas.push(data);
            }
        };
        return User;
    }());
    Games.User = User;
})(Games || (Games = {}));
//# sourceMappingURL=User.js.map