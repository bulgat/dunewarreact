import { Point } from "./olddune/modelStrategy/Point.js";
import { ModelStrategy } from "./olddune/modelStrategy/ModelStrategy.js";
import { MendMoveShip } from "./olddune/modelStrategy/MendMoveShip.js";
import { BattlePlanetModel } from "./olddune/model/BattlePlanetModel.js";
import { BasicTile } from "./olddune/modelStrategy/BasicTile.js";
import { ViewTerraAnimMove } from "./olddune/view/ViewTerraAnimMove.js";
import { ButtonEvent } from "./olddune/model/ButtonEvent.js";
import { ControllerConstant } from "./olddune/controller/ControllerConstant.js";
import { MapWorldModel } from "./olddune/mapWorld/MapWorldModel.js";
import { GridScenario } from "./olddune/scenario/GridScenario.js";
import { CreateGridScenario } from "./olddune/scenario/CreateGridScenario.js";
import { CreateFleetFast } from "./olddune/modelStrategy/CreateFleetFast.js";
import { ViewTacticBattle } from "./olddune/view/ViewTacticBattle.js";
import { ViewArmUnit } from "./olddune/view/ViewArmUnit.js";
import { View } from "./olddune/view/View.js";
import { ModelParamGame } from "./olddune/model/ModelParamGame";
import { ViewTacticModel } from "./olddune/view/ViewTacticModel";
import { ViewImage } from './olddune/view/ViewImage';
import {ControllerButton} from './olddune/controller/ControllerButton';
import {ControllerTactic} from './olddune/controller/ControllerTactic';
import {ControllerTacticConstant} from './olddune/controller/ControllerTacticConstant';

document.addEventListener('DOMContentLoaded', function () {


});

window._modelParamGame = new ModelParamGame();
window._viewTacticModel = new ViewTacticModel();
window._controllerTactic = new ControllerTactic(EndTacticBattleAttackCallBack);
let ctx = null;
var elementCtx = null;
var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;
var lastFrameTime = 0;

var _unitIconURL = "/imageDune/unitIconLine.png";

var _tileset;
var _tilesetURL = "/imageDune/DuneTile.png";
var _tankUnitURL = "/imageDune/allTank.png";
var _infanteryUnitURL = "/imageDune/infLine.png";
var _explodeUnitURL = "/imageDune/explodeLine.png";
let _tilesetLoaded = false;

window.tileW = 40;
window.tileH = 40;
window.mapW = 20;
window.mapH = 20;
//var mapH = 20;
var _countAnimInfantery = 0;
let _countStepResult = 0;
//shieldLine

var _idSelect = 0;
var GlobalYear = 0;
window._CommandStrategy_ar = [];
var _commStrCurrent = null;
window._idCommand = 0;
let _buttonEvent_ar = [];

window._battlePlanetModel = new BattlePlanetModel();
var _battleTerra = {
	Show: false,
	Time: 0,
	GridFleetVictimId: 0
};


window._countHeroIndex = 0;
let _tileBox_ar;
//set id select hero

let playerCharacter = new Character();

function Character() {
	this.tileFrom = [1, 1];
	this.tileTo = [1, 1];
	this.timeMoved = 0;
	this.dimension = [30, 30];
	this.position = [45, 45];
	this.delayMove = 7700;
	this.SpotX = 0;
	this.SpotY = 0;
	this.sprites = {};
	this.placeAt = function (x, y, PrototypeHeroDemoObj) {
		PrototypeHeroDemoObj.tileFrom = [x, y];
		PrototypeHeroDemoObj.tileTo = [x, y];
		PrototypeHeroDemoObj.SpotX = x;
		PrototypeHeroDemoObj.SpotY = y;
		PrototypeHeroDemoObj.position = [32 / 2 + (x * window.tileW), 32 / 2 + (y * window.tileH)];
	};
	this.moveTrend  = function (PrototypeHeroDemoObj) {
		return [PrototypeHeroDemoObj.tileTo[0] - PrototypeHeroDemoObj.tileFrom[0], PrototypeHeroDemoObj.tileTo[1] - PrototypeHeroDemoObj.tileFrom[1]];
	};
};


window._battlePlanetModel.SetSelectHeroId(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[0].GetId());

window.gameMap = new View().GetGameMap();

window.Grid_ar = [];

new View().FillGrid();

window._ViewImage = new ViewImage();

var LoadImageManager = function() {
	this.unitIconSet=null;
	this.infanteryUnitAnim = null;
	this.tankUnitScreen = null;
	this.explodeUnitAnim = null;
}

