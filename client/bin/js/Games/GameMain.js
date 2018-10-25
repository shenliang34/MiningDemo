var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var Stage = laya.display.Stage;
var Games;
(function (Games) {
    var GameMain = /** @class */ (function () {
        function GameMain() {
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
            this.loadText.color = "#ffffff";
            this.loadText.fontSize = 40;
            this.loadText.y = Laya.stage.height - this.loadText.height - 150;
            this.loadText.x = Laya.stage.width - this.loadText.width >> 1;
            this.loadText.align = "center";
            this.loadText.valign = "middle";
            this.loadText.autoSize = true;
            Laya.stage.addChild(this.loadText);
            // //
            Laya.stage.scaleMode = laya.display.Stage.SCALE_FIXED_AUTO;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            Laya.stage.bgColor = "#000000";
            // Laya.stage.screenMode = laya.display.Stage.SCREEN_VERTICAL;
            Laya.loader.load([
                "res/progressBar.png",
                "res/progressBar$bar.png"
            ], Handler.create(this, this.onLoadProgressBarCompelte));
        }
        GameMain.prototype.onLoadProgressBarCompelte = function () {
            console.log("complete");
            this.progressBar = new Laya.ProgressBar("res/progressBar.png");
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
                { url: "res/atlas/anima/che1.atlas" },
                { url: "res/atlas/anima/che2.atlas" },
                { url: "res/atlas/anima/che3.atlas" },
                { url: "res/atlas/anima/che4.atlas" },
                { url: "res/atlas/anima/che5.atlas" },
                { url: "res/atlas/anima/maoyan.atlas" },
                { url: "res/atlas/anima/npc.atlas" },
            ], Handler.create(this, this.onLoaded), Handler.create(this, this.onProgress, null, false));
        };
        GameMain.prototype.onChangedProgress = function (value) {
            console.log("changed" + value);
            this.loadText.text = "加载进度 " + Math.ceil(value * 100) + "%";
            this.loadText.x = Laya.stage.width - this.loadText.width >> 1;
        };
        GameMain.prototype.onProgress = function (progress) {
            console.log("loading " + progress);
            if (this.loadTween) {
                laya.utils.Tween.clear(this.loadTween);
            }
            this.loadTween = laya.utils.Tween.to(this.progressBar, { value: progress }, 1000, Laya.Ease.linearIn, Handler.create(this, this.complete));
        };
        GameMain.prototype.complete = function () {
            if (this.loadComplete) {
                Laya.stage.removeChild(this.loadText);
                this.loadText = null;
                Laya.stage.removeChild(this.progressBar);
                this.progressBar = null;
                Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
                Main.MainBinder.bindAll();
                Games.User.bindUserAll();
                Games.NetWork.getInstance.sendUrl(Games.NetWork.KJ_LIST_URL, { "appid": user.appId, "appkey": user.appKey, "authorization": user.authorization }, "head");
                fairygui.UIPackage.addPackage("res/Main");
                //
                var uiMain = Games.GameWindow.createInstance();
                user.root.addChild(uiMain);
                uiMain.setSize(user.root.width, user.root.height);
                uiMain.show();
            }
        };
        GameMain.prototype.onLoaded = function () {
            console.log("complete  ddd");
            this.loadComplete = true;
        };
        return GameMain;
    }());
    Games.GameMain = GameMain;
})(Games || (Games = {}));
//获得参数的方法
var request = {
    QueryString: function (val) {
        var uri = window.location.search;
        var re = new RegExp("" + val + "=([^&?]*)", "ig");
        return ((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
    }
};
var user = new Games.User();
new Games.GameMain();
user.authorization = request.QueryString("authorization") || "gesh";
console.log(user.authorization);
//# sourceMappingURL=GameMain.js.map