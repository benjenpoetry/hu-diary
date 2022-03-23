
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/ScoreAnim');
require('./assets/scripts/ScoreFX');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1f9e88YHdGr7qD17shtr2w', 'ScoreAnim');
// scripts/ScoreAnim.ts

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
var ccclass = cc._decorator.ccclass;
var NewScript = /** @class */ (function (_super) {
    __extends(NewScript, _super);
    function NewScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreFX = null;
        return _this;
    }
    NewScript.prototype.init = function (scoreFX) {
        this.scoreFX = scoreFX;
    };
    NewScript.prototype.hideFX = function () {
        this.scoreFX.despawn();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBVUM7UUFURyxhQUFPLEdBQUcsSUFBSSxDQUFDOztJQVNuQixDQUFDO0lBUEcsd0JBQUksR0FBSixVQUFNLE9BQU87UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQVRnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVTdCO0lBQUQsZ0JBQUM7Q0FWRCxBQVVDLENBVnNDLEVBQUUsQ0FBQyxTQUFTLEdBVWxEO2tCQVZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzY29yZUZYID0gbnVsbDtcclxuICAgIFxyXG4gICAgaW5pdCAoc2NvcmVGWCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVGWCA9IHNjb3JlRlg7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUZYICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRlguZGVzcGF3bigpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd18c67pr9OM5wJb/yY6Onf', 'ScoreFX');
// scripts/ScoreFX.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewScript = /** @class */ (function (_super) {
    __extends(NewScript, _super);
    function NewScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.game = null;
        return _this;
    }
    NewScript.prototype.init = function (game) {
        this.game = game;
        this.anim.getComponent('ScoreAnim').init(this);
    };
    NewScript.prototype.despawn = function () {
        this.game.despawnScoreFX(this.node);
    };
    NewScript.prototype.play = function () {
        this.anim.play('score_pop');
    };
    __decorate([
        property({
            type: cc.Animation
        })
    ], NewScript.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVGWC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1CQztRQWZHLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFJLEdBQUcsSUFBSSxDQUFDOztJQWNoQixDQUFDO0lBWkcsd0JBQUksR0FBSixVQUFNLElBQUk7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBZEQ7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQzsyQ0FDVTtJQUpLLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FtQjdCO0lBQUQsZ0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQnNDLEVBQUUsQ0FBQyxTQUFTLEdBbUJsRDtrQkFuQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvblxyXG4gICAgfSlcclxuICAgIGFuaW0gPSBudWxsO1xyXG4gICAgZ2FtZSA9IG51bGw7XHJcblxyXG4gICAgaW5pdCAoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5hbmltLmdldENvbXBvbmVudCgnU2NvcmVBbmltJykuaW5pdCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXNwYXduICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuZGVzcGF3blNjb3JlRlgodGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ICgpIHtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgnc2NvcmVfcG9wJyk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c10bbPdGYhDWaLoKLV38bHf', 'Player');
// scripts/Player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewScript = /** @class */ (function (_super) {
    __extends(NewScript, _super);
    function NewScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 主角跳跃高度
        _this.jumpHeight = 0;
        // 主角跳跃持续时间
        _this.jumpDuration = 0;
        // 辅助形变动作时间
        _this.squashDuration = 0;
        // 最大移动速度
        _this.maxMoveSpeed = 0;
        // 加速度
        _this.accel = 0;
        // 跳跃音效资源
        _this.jumpAudio = null;
        // 加速度方向开关
        _this.accLeft = false;
        _this.accRight = false;
        // 主角当前水平方向速度
        _this.xSpeed = 0;
        // screen boundaries
        _this.minPosX = 0;
        _this.maxPosX = 0;
        // 初始化跳跃动作
        _this.jumpAction = null;
        return _this;
    }
    // use this for initialization
    NewScript.prototype.onLoad = function () {
        this.enabled = false;
        // compute screen boundaries
        this.minPosX = -this.node.parent.width / 2;
        this.maxPosX = this.node.parent.width / 2;
        // 初始化跳跃动作
        this.jumpAction = this.runJumpAction();
        // 初始化键盘输入监听
        this.setInputControl();
    };
    NewScript.prototype.setInputControl = function () {
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // touch input
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    };
    NewScript.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this.accLeft = true;
                this.accRight = false;
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.accLeft = false;
                this.accRight = true;
                break;
        }
    };
    NewScript.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
            case cc.macro.KEY.left:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
            case cc.macro.KEY.right:
                this.accRight = false;
                break;
        }
    };
    NewScript.prototype.onTouchBegan = function (event) {
        var touchLoc = event.getLocation();
        if (touchLoc.x >= cc.winSize.width / 2) {
            this.accLeft = false;
            this.accRight = true;
        }
        else {
            this.accLeft = true;
            this.accRight = false;
        }
        // don't capture the event
        return true;
    };
    NewScript.prototype.onTouchEnded = function (event) {
        this.accLeft = false;
        this.accRight = false;
    };
    NewScript.prototype.runJumpAction = function () {
        // 跳跃上升
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        // 下落
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });
        // 形变
        var squash = cc.tween().to(this.squashDuration, { scaleX: 1, scaleY: 0.6 });
        var stretch = cc.tween().to(this.squashDuration, { scaleX: 1, scaleY: 1.2 });
        var scaleBack = cc.tween().to(this.squashDuration, { scaleX: 1, scaleY: 1 });
        // 创建一个缓动
        var tween = cc.tween()
            // 按顺序执行动作
            .sequence(squash, stretch, jumpUp, scaleBack, jumpDown)
            // 添加一个回调函数，在前面的动作都结束时调用我们定义的 playJumpSound() 方法
            .call(this.playJumpSound, this);
        // 不断重复
        return cc.tween().repeatForever(tween);
    };
    NewScript.prototype.playJumpSound = function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewScript.prototype.getCenterPos = function () {
        var centerPos = cc.v2(this.node.x, this.node.y + this.node.height / 2);
        return centerPos;
    };
    NewScript.prototype.startMoveAt = function (pos) {
        this.enabled = true;
        this.xSpeed = 0;
        this.node.setPosition(pos);
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
    };
    NewScript.prototype.stopMove = function () {
        this.node.stopAllActions();
    };
    // called every frame
    NewScript.prototype.update = function (dt) {
        // 根据当前加速度方向每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
        // limit player position inside screen
        if (this.node.x > this.node.parent.width / 2) {
            this.node.x = this.node.parent.width / 2;
            this.xSpeed = 0;
        }
        else if (this.node.x < -this.node.parent.width / 2) {
            this.node.x = -this.node.parent.width / 2;
            this.xSpeed = 0;
        }
    };
    __decorate([
        property
    ], NewScript.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], NewScript.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], NewScript.prototype, "squashDuration", void 0);
    __decorate([
        property
    ], NewScript.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], NewScript.prototype, "accel", void 0);
    __decorate([
        property({
            type: cc.AudioClip
        })
    ], NewScript.prototype, "jumpAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZ0xDO1FBOUtHLFNBQVM7UUFFVCxnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQVc7UUFFWCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixXQUFXO1FBRVgsb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsU0FBUztRQUVULGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU07UUFFTixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsU0FBUztRQUlULGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsVUFBVTtRQUNWLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixhQUFhO1FBQ2IsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLG9CQUFvQjtRQUNwQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFVBQVU7UUFDVixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUE4SXRCLENBQUM7SUE1SUcsOEJBQThCO0lBQzlCLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBRXhDLFVBQVU7UUFDVixJQUFJ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LEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNJLE9BQU87UUFDUCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDN0YsS0FBSztRQUNMLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLEtBQUs7UUFDTCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3RSxTQUFTO1FBQ1QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNOLFVBQVU7YUFDVCxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxN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QUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUEzS0Q7UUFEQyxRQUFRO2lEQUNNO0lBR2Y7UUFEQyxRQUFRO21EQUNRO0lBR2pCO1FBREMsUUFBUTtxREFDVTtJQUduQjtRQURDLFFBQVE7bURBQ1E7SUFHakI7UUFEQyxRQUFROzRDQUNDO0lBS1Y7UUFIQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7U0FDckIsQ0FBQztnREFDZTtJQXJCQSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0w3QjtJQUFELGdCQUFDO0NBaExELEFBZ0xDLENBaExzQyxFQUFFLENBQUMsU0FBUyxHQWdMbEQ7a0JBaExvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBqdW1wSGVpZ2h0ID0gMDtcclxuICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBqdW1wRHVyYXRpb24gPSAwO1xyXG4gICAgLy8g6L6F5Yqp5b2i5Y+Y5Yqo5L2c5pe26Ze0XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNxdWFzaER1cmF0aW9uID0gMDtcclxuICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhNb3ZlU3BlZWQgPSAwO1xyXG4gICAgLy8g5Yqg6YCf5bqmXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFjY2VsID0gMDtcclxuICAgIC8vIOi3s+i3g+mfs+aViOi1hOa6kFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgIH0pXHJcbiAgICBqdW1wQXVkaW8gPSBudWxsO1xyXG5cclxuICAgIC8vIOWKoOmAn+W6puaWueWQkeW8gOWFs1xyXG4gICAgYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgYWNjUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcclxuICAgIHhTcGVlZCA9IDA7XHJcbiAgICAvLyBzY3JlZW4gYm91bmRhcmllc1xyXG4gICAgbWluUG9zWCA9IDA7XHJcbiAgICBtYXhQb3NYID0gMDtcclxuXHJcbiAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcclxuICAgIGp1bXBBY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY29tcHV0ZSBzY3JlZW4gYm91bmRhcmllc1xyXG4gICAgICAgIHRoaXMubWluUG9zWCA9IC10aGlzLm5vZGUucGFyZW50LndpZHRoLzI7XHJcbiAgICAgICAgdGhpcy5tYXhQb3NYID0gdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcclxuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgdGhpcy5zZXRJbnB1dENvbnRyb2woKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dENvbnRyb2wgKCkge1xyXG4gICAgICAgIC8vYWRkIGtleWJvYXJkIGlucHV0IGxpc3RlbmVyIHRvIGp1bXAsIHR1cm5MZWZ0IGFuZCB0dXJuUmlnaHRcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRvdWNoIGlucHV0XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmRlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duIChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwIChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoQmVnYW4gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRvdWNoTG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBpZiAodG91Y2hMb2MueCA+PSBjYy53aW5TaXplLndpZHRoLzIpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZG9uJ3QgY2FwdHVyZSB0aGUgZXZlbnRcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kZWQgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkp1bXBBY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IHRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pO1xyXG4gICAgICAgIC8vIOS4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSk7XHJcbiAgICAgICAgLy8g5b2i5Y+YXHJcbiAgICAgICAgdmFyIHNxdWFzaCA9IGNjLnR3ZWVuKCkudG8odGhpcy5zcXVhc2hEdXJhdGlvbiwgeyBzY2FsZVg6IDEsIHNjYWxlWTogMC42IH0pO1xyXG4gICAgICAgIHZhciBzdHJldGNoID0gY2MudHdlZW4oKS50byh0aGlzLnNxdWFzaER1cmF0aW9uLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxLjIgfSk7XHJcbiAgICAgICAgdmFyIHNjYWxlQmFjayA9IGNjLnR3ZWVuKCkudG8odGhpcy5zcXVhc2hEdXJhdGlvbiwgeyBzY2FsZVg6IDEsIHNjYWxlWTogMSB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq57yT5YqoXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmjInpobrluo/miafooYzliqjkvZxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlcXVlbmNlKHNxdWFzaCwgc3RyZXRjaCwganVtcFVwLCBzY2FsZUJhY2ssIGp1bXBEb3duKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDkuIDkuKrlm57osIPlh73mlbDvvIzlnKjliY3pnaLnmoTliqjkvZzpg73nu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoQgcGxheUp1bXBTb3VuZCgpIOaWueazlVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDkuI3mlq3ph43lpI1cclxuICAgICAgICByZXR1cm4gY2MudHdlZW4oKS5yZXBlYXRGb3JldmVyKHR3ZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kICgpIHtcclxuICAgICAgICAvLyDosIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudGVyUG9zICgpIHtcclxuICAgICAgICB2YXIgY2VudGVyUG9zID0gY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55ICsgdGhpcy5ub2RlLmhlaWdodC8yKTtcclxuICAgICAgICByZXR1cm4gY2VudGVyUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0TW92ZUF0IChwb3MpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcE1vdmUgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIOagueaNruW9k+WJjeWKoOmAn+W6puaWueWQkeavj+W4p+abtOaWsOmAn+W6plxyXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmZkOWItuS4u+inkueahOmAn+W6puS4jeiDvei2hei/h+acgOWkp+WAvFxyXG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHNwZWVkIHJlYWNoIGxpbWl0LCB1c2UgbWF4IHNwZWVkIHdpdGggY3VycmVudCBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgLy8gbGltaXQgcGxheWVyIHBvc2l0aW9uIGluc2lkZSBzY3JlZW5cclxuICAgICAgICBpZiAoIHRoaXMubm9kZS54ID4gdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yO1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5vZGUueCA8IC10aGlzLm5vZGUucGFyZW50LndpZHRoLzIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yO1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21890Xr4RBJlqTJhmXJ/f5s', 'Star');
// scripts/Star.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewScript = /** @class */ (function (_super) {
    __extends(NewScript, _super);
    function NewScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 星星和主角之间的距离小于这个数值时，就会完成收集
        _this.pickRadius = 0;
        // 暂存 Game 对象的引用
        _this.game = null;
        return _this;
    }
    NewScript.prototype.onLoad = function () {
        this.enabled = false;
    };
    // use this for initialization
    NewScript.prototype.init = function (game) {
        this.game = game;
        this.enabled = true;
        this.node.opacity = 255;
    };
    NewScript.prototype.reuse = function (game) {
        this.init(game);
    };
    NewScript.prototype.getPlayerDistance = function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.player.getCenterPos();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    };
    NewScript.prototype.onPicked = function () {
        var pos = this.node.getPosition();
        // 调用 Game 脚本的得分方法
        this.game.gainScore(pos);
        // 当星星被收集时，调用 Game 脚本中的接口，销毁当前星星节点，生成一个新的星星
        this.game.despawnStar(this.node);
    };
    // called every frame
    NewScript.prototype.update = function (dt) {
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
        // 根据 Game 脚本中的计时器更新星星的透明度
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    };
    __decorate([
        property
    ], NewScript.prototype, "pickRadius", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW9EQztRQW5ERywyQkFBMkI7UUFFM0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixnQkFBZ0I7UUFDaEIsVUFBSSxHQUFHLElBQUksQ0FBQzs7SUE4Q2hCLENBQUM7SUE1Q0csMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsd0JBQUksR0FBSixVQUFNLElBQUk7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTyxJQUFJO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQscUNBQWlCLEdBQWpCO1FBQ0kscUJBQXFCO1FBQ3JCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELGlCQUFpQjtRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxxQkFBcUI7SUFDckIsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTix1QkFBdUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzVDLFNBQVM7WUFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTztTQUNWO1FBQ0QsMEJBQTBCO1FBQzFCLElBQUksWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM5RCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQWhERDtRQURDLFFBQVE7aURBQ007SUFIRSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0Q3QjtJQUFELGdCQUFDO0NBcERELEFBb0RDLENBcERzQyxFQUFFLENBQUMsU0FBUyxHQW9EbEQ7a0JBcERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8g5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a75bCP5LqO6L+Z5Liq5pWw5YC85pe277yM5bCx5Lya5a6M5oiQ5pS26ZuGXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBpY2tSYWRpdXMgPSAwO1xyXG4gICAgXHJcbiAgICAvLyDmmoLlrZggR2FtZSDlr7nosaHnmoTlvJXnlKhcclxuICAgIGdhbWUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBpbml0IChnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfVxyXG5cclxuICAgIHJldXNlIChnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllckRpc3RhbmNlICgpIHtcclxuICAgICAgICAvLyDmoLnmja4gcGxheWVyIOiKgueCueS9jee9ruWIpOaWrei3neemu1xyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldENlbnRlclBvcygpO1xyXG4gICAgICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGlja2VkICgpIHtcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8g6LCD55SoIEdhbWUg6ISa5pys55qE5b6X5YiG5pa55rOVXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZShwb3MpO1xyXG4gICAgICAgIC8vIOW9k+aYn+aYn+iiq+aUtumbhuaXtu+8jOiwg+eUqCBHYW1lIOiEmuacrOS4reeahOaOpeWPo++8jOmUgOavgeW9k+WJjeaYn+aYn+iKgueCue+8jOeUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgICAgIHRoaXMuZ2FtZS5kZXNwYXduU3Rhcih0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIOavj+W4p+WIpOaWreWSjOS4u+inkuS5i+mXtOeahOi3neemu+aYr+WQpuWwj+S6juaUtumbhui3neemu1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgLy8g6LCD55So5pS26ZuG6KGM5Li6XHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmoLnmja4gR2FtZSDohJrmnKzkuK3nmoTorqHml7blmajmm7TmlrDmmJ/mmJ/nmoTpgI/mmI7luqZcclxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBtaW5PcGFjaXR5ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