//Init
window.onload = function () {
	elementCtx = document.getElementById('game');
	ctx = document.getElementById('game').getContext('2d');


	requestAnimationFrame(drawGame);

	_tileset = new Image();

	_tileset.onerror = function () {
		ctx = null;
		console.error("Failed loading tileset.");
	};
	_tileset.onload = function () {
		_tilesetLoaded = true;
	}

	_tileset.src = _tilesetURL;

	//unitIconURL
	LoadImageManager.unitIconSet = new Image();
	LoadImageManager.unitIconSet.src = _unitIconURL;
	LoadImageManager.unitIconSet.onload = function () {


	}

	window._ViewImage.LoadImage();

	LoadImageManager.tankUnitScreen = new Image();
	LoadImageManager.tankUnitScreen.src = _tankUnitURL;
	LoadImageManager.tankUnitScreen.onerror = function () {
		//alert(_tankUnitURL+" Failed loading tileset.");
		console.error(_tankUnitURL + " Failed loading tileset.");
	};
	LoadImageManager.tankUnitScreen.onload = function () {
		window._viewTacticModel.tankUnitScreen = LoadImageManager.tankUnitScreen;
	};

	//infanteryUnitURL
	LoadImageManager.infanteryUnitAnim = new Image();
	LoadImageManager.infanteryUnitAnim.src = _infanteryUnitURL;
	LoadImageManager.infanteryUnitAnim.onerror = function () {
		//alert(_infanteryUnitURL+" Failed loading tileset.");
		console.error(_infanteryUnitURL + " Failed loading tileset.");
	};
	LoadImageManager.infanteryUnitAnim.onload = function () {
		window._viewTacticModel.infanteryUnitAnim = LoadImageManager.infanteryUnitAnim;
	};


	//explodeUnitURL
	LoadImageManager.explodeUnitAnim = new Image();
	LoadImageManager.explodeUnitAnim.src = _explodeUnitURL;
	LoadImageManager.explodeUnitAnim.onerror = function () {
		//alert(_explodeUnitURL+" Failed loading tileset.");
		console.error(_explodeUnitURL + " Failed loading tileset.");
	};
	LoadImageManager.explodeUnitAnim.onload = function () {
		window._viewTacticModel.explodeUnitAnim = LoadImageManager.explodeUnitAnim;
	};

	var heroSel = window._battlePlanetModel.GetSelectHeroId();

	_buttonEvent_ar = new View().InitPathButtonEventArray()

	// mouse
	elementCtx.addEventListener('mousedown', e => {
		let mouseX = e.offsetX;
		let mouseY = e.offsetY;

		for (var i = 0; i < _tileBox_ar.length; i++) {
			if (_tileBox_ar[i].X < mouseX && _tileBox_ar[i].X + _tileBox_ar[i].Width > mouseX) {

				if (_tileBox_ar[i].Y < mouseY && _tileBox_ar[i].Y + _tileBox_ar[i].Height > mouseY) {
					// x mouse correct _tileBox_ar[i].SpotX
					// y mouse correct _tileBox_ar[i].SpotY
					let indexEventPath = new View().GetPathIndex(_buttonEvent_ar, _tileBox_ar[i].SpotX, _tileBox_ar[i].SpotY);



					if (indexEventPath != null) {

						var butEventOne = _buttonEvent_ar[indexEventPath];



						if (butEventOne.NameEvent == "AttackHero") {
							MouseDownAttackSemiTarget(butEventOne);


							//break;
						}

						SetPathMouseClickMapView();

						//move unit

						var idHero = window._battlePlanetModel.GetSelectHeroId();



						var gridFleet = null;

						for (let y = 0; y < window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++) {
							if (window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].Id == idHero) {
								gridFleet = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y];
							}
						}




						var mendMoveShip = new MendMoveShip();
						var CommandMove = mendMoveShip.GetCommandMoveFleet(null, new Point(_tileBox_ar[i].SpotX, _tileBox_ar[i].SpotY), gridFleet);



						// click map - true
						var CommandMove = mendMoveShip.GetCommandMoveFleet(null, _buttonEvent_ar[indexEventPath].Point, gridFleet);

						window._CommandStrategy_ar.push(CommandMove);

						SetPathMouseClickMapView();


						break;
					} else {
						
						//island
						let island_ar = window._battlePlanetModel._mapWorldModel._islandDemoMemento.GetIslandArray();
						for(let island of island_ar)
						{
							
							if (island.SpotX ===_tileBox_ar[i].SpotX && island.SpotY ===_tileBox_ar[i].SpotY) 
							{
								
								//this.ClickTownCard();
								window.ClickTownCard(island.Name,island.Id);
							}
						}
						// select unit Player
						for (let z = 0; z < window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; z++) {
							if (window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[z].SpotX == _tileBox_ar[i].SpotX &&
							window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[z].SpotY == _tileBox_ar[i].SpotY
							) {
								let gridFleetMouseClick = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[z];
								if(window._battlePlanetModel.FlagIdHero===gridFleetMouseClick.FlagId){
									
									//console.log( window._battlePlanetModel.FlagIdHero,"  isl = " ,gridFleetMouseClick.FlagId	)
								
									let modelEvent = new ButtonEvent();
									modelEvent.IdHero = gridFleetMouseClick.GetId();

									new ControllerButton().EventCall(new ControllerConstant().SelectHeroWithId, new ControllerConstant().SelectHeroWithId,modelEvent);
									_buttonEvent_ar = new View().RefreshPathButtonEvent();
								}
								
								
							}
						}
					}
					
				}

			}
		}
	});
	// create map
	_tileBox_ar = new View().CreateMap();
};


