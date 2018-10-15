/**
* name
*/
var Games;
(function (Games) {
    var ShopData = (function () {
        function ShopData() {
            this.isBuyed = false;
            this.price = 10;
            this.daily = 10;
            this.reward = 10;
            this.schedule = 10;
            this.index = 1;
            this.carAnima = "";
            this.scale = 1;
        }
        return ShopData;
    }());
    Games.ShopData = ShopData;
})(Games || (Games = {}));
//# sourceMappingURL=ShopData.js.map