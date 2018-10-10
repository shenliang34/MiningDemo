namespace Games
{
    export class GameWindow extends Main.UI_GameUI
    {
        public static createInstance():GameWindow {
			return <GameWindow><any>(fairygui.UIPackage.createObject("Main","GameUI"));
		}

        public show():void
        {
            this.m_t0.play(Handler.create(null,()=>{

            }),-1);
        }

        public playAnima():void
        {

        }
    }
}