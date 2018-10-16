
namespace Games
{
    export class User
    {
        public road1: Road = new Road();
        public road2: Road = new Road();
        public road3: Road = new Road();
        public road4: Road = new Road();
        public road5: Road = new Road();

        public shopDatas: Array<ShopData>;
        public shopWindow: ShopWindow;
        public gameWindow: GameWindow;

        public curBagCarNum: number = 0;
        public curCars: Array<Car> = [];

        public gold: number = 0;

        constructor()
        {
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
            this.shopDatas.push(new ShopData(1, 10, 0.4, 30, 0.8, 12));
            this.shopDatas.push(new ShopData(1, 100, 4, 40, 0.85, 160));
            this.shopDatas.push(new ShopData(1, 500, 16, 50, 0.9, 800));
            this.shopDatas.push(new ShopData(1, 1000, 25, 70, 0.95, 1750));
            this.shopDatas.push(new ShopData(1, 5000, 100, 90, 1, 9000));
        }

        public get isMaxCar(): boolean
        {
            return user.gameWindow.curCars.length >= 13;
        }
    }
}