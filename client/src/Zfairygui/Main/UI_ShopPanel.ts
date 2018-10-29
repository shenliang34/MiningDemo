/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_ShopPanel extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_list:fairygui.GList;
		public m_close:UI_CloseBtn;

		public static URL:string = "ui://43jwvuthennx4v";

		public static createInstance():UI_ShopPanel {
			return <UI_ShopPanel><any>(fairygui.UIPackage.createObject("Main","ShopPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_list = <fairygui.GList><any>(this.getChild("list"));
			this.m_close = <UI_CloseBtn><any>(this.getChild("close"));
		}
	}
}