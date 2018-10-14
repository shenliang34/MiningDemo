/**
* name 
*/
module Games
{
	export class SurePanel extends Main.UI_SurePanel
	{
		private sureFunc: Function;
		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.m_buy.onClick(this, this.onClickBuy);
			this.m_close.onClick(this, this.onClickClose);
		}

		private onClickBuy(): void
		{
			this.sureFunc && this.sureFunc();
		}

		private onClickClose(): void
		{
			user.shopWindow.m_t3.play(Handler.create(null, () =>
			{
				user.shopWindow.m_c_show_sure.selectedIndex = 0;
			}), 1);
		}

		constructor()
		{
			super();
		}

		public show(sureFunc: Function)
		{
			user.shopWindow.m_c_show_sure.selectedIndex = 1
			user.shopWindow.m_t2.play(Handler.create(null, () =>
			{

			}), 1);
			this.sureFunc = sureFunc;
		}
	}
}