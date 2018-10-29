var Games;
(function (Games) {
    var User = /** @class */ (function () {
        function User() {
            // public road1: Road = new Road();
            // public road2: Road = new Road();
            // public road3: Road = new Road();
            // public road4: Road = new Road();
            // public road5: Road = new Road();
            this.authorization = "";
            this.appId = "7269076665587380";
            this.appKey = "4c8rz2Zouw5bmAO3RDzL5yu1hUDBPKpS";
            this.curBagCarNum = 0;
            this.curCars = [];
            this.gold = 0;
            this.typeKeys = new Dictionary();
            this.roads = [];
            this.initShopData();
        }
        Object.defineProperty(User.prototype, "root", {
            get: function () {
                if (this._root == null) {
                    this._root = new fairygui.GRoot();
                    this._root.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                    fairygui.GRoot.inst.addChild(this._root);
                }
                return this._root;
            },
            enumerable: true,
            configurable: true
        });
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
        User.prototype.formatCarDatas = function (data) {
            this.shopDatas = [];
            var scale = [0.8, 0.85, 0.9, 0.95, 1];
            var src = data;
            for (var index = 0; index < src.length; index++) {
                var element = src[index];
                var carData = new Games.ShopData();
                var name_1 = element["name"];
                var srcData = this.typeKeys.getValue(name_1);
                if (srcData) {
                    carData.index = srcData.index;
                }
                carData.dayOutPut = element["day_output"];
                carData.sl = element["sl"];
                carData.outPutDay = element["output_day"];
                carData.price = element["ing_day"];
                this.shopDatas.push(carData);
            }
        };
        User.prototype.addData = function (srcData) {
            var carData = new Games.ShopData();
            if (srcData) {
                carData.index = srcData.index;
                carData.dayOutPut = srcData.dayOutPut;
                carData.sl = srcData.sl;
                carData.outPutDay = srcData.outPutDay;
                carData.price = srcData.price;
                this.shopDatas.push(carData);
                GameConfig.event.dispatch("addcar", carData);
            }
        };
        User.prototype.initShopData = function () {
            this.shopDatas = [];
            var scale = [0.8, 0.85, 0.9, 0.95, 1];
            var data = new Games.ShopData();
            data.name = "微矿";
            data.price = 10;
            data.dayOutPut = 0.4;
            data.outPutDay = 30;
            data.total = 12;
            data.index = 1;
            data.sl = 1;
            this.typeKeys.add(data.name, data);
            data = new Games.ShopData();
            data.name = "小矿";
            data.price = 100;
            data.dayOutPut = 4;
            data.outPutDay = 40;
            data.total = 160;
            data.index = 2;
            data.sl = 10;
            this.typeKeys.add(data.name, data);
            data = new Games.ShopData();
            data.name = "中矿";
            data.price = 500;
            data.dayOutPut = 16;
            data.outPutDay = 50;
            data.total = 800;
            data.index = 3;
            data.sl = 50;
            this.typeKeys.add(data.name, data);
            data = new Games.ShopData();
            data.name = "大矿";
            data.price = 1000;
            data.dayOutPut = 25;
            data.outPutDay = 70;
            data.total = 1750;
            data.index = 4;
            data.sl = 100;
            this.typeKeys.add(data.name, data);
            data = new Games.ShopData();
            data.name = "超矿";
            data.price = 5000;
            data.dayOutPut = 100;
            data.outPutDay = 90;
            data.total = 9000;
            data.index = 5;
            data.sl = 500;
            this.typeKeys.add(data.name, data);
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