function MouseDownAttackSemiTarget(ButEventOne) {

	let CommandAttack = window._battlePlanetModel._mapWorldModel.CommandAttackFleet(ButEventOne.HeroFleet, ButEventOne.VictimFleet, ButEventOne.LongRange);

	window._CommandStrategy_ar.push(CommandAttack);

	//window._battlePlanetModel._mapWorldModel.GotoCreateTactic(window._battlePlanetModel.GetSelectHeroId(), ButEventOne.VictimFleet.GetId(), false, ButEventOne.LongRange, GlobalYear);
	let buttonEvent = new ButtonEvent();
	buttonEvent.IdHero = window._battlePlanetModel.GetSelectHeroId();
	buttonEvent.VictimFleetId = ButEventOne.VictimFleet.GetId();
	buttonEvent.MoveAI = false;
	buttonEvent.LongRange = ButEventOne.LongRange;
	buttonEvent.GlobalYear = GlobalYear;
	

	new ControllerButton().EventCall(new ControllerConstant().GotoCreateTactic, new ControllerConstant().GotoCreateTactic,buttonEvent);

	InitTacticBattleAttack();

	_countStepResult = 0;
}
function InitTacticBattleAttack() {

	window._controllerTactic.GetTacticModel();
	
	window._viewTacticModel.VIEW_TACTIC_BATTLE = new ViewTacticBattle(window._controllerTactic.GetTacticModel().heroPlayer, window._controllerTactic.GetTacticModel().heroFiend);
	
}

function EndTacticBattleAttackCallBack() {
	console.log("6660012 fl    EndTacticBattleAttack")
	_buttonEvent_ar = new View().PathButtonEvent(1, []);
}

function InitTacticBattleAttackFiendAI(CommStrCurrent) {

	window._viewTacticModel.VIEW_TACTIC_BATTLE = new ViewTacticBattle(CommStrCurrent.GridFleetVictim
		, CommStrCurrent.GetGridFleet());
}

function SetPathMouseClickMapView() {

	_buttonEvent_ar = new View().PathButtonEvent(1, []);
	

}

function drawGame() {


	ctx.clearRect(0, 0, window.tileW * window.mapW, window.tileH * new View().mapH);

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;

	var sec = Math.floor(Date.now() / 1000);

	if (sec != currentSecond) {
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else {
		frameCount++;
	}

	//map
	new View().DrawMapTileBackground(ctx, _tileBox_ar, _tileset);

	//map path
	new View().DrawMapTilePachground(ctx, _tileBox_ar, _tileset, _buttonEvent_ar);

	let indexNameFleet = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleetIndex(_idSelect);


	// draw island
	new View().DrawIsland(ctx, _tileBox_ar, _tileset);
	// Draw All static.
	new View().DrawMapUnitGround(ctx, indexNameFleet, new View()._unitTypes, LoadImageManager.unitIconSet, window._ViewImage._screenList);

	new View().DrawPrintFPS(ctx,framesLastSecond)
	//draw move fleet



	if (currentFrameTime < playerCharacter.timeMoved + 700) {
		if (window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0] != window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileToPosition[0] &&
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1] != window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileToPosition[1]) {
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0] += playerCharacter.moveTrend(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet])[0];
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1] += playerCharacter.moveTrend(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet])[1];

		} else {


		}

	}
	else {

		
		playerCharacter.placeAt(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileTo[0],
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileTo[1],
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet]);

		window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].move = true;


	}
	var unitType = new View()._unitTypes[window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].type];

	//draw move unit
	new View().drawMapMoveUnitGround(ctx, LoadImageManager.unitIconSet, unitType, indexNameFleet, window._ViewImage._screenList);

	new View().DrawTextCountUnit(ctx,indexNameFleet);


	lastFrameTime = currentFrameTime;

	requestAnimationFrame(drawGame);

	CommandStrManagerScene(indexNameFleet,currentFrameTime);

	if (_battleTerra.Show == true) {



		_countStepResult = new View().ShowTacticBattle(ctx, currentFrameTime,
			_battleTerra,
			_countStepResult,
			_countAnimInfantery,
			window._ViewImage._screenList, ResetCommStrCurrent);

	}
	
};
let ResetCommStrCurrent = function () {
	_commStrCurrent = null;
}

