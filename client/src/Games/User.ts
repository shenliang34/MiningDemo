
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
            for (var index = 0; index < 5; index++)
            {
                let data = new ShopData();
                data.index = index + 1;
                data.scale = scale[index];
                data.reward = index + 1;
                this.shopDatas.push(data);
            }
        }
    }
}