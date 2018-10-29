
namespace Games
{
    export class User
    {
        // public road1: Road = new Road();
        // public road2: Road = new Road();
        // public road3: Road = new Road();
        // public road4: Road = new Road();
        // public road5: Road = new Road();

        public authorization: string = "";
        public appId: string = "7269076665587380";
        public appKey: string = "4c8rz2Zouw5bmAO3RDzL5yu1hUDBPKpS";

        public roads: Array<Road>;

        public shopDatas: Array<ShopData>;
        private _root: fairygui.GRoot;
        public shopWindow: ShopWindow;
        public gameWindow: GameWindow;

        public curBagCarNum: number = 0;
        public curCars: Array<Car> = [];
        public gold: number = 0;

        public srcShopData: Array<ShopData>;
        public typeKeys: Dictionary<string, ShopData> = new Dictionary<string, ShopData>();

        public get root(): fairygui.GRoot
        {
            if (this._root == null)
            {
                this._root = new fairygui.GRoot();
                this._root.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                fairygui.GRoot.inst.addChild(this._root);
            }
            return this._root;
        }

        constructor()
        {
            this.roads = [];
            this.initShopData();
        }
        // 绑定自定义
        public static bindUserAll(): void
        {
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_GameUI.URL, GameWindow);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopWindow.URL, ShopWindow);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopPanel.URL, ShopPanel);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_ShopItem.URL, ShopItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_CoinItem.URL, CoinItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_CoinMinItem.URL, CoinMinItem);
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_SurePanel.URL, SurePanel);
        }

        public formatCarDatas(data: any): void
        {
            this.shopDatas = [];
            let scale = [0.8, 0.85, 0.9, 0.95, 1];
            let src: Array<JSON> = data;
            for (var index = 0; index < src.length; index++)
            {
                var element = src[index];
                let carData = new ShopData();
                let name = element["name"];
                let srcData = this.typeKeys.getValue(name);
                if (srcData)
                {
                    carData.index = srcData.index;
                }
                carData.dayOutPut = element["day_output"];
                carData.sl = element["sl"];
                carData.outPutDay = element["output_day"];
                carData.price = element["ing_day"];
                this.shopDatas.push(carData);
            }
        }

        public addData(srcData: ShopData): void
        {
            let carData = new ShopData();
            if (srcData)
            {
                carData.index = srcData.index;
                carData.dayOutPut = srcData.dayOutPut;
                carData.sl = srcData.sl;
                carData.outPutDay = srcData.outPutDay;
                carData.price = srcData.price;
                this.shopDatas.push(carData);
                GameConfig.event.dispatch("addcar", carData);
            }
        }

        public initShopData()
        {
            this.shopDatas = [];
            let scale = [0.8, 0.85, 0.9, 0.95, 1];
            let data = new ShopData();
            data.name = "微矿";
            data.price = 10;
            data.dayOutPut = 0.4;
            data.outPutDay = 30;
            data.total = 12;
            data.index = 1;
            data.sl = 1;
            this.typeKeys.add(data.name, data);

            data = new ShopData();
            data.name = "小矿";
            data.price = 100;
            data.dayOutPut = 4;
            data.outPutDay = 40;
            data.total = 160;
            data.index = 2;
            data.sl = 10;
            this.typeKeys.add(data.name, data);

            data = new ShopData();
            data.name = "中矿";
            data.price = 500;
            data.dayOutPut = 16;
            data.outPutDay = 50;
            data.total = 800;
            data.index = 3;
            data.sl = 50;
            this.typeKeys.add(data.name, data);

            data = new ShopData();
            data.name = "大矿";
            data.price = 1000;
            data.dayOutPut = 25;
            data.outPutDay = 70;
            data.total = 1750;
            data.index = 4;
            data.sl = 100;
            this.typeKeys.add(data.name, data);

            data = new ShopData();
            data.name = "超矿";
            data.price = 5000;
            data.dayOutPut = 100;
            data.outPutDay = 90;
            data.total = 9000;
            data.index = 5;
            data.sl = 500;
            this.typeKeys.add(data.name, data);
        }

        public get isMaxCar(): boolean
        {
            return user.gameWindow.curCars.length >= 13;
        }
    }
}