function CommandStrManagerScene(indexNameFleet,currentFrameTime){
	if (window._CommandStrategy_ar != null && window._CommandStrategy_ar.length > 0) {

		if (playerCharacter.timeMoved == 0 || window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].move == true) {

			var indexNameHero = 0;
			for (var i = 0; i < window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; i++) {

				let commandStrategy = new View().GetGridFleetCommandStrategy(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].Id);


				if (commandStrategy) {
					_idSelect = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].Id;

					_commStrCurrent = commandStrategy;

					if (_commStrCurrent.NameCommand == "AttackFleet") {

						InitTacticBattleAttackFiendAI(_commStrCurrent)
					}

					break;
				} else {

				}
				
		
			}



			playerCharacter.timeMoved = currentFrameTime;
			indexNameHero = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleetIndex(_idSelect);



			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileTo = [_commStrCurrent.GridFleetNewPoint.X, _commStrCurrent.GridFleetNewPoint.Y];

			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileToPosition = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileTo;



			if (_commStrCurrent.NameCommand == "AttackFleet") {
				//AttackFleet
				//Attack
				_battleTerra.Time = currentFrameTime;
				_battleTerra.GridFleetVictimId = _commStrCurrent.GridFleetVictim.Id;
				_battleTerra.Show = true;
				_battleTerra.GridFleetOldPoint = _commStrCurrent.GridFleetOldPoint;

				

			}
			if (_commStrCurrent.NameCommand == "MoveFleet") {


			}
			//register command
			var viewTerraAnimMove = new ViewTerraAnimMove();
			viewTerraAnimMove.AnimationCommand(null,//bBattlePlanetView,
				null,//StageWidthX,
				null,//Tick,
				window._CommandStrategy_ar[0] //commandStrategy
			);

			if (window._CommandStrategy_ar[0].NameCommand == "MoveFleet") {

				var heroFleet = window._CommandStrategy_ar[0].GetGridFleet();
				//heroFleet.SetPowerReserve();
				heroFleet.SetNullPowerReserve();
			}

			new View().RemoveCommandSteck();
			ResetCommStrCurrent();


			SetPathMouseClickMapView();

		}
	} else {
		_commStrCurrent = null;
	}
	
}



function TurnEvent() {

	TurnPush();

	RefreshHeroPower();

	window._mapWorldModel.Development(window.Grid_ar, window._mapWorldModel._prototypeHeroDemo.GetHeroFleet());
}
function TurnPush() {
	GlobalYear += 1;
};
function RefreshHeroPower() {
	//RefreshHeroPower

	new ControllerButton().EventCall(new ControllerConstant().RefreshHeroPower, new ControllerConstant().RefreshHeroPower,null);
};

export default class GlobalDune {


	onTurn() {

		RefreshHeroPower();
		TurnPush();
		_idSelect = 0;


	}

	TestClick() {

		

		window._CommandStrategy_ar = window._battlePlanetModel._mapWorldModel.Development(window.Grid_ar, window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet());

		RefreshHeroPower();
		TurnPush();
		for (var y = 0; y < window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++) {
			console.log("0100   Global countAnimIn FiendUnit.  power = ",window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetPowerReserve()," id",window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetId() ) ;
		}
	};
	SelectHeroLeft() {

		_buttonEvent_ar = new View().ButtonSelectHeroLeft();


	};
	SelectHeroRight() {
		_buttonEvent_ar = new View().ButtonSelectHeroRight();

	};

}




