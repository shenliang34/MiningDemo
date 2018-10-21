
namespace Games
{
    export class User
    {
        // public road1: Road = new Road();
        // public road2: Road = new Road();
        // public road3: Road = new Road();
        // public road4: Road = new Road();
        // public road5: Road = new Road();

        public roads: Array<Road>;

        public shopDatas: Array<ShopData>;
        public shopWindow: ShopWindow;
        public gameWindow: GameWindow;

        public curBagCarNum: number = 0;
        public curCars: Array<Car> = [];

        public gold: number = 0;

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

        public initShopData()
        {
            this.shopDatas = [];
            let scale = [0.8, 0.85, 0.9, 0.95, 1];
            this.shopDatas.push(new ShopData(1, 10, 0.4, 30, 1, 12, 1));
            this.shopDatas.push(new ShopData(2, 100, 4, 40, 1.3, 160, 10));
            this.shopDatas.push(new ShopData(3, 500, 16, 50, 1.5, 800, 50));
            this.shopDatas.push(new ShopData(4, 1000, 25, 70, 1.7, 1750, 100));
            this.shopDatas.push(new ShopData(5, 5000, 100, 90, 2, 9000, 150));
        }

        public get isMaxCar(): boolean
        {
            return user.gameWindow.curCars.length >= 13;
        }
    }
}