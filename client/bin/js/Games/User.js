var Games;
(function (Games) {
    var User = (function () {
        function User() {
        }
        // 绑定自定义
        User.bindUserAll = function () {
            fairygui.UIObjectFactory.setPackageItemExtension(Main.UI_GameUI.URL, Games.GameWindow);
        };
        return User;
    }());
    Games.User = User;
})(Games || (Games = {}));
//# sourceMappingURL=User.js.map