/**
* name 
*/
module Games
{
	export class ShopPanel extends Main.UI_ShopPanel
	{
		public shopWindow: ShopWindow;

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.m_list.itemRenderer = Handler.create(this, this.updateShopItem, null, false);
		}

		private updateShopItem(index: number, item: ShopItem): void
		{
			item.updateView(user.shopDatas[index]);
		}

		constructor()
		{
			super();
		}

		public show(shopWindow: ShopWindow): void
		{
			this.shopWindow = shopWindow;
			this.m_close.onClick(this, this.onClickCloseBtn);

			this.m_list.numItems = user.shopDatas.length;
		}

		private onClickCloseBtn(): void
		{
			this.hide();
		}

		public hide(): void
		{
			this.m_close.offClick(this, this.onClickCloseBtn);
			this.shopWindow.hide();
		}
	}
}