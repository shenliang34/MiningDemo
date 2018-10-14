/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_CoinMinItem extends fairygui.GLabel {

		public m_n55:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://43jwvuthid724z";

		public static createInstance():UI_CoinMinItem {
			return <UI_CoinMinItem><any>(fairygui.UIPackage.createObject("Main","CoinMinItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n55 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}