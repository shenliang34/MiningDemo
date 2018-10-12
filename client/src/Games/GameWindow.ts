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

    export class GameWindow extends Main.UI_GameUI
    {
        private dirction: number;
        private singleAngle: number = 360.0 / 8;
        private singleHalfAngle: number = 360.0 / 8 / 2;

        private pools: Array<Car>;
        private curCars: Array<Car>;
        private car: Car;
        public constructor() 
        {
            super();

            this.curCars = [];
            this.pools = [];
        }

        public static createInstance(): GameWindow 
        {
            return <GameWindow><any>(fairygui.UIPackage.createObject("Main", "GameUI"));
        }

        //显示
        public show(): void
        {
            // this.m_t0.play(Handler.create(null, () =>
            // {

            // }), -1);
            this.car = this.createCar();
            this.m_container.displayListContainer.addChild(this.car);
            this.car.pos(0, 0);
            Laya.Tween.to(this.car, { x: -500, y: 100 }, 10000, Laya.Ease.quintInOut);
        }

        //创建一个
        private createCar(): Car
        {
            let car: Car;
            if (this.pools.length > 0)
            {
                car = this.pools.pop();
            }
            else
            {
                car = new Car();
            }
            return car;
        }
    }
}