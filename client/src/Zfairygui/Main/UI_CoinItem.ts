/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_CoinItem extends fairygui.GLabel {

		public m_n55:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://43jwvuthid724y";

		public static createInstance():UI_CoinItem {
			return <UI_CoinItem><any>(fairygui.UIPackage.createObject("Main","CoinItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n55 = <fairygui.GImage><any>(this.getChild("n55"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}