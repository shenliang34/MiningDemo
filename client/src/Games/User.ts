
namespace Games
{
    export class User
    {
        // 绑定自定义
        public static bindUserAll(): void
        {
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_GameUI.URL, GameWindow);
        }
    }
}