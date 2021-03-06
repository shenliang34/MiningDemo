import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import Stage = laya.display.Stage;
namespace Games
{
    export class GameMain
    {
        private loadText: Laya.Text;

        private progressBar: Laya.ProgressBar;
        constructor()
        {
            //初始化微信小游戏适配
            Laya.MiniAdpter.init();
            //初始化引擎
            Laya.init(1080, 1920, Laya.WebGL);

            // var demostr:string = "shenliangliang";
            // for (var i = 0; i < demostr.length; i++) {
            //     var element:string = demostr.charAt(i);
            //     var charText:Laya.Text = new Laya.Text();
            //     charText.text = element;
            //     charText.color = "#ffffff"
            //     charText.fontSize = 20;
            //     charText.y = 40*i;            
            //     Laya.stage.addChild(charText);
            //     Laya.Tween.from(charText,{x:100},3000,Laya.Ease.elasticIn,null);
            // }
            // Laya.Stat.show();
            // var hr:Laya.HttpRequest = new Laya.HttpRequest();
            // var charText: Laya.Text = new Laya.Text();
            // Laya.stage.addChild(charText);
            // charText.fontSize = 12;
            // charText.color = "#ffffff"
            // charText.text = "ffsf"
            // charText.height = 1920;
            // hr.once(Laya.Event.COMPLETE,this,(e)=>{
            //     console.log("complete")
            //     charText.text = e
            //     console.log(e);

            // });
            // hr.once(Laya.Event.ERROR,this,(e)=>{
            //     console.log("error")
            // })
            // hr.send("https://www.baidu.com","","get","text")

            // var xhr = new XMLHttpRequest()
            // xhr.onload = function ()
            // {
            //     console.log(xhr.response)
            // }
            // xhr.open("GET", "http://127.0.0.1:8080", true);
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            // xhr.responseType = "text"
            // xhr.send(null);
            // Laya.stage.addChild(fairygui.GRoot.inst.displayObject)
            // var hold: fairygui.GBasicTextField = new fairygui.GBasicTextField();
            // hold.color = "#FFFFFF";
            // hold.text = "fsfsfsfs";
            // hold.fontSize = 50;
            // hold.autoSize = fairygui.AutoSizeType.Both;
            // hold.setXY(Laya.stage.width - hold.width >> 1, 100)
            // fairygui.GRoot.inst.addChild(hold)

            this.loadText = new Laya.Text();
            this.loadText.text = "Loading...";
            this.loadText.color = "#ffffff"
            this.loadText.fontSize = 40;
            this.loadText.y = Laya.stage.height - this.loadText.height - 150;
            this.loadText.x = Laya.stage.width - this.loadText.width >> 1;
            this.loadText.align = "center";
            this.loadText.valign = "middle";
            this.loadText.autoSize = true;
            Laya.stage.addChild(this.loadText);

            // //
            Laya.stage.scaleMode = laya.display.Stage.SCALE_SHOWALL
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "center";
            Laya.stage.bgColor = "#000000"
            // Laya.stage.screenMode = laya.display.Stage.SCREEN_VERTICAL;

            Laya.loader.load([
                "res/progressBar.png",
                "res/progressBar$bar.png"
            ], Handler.create(this, this.onLoadProgressBarCompelte))
        }

        onLoadProgressBarCompelte(): void
        {
            console.log("complete");

            this.progressBar = new Laya.ProgressBar("res/progressBar.png")

            this.progressBar.width = 400;
            this.progressBar.x = (Laya.stage.width - this.progressBar.width) >> 1;
            this.progressBar.y = this.loadText.y - 50;
            this.progressBar.sizeGrid = "2,2,2,2,1";
            this.progressBar.value = 0;
            this.progressBar.changeHandler = Handler.create(this, this.onChangedProgress, null, false);
            Laya.stage.addChild(this.progressBar);

            //加载游戏资源
            Laya.loader.load([
                { url: "res/Main.bin", type: Laya.Loader.BUFFER },
                { url: "res/Main@atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/Main@atlas0_1.png", type: Laya.Loader.IMAGE },
                // { url: "sound/Main@p3jo5a.mp3", type: Laya.Loader.SOUND },
                // { url: "res/Main@p3jo5b.mp3", type: Laya.Loader.SOUND },
                // { url: "res/Main@p3jo58.mp3", type: Laya.Loader.SOUND },
                // { url: "res/Main@p3jo59.mp3", type: Laya.Loader.SOUND },
                { url: "res/atlas/anima/che1.atlas" },
                { url: "res/atlas/anima/che2.atlas" },
                { url: "res/atlas/anima/che3.atlas" },
                { url: "res/atlas/anima/che4.atlas" },
                { url: "res/atlas/anima/che5.atlas" },
                { url: "res/atlas/anima/maoyan.atlas" },
                { url: "res/atlas/anima/npc.atlas" },
            ], Handler.create(this, this.onLoaded), Handler.create(this, this.onProgress, null, false));
        }

        onChangedProgress(value: number)
        {
            console.log("changed" + value);
            this.loadText.text = "加载进度 " + Math.ceil(value * 100) + "%";
            this.loadText.x = Laya.stage.width - this.loadText.width >> 1;
        }

        private loadTween: laya.utils.Tween;
        private loadComplete: boolean;

        onProgress(progress: number): void
        {
            console.log("loading " + progress);
            if (this.loadTween)
            {
                laya.utils.Tween.clear(this.loadTween);
            }
            this.loadTween = laya.utils.Tween.to(this.progressBar, { value: progress }, 1000, Laya.Ease.linearIn, Handler.create(this, this.complete));
        }

        complete(): void
        {
            if (this.loadComplete)
            {
                Laya.stage.removeChild(this.loadText);
                this.loadText = null;
                Laya.stage.removeChild(this.progressBar);
                this.progressBar = null;
                Laya.stage.addChild(fairygui.GRoot.inst.displayObject);

                Main.MainBinder.bindAll();
                User.bindUserAll();

                fairygui.UIPackage.addPackage("res/Main");
                //
                let uiMain = <GameWindow>GameWindow.createInstance();
                fairygui.GRoot.inst.addChild(uiMain);
                uiMain.show();
            }
        }

        onLoaded(): void
        {
            console.log("complete  ddd");

            this.loadComplete = true;
        }
    }

    new GameMain();
}
var user = new Games.User();
