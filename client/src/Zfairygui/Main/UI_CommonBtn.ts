/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Main {

	export class UI_CommonBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://43jwvuthaiq554";

		public static createInstance():UI_CommonBtn {
			return <UI_CommonBtn><any>(fairygui.UIPackage.createObject("Main","CommonBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getController("button");
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}