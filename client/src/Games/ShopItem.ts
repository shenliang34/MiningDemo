/**
* name 
*/
module Games
{
	export class ShopItem extends Main.UI_ShopItem
	{
		private shopData: ShopData;
		constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.m_buy.onClick(this, this.onClickBuyBtn);
		}

		private onClickBuyBtn(): void
		{
			if (user.isMaxCar)
			{
				user.gameWindow.showTip("数量达到上限");
			}
			else
			{
				(<SurePanel>user.shopWindow.m_sure).show(() =>
				{
					this.shopData.isBuyed = true;
					user.gameWindow.showTip("购买成功");
					user.shopWindow.hide();
					user.gameWindow.createCar(this.shopData.index);
				});
			}
		}

		/**
		 * 
		 * @param shopData 
		 */
		updateView(shopData: ShopData)
		{
			this.shopData = shopData;
			if (shopData.isBuyed)
			{
				// this.m_buy.enabled = false;
				this.m_c_state.selectedIndex = 1;
			}
			else
			{
				// this.m_buy.enabled = true;
				this.m_c_state.selectedIndex = 0;
			}
			this.m_c_icon.selectedIndex = shopData.index - 1;
			this.m_sec.text = "周期：" + shopData.schedule + "天";
			this.m_priece.text = "价格：" + shopData.price;
			this.m_num.text = "算力：" + shopData.schedule;
			this.m_daily.text = "日产属性" + shopData.daily;
		}
	}
}