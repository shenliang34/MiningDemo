/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_Toast extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_msg:fairygui.GTextField;

		public static URL:string = "ui://43jwvuthennx4w";

		public static createInstance():UI_Toast {
			return <UI_Toast><any>(fairygui.UIPackage.createObject("Main","Toast"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_msg = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}