/**
* name 
*/
module Games
{
	export class ShopWindow extends Main.UI_ShopWindow
	{
		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);
		}

		constructor()
		{
			super();
		}

		public static createInstance(): ShopWindow
		{
			return <ShopWindow><any>(fairygui.UIPackage.createObject("Main", "ShopWindow"));
		}

		public show(): void
		{
			user.shopWindow = this;
			this.visible = true;
			(<ShopPanel>this.m_panel).show(this);
			this.m_c_show_sure.selectedIndex = 0;
			this.m_t0.play(Handler.create(null, () =>
			{

			}), 1);
		}

		public hide(): void
		{
			this.visible = false;
		}
	}
}