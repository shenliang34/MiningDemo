/**
* name
*/
var Games;
(function (Games) {
    var ShopData = (function () {
        function ShopData(index, price, daily, schedule, scale, total) {
            this.isBuyed = false;
            this.price = 10; //价格
            this.daily = 10; //日产
            this.total = 10; //总量
            this.schedule = 10; //周期
            this.index = 1;
            this.scale = 1;
            this.index = index;
            this.price = price;
            this.scale = scale;
            this.schedule = schedule;
            this.daily = daily;
            this.total = total;
        }
        return ShopData;
    }());
    Games.ShopData = ShopData;
})(Games || (Games = {}));
//# sourceMappingURL=ShopData.js.map