
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0486fOqHrJN+6c5PQg5FHh9', 'Game');
// scripts/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var ScoreFX_1 = require("./ScoreFX");
var Star_1 = require("./Star");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewScript = /** @class */ (function (_super) {
    __extends(NewScript, _super);
    function NewScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 这个属性引用了星星预制资源
        _this.starPrefab = null;
        _this.scoreFXPrefab = null;
        // 星星产生后消失时间的随机范围
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        // 地面节点，用于确定星星生成的高度
        _this.ground = null;
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        /**
         * @type {Player}
         */
        _this.player = null;
        // score label 的引用
        _this.scoreDisplay = null;
        // 得分音效资源
        _this.scoreAudio = null;
        _this.btnNode = null;
        _this.gameOverNode = null;
        _this.controlHintLabel = null;
        _this.keyboardHint = '';
        _this.touchHint = '';
        _this.groundY = 0;
        // private
        _this.currentStar = null;
        _this.currentStarX = 0;
        _this.timer = 0;
        _this.starDuration = 0;
        _this.isPlaying = false;
        _this.starPool = null;
        _this.scorePool = null;
        _this.score = 0;
        return _this;
    }
    // use this for initialization
    NewScript.prototype.onLoad = function () {
        // 获取地平面的 y 轴坐标
        this.groundY = this.ground.y + this.ground.height / 2;
        // store last star's x position
        this.currentStar = null;
        this.currentStarX = 0;
        // 初始化计时器
        this.timer = 0;
        this.starDuration = 0;
        // is showing menu or running game
        this.isPlaying = false;
        // initialize control hint
        var hintText = cc.sys.isMobile ? this.touchHint : this.keyboardHint;
        this.controlHintLabel.string = hintText;
        // initialize star and score pool
        this.starPool = new cc.NodePool('Star');
        this.scorePool = new cc.NodePool('ScoreFX');
    };
    NewScript.prototype.onStartGame = function () {
        // 初始化计分
        this.resetScore();
        // set game state to running
        this.isPlaying = true;
        // set button and gameover text out of screen
        this.btnNode.x = 3000;
        this.gameOverNode.active = false;
        // reset player position and move speed
        this.player.startMoveAt(cc.v2(0, this.groundY));
        // spawn star
        this.spawnNewStar();
    };
    NewScript.prototype.spawnNewStar = function () {
        /**
         * @type {cc.Node}
         */
        var newStar = null;
        // 使用给定的模板在场景中生成一个新节点
        if (this.starPool.size() > 0) {
            newStar = this.starPool.get(this); // this will be passed to Star's reuse method
        }
        else {
            newStar = cc.instantiate(this.starPrefab);
        }
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        // pass Game instance to star
        newStar.getComponent(Star_1.default).init(this);
        // start star timer and store star reference
        this.startTimer();
        this.currentStar = newStar;
    };
    NewScript.prototype.despawnStar = function (star) {
        this.starPool.put(star);
        this.spawnNewStar();
    };
    NewScript.prototype.startTimer = function () {
        // get a life duration for next star
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    };
    NewScript.prototype.getNewStarPosition = function () {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星坐标
        return cc.v2(randX, randY);
    };
    NewScript.prototype.gainScore = function (pos) {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
        // 播放特效
        var fx = this.spawnScoreFX();
        this.node.addChild(fx.node);
        fx.node.setPosition(pos);
        fx.play();
        // 播放得分音效
        cc.audioEngine.play(this.scoreAudio, false, 1);
    };
    NewScript.prototype.resetScore = function () {
        this.score = 0;
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
    };
    NewScript.prototype.spawnScoreFX = function () {
        var fx;
        if (this.scorePool.size() > 0) {
            fx = this.scorePool.get();
            return fx.getComponent(ScoreFX_1.default);
        }
        else {
            fx = cc.instantiate(this.scoreFXPrefab).getComponent(ScoreFX_1.default);
            fx.init(this);
            return fx;
        }
    };
    NewScript.prototype.despawnScoreFX = function (scoreFX) {
        this.scorePool.put(scoreFX);
    };
    // called every frame
    NewScript.prototype.update = function (dt) {
        if (!this.isPlaying)
            return;
        // 每帧更新计时器，超过限度还没有生成新的星星
        // 就会调用游戏失败逻辑
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    };
    NewScript.prototype.gameOver = function () {
        this.gameOverNode.active = true;
        this.player.enabled = false;
        this.player.stopMove();
        this.currentStar.destroy();
        this.isPlaying = false;
        this.btnNode.x = 0;
    };
    __decorate([
        property({
            type: cc.Prefab
        })
    ], NewScript.prototype, "starPrefab", void 0);
    __decorate([
        property({
            type: cc.Prefab
        })
    ], NewScript.prototype, "scoreFXPrefab", void 0);
    __decorate([
        property
    ], NewScript.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], NewScript.prototype, "minStarDuration", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], NewScript.prototype, "ground", void 0);
    __decorate([
        property({
            type: Player_1.default
        })
    ], NewScript.prototype, "player", void 0);
    __decorate([
        property({
            type: cc.Label
        })
    ], NewScript.prototype, "scoreDisplay", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewScript.prototype, "scoreAudio", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], NewScript.prototype, "btnNode", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], NewScript.prototype, "gameOverNode", void 0);
    __decorate([
        property({
            type: cc.Label
        })
    ], NewScript.prototype, "controlHintLabel", void 0);
    __decorate([
        property({
            multiline: true
        })
    ], NewScript.prototype, "keyboardHint", void 0);
    __decorate([
        property({
            multiline: true
        })
    ], NewScript.prototype, "touchHint", void 0);
    NewScript = __decorate([
        ccclass
    ], NewScript);
    return NewScript;
}(cc.Component));
exports.default = NewScript;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIscUNBQWdDO0FBQ2hDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBOQztRQXpORyxnQkFBZ0I7UUFJaEIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFLN0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsaUJBQWlCO1FBRWpCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLG1CQUFtQjtRQUluQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGtDQUFrQztRQUNsQzs7V0FFRztRQUlILFlBQU0sR0FBVyxJQUFJLENBQUM7UUFFdEIsa0JBQWtCO1FBSWxCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLFNBQVM7UUFJVCxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFLaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUt4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUs3QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFLbEMsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFLbEIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixVQUFVO1FBQ1YsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUSxHQUFJLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFB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O0lBS3hCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1NBQ2hCLENBQUM7bURBQzJCO0lBSzdCO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1NBQ2pCLENBQUM7dURBQ2dDO0lBS2xDO1FBSEMsUUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQzttREFDZ0I7SUFLbEI7UUFIQyxRQUFRLENBQUM7WUFDTixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDO2dEQUNhO0lBcEVFLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EwTjdCO0lBQUQsZ0JBQUM7Q0ExTkQsQUEwTkMsQ0ExTnNDLEVBQUUsQ0FBQyxTQUFTLEdBME5sRDtrQkExTm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgU2NvcmVGWCBmcm9tIFwiLi9TY29yZUZYXCI7XHJcbmltcG9ydCBTdGFyIGZyb20gXCIuL1N0YXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3U2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIOi/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItui1hOa6kFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0pXHJcbiAgICBzdGFyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0pXHJcbiAgICBzY29yZUZYUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTdGFyRHVyYXRpb24gPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5TdGFyRHVyYXRpb24gPSAwO1xyXG5cclxuICAgIC8vIOWcsOmdouiKgueCue+8jOeUqOS6juehruWumuaYn+aYn+eUn+aIkOeahOmrmOW6plxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KVxyXG4gICAgZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gcGxheWVyIOiKgueCue+8jOeUqOS6juiOt+WPluS4u+inkuW8uei3s+eahOmrmOW6pu+8jOWSjOaOp+WItuS4u+inkuihjOWKqOW8gOWFs1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7UGxheWVyfVxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFBsYXllclxyXG4gICAgfSlcclxuICAgIHBsYXllcjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBzY29yZSBsYWJlbCDnmoTlvJXnlKhcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgIH0pXHJcbiAgICBzY29yZURpc3BsYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8g5b6X5YiG6Z+z5pWI6LWE5rqQXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgfSlcclxuICAgIHNjb3JlQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgIH0pXHJcbiAgICBidG5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KVxyXG4gICAgZ2FtZU92ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICB9KVxyXG4gICAgY29udHJvbEhpbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgbXVsdGlsaW5lOiB0cnVlXHJcbiAgICB9KVxyXG4gICAga2V5Ym9hcmRIaW50ID0gJyc7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgbXVsdGlsaW5lOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdG91Y2hIaW50ID0gJyc7XHJcblxyXG4gICAgZ3JvdW5kWSA9IDA7XHJcblxyXG4gICAgLy8gcHJpdmF0ZVxyXG4gICAgY3VycmVudFN0YXIgPSBudWxsO1xyXG4gICAgY3VycmVudFN0YXJYID0gMDtcclxuICAgIHRpbWVyID0gMDtcclxuICAgIHN0YXJEdXJhdGlvbiA9IDA7XHJcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgIHN0YXJQb29sID0gIG51bGw7XHJcbiAgICBzY29yZVBvb2wgPSBudWxsO1xyXG4gICAgc2NvcmUgPSAwO1xyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWcsOW5s+mdoueahCB5IOi9tOWdkOagh1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgbGFzdCBzdGFyJ3MgeCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJYID0gMDtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xyXG5cclxuICAgICAgICAvLyBpcyBzaG93aW5nIG1lbnUgb3IgcnVubmluZyBnYW1lXHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBjb250cm9sIGhpbnRcclxuICAgICAgICB2YXIgaGludFRleHQgPSBjYy5zeXMuaXNNb2JpbGUgPyB0aGlzLnRvdWNoSGludCA6IHRoaXMua2V5Ym9hcmRIaW50O1xyXG4gICAgICAgIHRoaXMuY29udHJvbEhpbnRMYWJlbC5zdHJpbmcgPSBoaW50VGV4dDtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBzdGFyIGFuZCBzY29yZSBwb29sXHJcbiAgICAgICAgdGhpcy5zdGFyUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnU3RhcicpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVQb29sID0gbmV3IGNjLk5vZGVQb29sKCdTY29yZUZYJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydEdhbWUgKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxyXG4gICAgICAgIHRoaXMucmVzZXRTY29yZSgpO1xyXG4gICAgICAgIC8vIHNldCBnYW1lIHN0YXRlIHRvIHJ1bm5pbmdcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgLy8gc2V0IGJ1dHRvbiBhbmQgZ2FtZW92ZXIgdGV4dCBvdXQgb2Ygc2NyZWVuXHJcbiAgICAgICAgdGhpcy5idG5Ob2RlLnggPSAzMDAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHJlc2V0IHBsYXllciBwb3NpdGlvbiBhbmQgbW92ZSBzcGVlZFxyXG4gICAgICAgIHRoaXMucGxheWVyLnN0YXJ0TW92ZUF0KGNjLnYyKDAsIHRoaXMuZ3JvdW5kWSkpO1xyXG4gICAgICAgIC8vIHNwYXduIHN0YXJcclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduTmV3U3RhciAoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge2NjLk5vZGV9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBudWxsO1xyXG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgbmV3U3RhciA9IHRoaXMuc3RhclBvb2wuZ2V0KHRoaXMpOyAvLyB0aGlzIHdpbGwgYmUgcGFzc2VkIHRvIFN0YXIncyByZXVzZSBtZXRob2RcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyBwYXNzIEdhbWUgaW5zdGFuY2UgdG8gc3RhclxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KFN0YXIpLmluaXQodGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgc3RhciB0aW1lciBhbmQgc3RvcmUgc3RhciByZWZlcmVuY2VcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyID0gbmV3U3RhcjtcclxuICAgIH1cclxuXHJcbiAgICBkZXNwYXduU3RhciAoc3Rhcikge1xyXG4gICAgICAgIHRoaXMuc3RhclBvb2wucHV0KHN0YXIpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUaW1lciAoKSB7XHJcbiAgICAgICAgLy8gZ2V0IGEgbGlmZSBkdXJhdGlvbiBmb3IgbmV4dCBzdGFyXHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIC8vIOagueaNruWcsOW5s+mdouS9jee9ruWSjOS4u+inkui3s+i3g+mrmOW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYn+eahCB5IOWdkOagh1xyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKyA1MDtcclxuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMiAqIG1heFg7XHJcbiAgICAgICAgLy8g6L+U5Zue5pif5pif5Z2Q5qCHXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FpblNjb3JlIChwb3MpIHtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAgICAgLy8g5pu05pawIHNjb3JlRGlzcGxheSBMYWJlbCDnmoTmloflrZdcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8g5pKt5pS+54m55pWIXHJcbiAgICAgICAgdmFyIGZ4ID0gdGhpcy5zcGF3blNjb3JlRlgoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZngubm9kZSk7XHJcbiAgICAgICAgZngubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIGZ4LnBsYXkoKTtcclxuICAgICAgICAvLyDmkq3mlL7lvpfliIbpn7PmlYhcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2NvcmUgKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGF3blNjb3JlRlggKCkge1xyXG4gICAgICAgIHZhciBmeDtcclxuICAgICAgICBpZiAodGhpcy5zY29yZVBvb2wuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgICAgICBmeCA9IHRoaXMuc2NvcmVQb29sLmdldCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnguZ2V0Q29tcG9uZW50KFNjb3JlRlgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZ4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZUZYUHJlZmFiKS5nZXRDb21wb25lbnQoU2NvcmVGWCk7XHJcbiAgICAgICAgICAgIGZ4LmluaXQodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzcGF3blNjb3JlRlggKHNjb3JlRlgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlUG9vbC5wdXQoc2NvcmVGWCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xyXG4gICAgICAgIC8vIOavj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeacieeUn+aIkOaWsOeahOaYn+aYn1xyXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIgKCkge1xyXG4gICAgICAgdGhpcy5nYW1lT3Zlck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgIHRoaXMucGxheWVyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgIHRoaXMucGxheWVyLnN0b3BNb3ZlKCk7XHJcbiAgICAgICB0aGlzLmN1cnJlbnRTdGFyLmRlc3Ryb3koKTtcclxuICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICB0aGlzLmJ0bk5vZGUueCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIl19