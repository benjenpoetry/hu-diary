"use strict";
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