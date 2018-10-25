namespace Games
{
    export enum Dirction
    {
        Left,
        Right,
        Up,
        Down,
        Left_Up,
        Left_Down,
        Right_Up,
        Right_Down
    }
    import Point = Laya.Point;
    export class GameWindow extends Main.UI_GameUI
    {
        private dirction: number;
        private singleAngle: number = 360.0 / 8;
        private singleHalfAngle: number = 360.0 / 8 / 2;

        private pools: Array<Car>;
        public curCars: Array<Car>;
        private car: Car;

        private npc: Laya.Animation;

        private _shopWindow: ShopWindow;

        private tips: Array<Toast>;
        public constructor() 
        {
            super();

            this.curCars = [];
            this.pools = [];
        }

        protected constructFromXML(xml: any): void
        {
            super.constructFromXML(xml);

            user.gameWindow = this;
            this.tips = [];
            for (var index = 1; index <= 13; index++)
            {
                let road = new Road();
                user.roads.push(road);

                let starPosGo = this.getChild("startPos" + index);
                road.posList.push(new Point(starPosGo.x, starPosGo.y));

                let posGo = this.getChild("pos" + index);
                road.posList.push(new Point(posGo.x, posGo.y));

                let endPosGo = this.getChild("endPos" + index);
                road.posList.push(new Point(endPosGo.x, endPosGo.y));

                let pos2Go = this.getChild("pos" + index);
                road.posList.push(new Point(pos2Go.x, pos2Go.y));

                let starPos2Go = this.getChild("startPos" + index);
                road.posList.push(new Point(starPos2Go.x, starPos2Go.y));
            }

            // user.road1.posList = [new Point(this.m_startPos1.x, this.m_startPos1.y), new Point(this.m_pos1.x, this.m_pos1.y), new Point(this.m_pos1_1.x, this.m_pos1_1.y), new Point(this.m_endPos1.x, this.m_endPos1.y), new Point(this.m_pos1_1.x, this.m_pos1_1.y), new Point(this.m_pos1.x, this.m_pos1.y), new Point(this.m_startPos1.x, this.m_startPos1.y)]
            // user.road2.posList = [new Point(this.m_startPos2.x, this.m_startPos2.y), new Point(this.m_pos2.x, this.m_pos2.y), new Point(this.m_pos2_1.x, this.m_pos2_1.y), new Point(this.m_endPos2.x, this.m_endPos2.y), new Point(this.m_pos2_1.x, this.m_pos2_1.y), new Point(this.m_pos2.x, this.m_pos2.y), new Point(this.m_startPos2.x, this.m_startPos2.y)]
            // user.road3.posList = [new Point(this.m_startPos3.x, this.m_startPos3.y), new Point(this.m_pos3.x, this.m_pos3.y), new Point(this.m_pos3_1.x, this.m_pos3_1.y), new Point(this.m_endPos3.x, this.m_endPos3.y), new Point(this.m_pos3_1.x, this.m_pos3_1.y), new Point(this.m_pos3.x, this.m_pos3.y), new Point(this.m_startPos3.x, this.m_startPos3.y)]
            // user.road4.posList = [new Point(this.m_startPos4.x, this.m_startPos4.y), new Point(this.m_pos4.x, this.m_pos4.y), new Point(this.m_endPos4.x, this.m_endPos4.y), new Point(this.m_pos4.x, this.m_pos4.y), new Point(this.m_startPos4.x, this.m_startPos4.y)]
            // user.road5.posList = [new Point(this.m_startPos5.x, this.m_startPos5.y), new Point(this.m_pos5.x, this.m_pos5.y), new Point(this.m_endPos5.x, this.m_endPos5.y), new Point(this.m_pos5.x, this.m_pos5.y), new Point(this.m_startPos5.x, this.m_startPos5.y)]

            this.npc = new Laya.Animation;
            this.npc.loadAnimation("anima/npc.ani");
            this.npc.pos(this.m_npcPos.x, this.m_npcPos.y);
            this.displayListContainer.addChild(this.npc);
            this.npc.play(0, true, "idle");
            this.npc.scale(2, 2);
            let rect = new Laya.Rectangle(-100, -100, 200, 200);
            this.npc.hitArea = rect;
            this.npc.on(Laya.Event.CLICK, this, this.onClickNpc);

            let npcTip = new Laya.Text();
            npcTip.text = "进入商店";
            npcTip.color = "#ffffff"
            npcTip.fontSize = 20;
            npcTip.x = -npcTip.width >> 1;
            npcTip.y = npcTip.height - 90;
            npcTip.align = "center";
            npcTip.valign = "middle";
            npcTip.autoSize = true;
            this.npc.addChild(npcTip);
            this.updateGold();
            setInterval(() =>
            {
                this.startFlash();
            }, 5000);
            this.startFlash();

            this.m_c_visible_mapyan.selectedIndex = 1;
        }

        private startFlash(): void
        {
            for (var index = 0; index < 3; index++)
            {
                let random: number = Math.random();
                this.timeOutFlash(index);
            }
        }
        private timeOutFlash(index: number): void
        {
            for (var i = 0; i < 3; i++)
            {
                setTimeout(() =>
                {
                    let flash = Main.UI_FlashEffect.createInstance();
                    let gold = this.getChild("gold" + (index + 1));
                    this.m_starContainer.addChild(flash);
                    flash.x = gold.x + gold.width * 0.8 * Math.random();
                    flash.y = gold.y + gold.height * 0.8 * Math.random();
                    let rScale = Math.random() * 0.5 + 0.5;
                    flash.setScale(rScale, rScale)
                    flash.m_t0.play(Handler.create(null, () =>
                    {
                        flash.removeFromParent();
                    }), 1);
                }, Math.random() * 4 * 1000);
            }
        }

        public updateGold(): void
        {
            this.m_coin.text = user.gold + "";
        }

        private onClickNpc(): void
        {
            // this.m_c_show_shop.selectedIndex = 1;
            SoundManager.stopSound(SoundKey.click_npc);
            SoundManager.playSound(SoundKey.click_npc);
            this.shopWindow.show();
        }

        showTip(msg: string)
        {
            let tip: Toast;
            if (this.tips.length > 0)
            {
                tip = this.tips.pop();
            }
            else
            {
                tip = Toast.createInstance();
            }
            fairygui.GRoot.inst.addChild(tip);
            tip.m_msg.text = msg;
            tip.x = fairygui.GRoot.inst.width - tip.width >> 1;
            tip.y = fairygui.GRoot.inst.height - tip.height >> 1;
            tip.alpha = 1;
            Laya.Tween.to(tip, { alpha: 0, y: tip.y - 100 }, 1000, Laya.Ease.quadIn, Handler.create(null, () =>
            {
                tip.removeFromParent();
                this.tips.push(tip);
            }), 1000);
        }

        private get shopWindow(): ShopWindow
        {
            if (this._shopWindow == null)
            {
                this._shopWindow = ShopWindow.createInstance();
                user.root.addChild(this._shopWindow);
                this._shopWindow.setSize(user.root.width, user.root.height);
            }
            return this._shopWindow;
        }


        public static createInstance(): GameWindow
        {
            return <GameWindow><any>(fairygui.UIPackage.createObject("Main", "GameUI"));
        }

        //显示
        public show(): void
        {
            if (this.curCars.length < 5)
            {
                // this.createCar();

                // setTimeout(() =>
                // {
                // this.createCar()
                // this.createCar()
                // this.createCar()
                // }, 6000);
                // }
            }
        }

        //创建一个
        public createCar(index: number): Car
        {
            let car: Car;
            if (this.pools.length > 0)
            {
                car = this.pools.pop();
            }
            else
            {
                car = new Car(index);
                car.setParent(this);
                user.gold += user.shopDatas[index - 1].daily;
                this.updateGold();
                this.m_container.displayListContainer.addChild(car);
                this.curCars.push(car);
                car.initPosList(this.curCars.length);
            }
            return car;
        }
    }
}