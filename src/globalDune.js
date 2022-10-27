import {Point} from "./olddune/modelStrategy/Point.js";

import {ModelStrategy} from "./olddune/modelStrategy/ModelStrategy.js";

import {MendMoveShip} from "./olddune/modelStrategy/MendMoveShip.js";

import {BattlePlanetModel} from "./olddune/model/BattlePlanetModel.js";

import {BasicTile} from "./olddune/modelStrategy/BasicTile.js";

import {ViewTerraAnimMove} from "./olddune/view/ViewTerraAnimMove.js";

import {ButtonEvent} from "./olddune/model/ButtonEvent.js";

import {ControllerConstant} from "./olddune/controller/ControllerConstant.js";

import {MapWorldModel} from "./olddune/mapWorld/MapWorldModel.js";

import {GridScenario} from "./olddune/scenario/GridScenario.js";


import {CreateGridScenario} from "./olddune/scenario/CreateGridScenario.js";

import {CreateFleetFast} from "./olddune/modelStrategy/CreateFleetFast.js";

import {ViewTacticBattle} from "./olddune/view/ViewTacticBattle.js";
import {ViewArmUnit} from "./olddune/view/ViewArmUnit.js";

import {View} from "./olddune/view/View.js";
import {ModelParamGame} from "./olddune/model/ModelParamGame";
import {ViewTacticModel} from "./olddune/view/ViewTacticModel";
import {ViewImage} from './olddune/view/ViewImage'
//ModelParamGame
//ViewTacticModel
document.addEventListener('DOMContentLoaded', function(){ 
    console.log( "Global  ready!" );
	
});

window._modelParamGame = new ModelParamGame();
window._viewTacticModel = new ViewTacticModel();
let ctx=null;
var elementCtx=null;
var currentSecond=0;
var frameCount=0;
var framesLastSecond=0;
var lastFrameTime=0;

var _unitIconURL ="/imageDune/unitIconLine.png";
//var unitIconLoaded = false;
var _tileset;
var _tilesetURL = "/imageDune/DuneTile.png";
var _tankUnitURL = "/imageDune/allTank.png";
var _infanteryUnitURL = "/imageDune/infLine.png";
var _explodeUnitURL = "/imageDune/explodeLine.png";
let _tilesetLoaded = false;

window.tileW = 40;
window.tileH = 40;
window.mapW=20;
window.mapH=20;
var mapH=20;
//var WIDTH_FON = 800;
//shieldLine

var _idSelect =0;
var GlobalYear =0;
window._CommandStrategy_ar=[];
var _commStrCurrent=null;
window._idCommand =0;
let _buttonEvent_ar=[];

window._battlePlanetModel= new BattlePlanetModel();
var _battleTerra = {
	Show : false,
	Time:0,
	GridFleetVictimId:0
};
new CreateGridScenario().AddCountry();

window._tileTypes = {
0:{colour:"#685b48", sprite:[{x:0,y:0,w:16,h:16}]},
1:{colour:"#5aa457", sprite:[{x:16,y:0,w:16,h:16}]},
2:{colour:"#e8bd7a", sprite:[{x:32,y:0,w:16,h:16}]},
3:{colour:"#286625", sprite:[{x:48,y:0,w:16,h:16}]},
4:{colour:"#678fd9", sprite:[{x:64,y:0,w:16,w:16,h:16}]},
5:{colour:"#678fd9", sprite:[{x:256,y:48,w:16,w:16,h:16}]},
6:{colour:"#678fd9", sprite:[{x:16*39,y:16*2,w:16,w:16,h:16}]},
7:{colour:"#678fd9", sprite:[{x:16*35,y:16*4,w:16,w:16,h:16}]},
8:{colour:"#678fd9", sprite:[{x:16*40,y:16*2,w:16,w:16,h:16}]},
9:{colour:"#678fd9", sprite:[{x:16*43,y:16*9,w:16,w:16,h:16}]},
10:{colour:"move", sprite:[{x:16*42,y:16*9,w:16,w:16,h:16}]},
11:{colour:"attack", sprite:[{x:16*41,y:16*9,w:16,w:16,h:16}]}
};
var _unitTypes = {
0:{colour:"#685b48", sprite:[{x:0,y:0,w:32,h:32}]},
1:{colour:"#685b48", sprite:[{x:32,y:0,w:32,h:32}]},
2:{colour:"#685b48", sprite:[{x:64,y:0,w:32,h:32}]},
3:{colour:"#685b48", sprite:[{x:96,y:0,w:32,h:32}]},
4:{colour:"#685b48", sprite:[{x:128,y:0,w:32,h:32}]},
5:{colour:"#685b48", sprite:[{x:160,y:0,w:32,h:32}]},
6:{colour:"#685b48", sprite:[{x:192,y:0,w:32,h:32}]}
};

window._mapWorldModel = new MapWorldModel();
window._countHeroIndex=0;
var _tileBox_ar;
//set id select hero

//_battlePlanetModel.SetSelectHeroId(1);

var _gridScenario = new GridScenario();
_gridScenario.Init();



var player = new Character();




function Character() {
	this.tileFrom =[1,1];
	this.tileTo =[1,1];
	this.timeMoved =0;
	this.dimension = [30,30];
	this.position =[45,45];
	this.delayMove =7700;
	//this.direction;
	this.SpotX = 0;
	this.SpotY = 0;
	this.sprites = {};
};

//GridScenario
new CreateFleetFast().HeroFleetAdd(1, 5, 0,window._battlePlanetModel.FlagIdHero);
new CreateFleetFast().HeroFleetAdd(9, 4, 2,window._battlePlanetModel.FlagIdHero);
new CreateFleetFast().HeroFleetAdd(4, 6, 1,window._battlePlanetModel.FlagIdHero);
new CreateFleetFast().HeroFleetAdd(8, 8, 0,window._battlePlanetModel.FlagIdHero);
new CreateFleetFast().HeroFleetAdd(4, 2, 3,1);

new CreateFleetFast().HeroFleetAdd(5, 2, 2,1);
new CreateFleetFast().HeroFleetAdd(2, 1, 2,1);
new CreateFleetFast().HeroFleetAdd(2, 4, 3,1);
new CreateFleetFast().HeroFleetAdd(1, 3, 4,1);
new CreateFleetFast().HeroFleetAdd(9, 1, 3,1);

new CreateFleetFast().HeroFleetAdd(1, 0, 3,1);
new CreateFleetFast().HeroFleetAdd(0, 1, 5,1);
new CreateFleetFast().HeroFleetAdd(3, 5, 2,1);
new CreateFleetFast().HeroFleetAdd(7, 11, 4,1);
new CreateFleetFast().HeroFleetAdd(11, 11, 4,1);
new CreateFleetFast().HeroFleetAdd(3, 7, 1,0);

window._battlePlanetModel.SetSelectHeroId(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[0].GetId());



window.gameMap= new View().GetGameMap();

window.Grid_ar=[];

FillGrid();
function FillGrid() {
	for(var x=0; x<window.mapW; x++){
		for(var y=0; y<mapH; y++){
			var basicTile = new BasicTile();
			window.Grid_ar[window.Grid_ar.length] = basicTile.Grid(x,y);

		}
	}
}

window._ViewImage = new ViewImage();

let unitIconSet;
//let _screenList;
let infanteryUnitAnim;
let tankUnitScreen;
let explodeUnitAnim;
//Init
window.onload = function()
{
	elementCtx = document.getElementById('game');
	ctx=document.getElementById('game').getContext('2d');

	
	requestAnimationFrame(drawGame);

	_tileset = new Image();

	_tileset.onerror = function() {
		ctx = null;
		console.error("Failed loading tileset.");
	};
	_tileset.onload = function() {
		_tilesetLoaded = true;
	 }
	
	_tileset.src = _tilesetURL;

	//unitIconURL
	unitIconSet = new Image();
	unitIconSet.src = _unitIconURL;
	unitIconSet.onload = function() 
	{		


	  }

	  window._ViewImage.LoadImage();
/*
	_screenList=[];
	for(var i=0;i<_attackScreenURL.length;i++){
		_screenList[i] = new Image();
		_screenList[i].src = _attackScreenURL[i];
		_screenList[i].onerror = function() {
			//alert(attackScreenURL[i]+" Failed loading tileset.");
			console.error(i+"  == "+_attackScreenURL[i]+" Failed loading tileset.");
		};
		_screenList[i].onload = function() { };
	}
*/
	tankUnitScreen = new Image();
	tankUnitScreen.src = _tankUnitURL;
	tankUnitScreen.onerror = function() {
		//alert(_tankUnitURL+" Failed loading tileset.");
		console.error(_tankUnitURL+" Failed loading tileset.");
	};
	tankUnitScreen.onload = function() { 
		window._viewTacticModel.tankUnitScreen = tankUnitScreen;
	};

	//infanteryUnitURL
	infanteryUnitAnim = new Image();
	infanteryUnitAnim.src = _infanteryUnitURL;
	infanteryUnitAnim.onerror = function() {
		//alert(_infanteryUnitURL+" Failed loading tileset.");
		console.error(_infanteryUnitURL+" Failed loading tileset.");
	};
	infanteryUnitAnim.onload = function() { 
		window._viewTacticModel.infanteryUnitAnim = infanteryUnitAnim;
	};


	//explodeUnitURL
	explodeUnitAnim = new Image();
	explodeUnitAnim.src = _explodeUnitURL;
	explodeUnitAnim.onerror = function() {
		//alert(_explodeUnitURL+" Failed loading tileset.");
		console.error(_explodeUnitURL+" Failed loading tileset.");
	};
	explodeUnitAnim.onload = function() { 
		window._viewTacticModel.explodeUnitAnim = explodeUnitAnim;
	};

	var heroSel = window._battlePlanetModel.GetSelectHeroId();

	_buttonEvent_ar =new View().InitPathButtonEventArray()

	// mouse
	elementCtx.addEventListener('mousedown', e => {
	  var mouseX = e.offsetX;
	  var mouseY = e.offsetY;

		for(var i=0; i<_tileBox_ar.length; i++){
			if (_tileBox_ar[i].X<mouseX && _tileBox_ar[i].X+_tileBox_ar[i].Width>mouseX){

				if (_tileBox_ar[i].Y<mouseY && _tileBox_ar[i].Y+_tileBox_ar[i].Height>mouseY){
					// x mouse correct _tileBox_ar[i].SpotX
					// y mouse correct _tileBox_ar[i].SpotY
					var indexEventPath = new View().GetPathIndex(_buttonEvent_ar,_tileBox_ar[i].SpotX,_tileBox_ar[i].SpotY);



					if (indexEventPath!=null)
					{

						var butEventOne = _buttonEvent_ar[indexEventPath];



					if(butEventOne.NameEvent=="AttackHero"){
						MouseDownAttackSemiTarget(butEventOne);


						//break;
					}

						SetPathMouseClickMapView();

						//move unit

							var idHero = window._battlePlanetModel.GetSelectHeroId();



							var gridFleet = null;

							for(var y=0; y<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){
								if (window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].Id==idHero)
								{
									gridFleet = window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y];
								}
							}




							var mendMoveShip = new MendMoveShip();
							var CommandMove = mendMoveShip.GetCommandMoveFleet(null, new Point(_tileBox_ar[i].SpotX,_tileBox_ar[i].SpotY),gridFleet);



							// click map - true
							var CommandMove = mendMoveShip.GetCommandMoveFleet(null, _buttonEvent_ar[indexEventPath].Point,gridFleet);

							window._CommandStrategy_ar.push(CommandMove);

							SetPathMouseClickMapView();


						break;
					}
				}

			}
		}
	});
	// create map
	_tileBox_ar = new View().CreateMap ();
};

let _countStepResult=0;
function MouseDownAttackSemiTarget(ButEventOne)
{

		let CommandAttack = window._mapWorldModel.CommandAttackFleet(ButEventOne.HeroFleet, ButEventOne.VictimFleet, ButEventOne.LongRange);

		window._CommandStrategy_ar.push(CommandAttack);

	window._mapWorldModel.GotoCreateTactic(window._battlePlanetModel.GetSelectHeroId(),ButEventOne.VictimFleet.GetId(),false,ButEventOne.LongRange,GlobalYear);

	InitTacticBattleAttack();
	//_viewTacticBattle = new ViewTacticBattle(window._mapWorldModel._tactic.heroPlayer,window._mapWorldModel._tactic.heroFiend);
	_countStepResult=0;
}
function InitTacticBattleAttack(){
	 
	 
	window._viewTacticModel.VIEW_TACTIC_BATTLE = new ViewTacticBattle(window._mapWorldModel._tactic.heroPlayer,window._mapWorldModel._tactic.heroFiend);
}
function InitTacticBattleAttackFiendAI(CommStrCurrent){
	//FlagId

	window._viewTacticModel.VIEW_TACTIC_BATTLE = new ViewTacticBattle(CommStrCurrent.GridFleetVictim
		,CommStrCurrent.GetGridFleet()		);
}

function SetPathMouseClickMapView() {

	_buttonEvent_ar = new View().PathButtonEvent(1,[]);

}

function drawGame(){
	

	ctx.clearRect(0, 0, window.tileW*window.mapW, window.tileH*mapH);

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime-lastFrameTime;

	var sec = Math.floor(Date.now()/1000);

	if(sec!=currentSecond){
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount =1;
	}
	else
	{
		frameCount++;
	}

	//map
	new View().DrawMapTileBackground(ctx,_tileBox_ar,_tileset);

	//map path
	new View().DrawMapTilePachground(ctx,_tileBox_ar,_tileset,_buttonEvent_ar);

	var indexNameFleet = window._mapWorldModel._prototypeHeroDemo.GetHeroFleetIndex(_idSelect);
	
	// Draw All static.
	new View().DrawMapUnitGround(ctx,indexNameFleet,_unitTypes,unitIconSet, window._ViewImage._screenList);

	ctx.fillText('FPS = '+framesLastSecond,10,20);
	//draw move fleet



	if(currentFrameTime<player.timeMoved+700)
	{
		if (window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0]!=window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileToPosition[0] && window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1]!=window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileToPosition[1])
		{
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0] +=player.moveTrend(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet])[0];
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1] +=player.moveTrend(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet])[1];

		} else {


		}

	}
	else
	{


		player.placeAt(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileTo[0],window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].tileTo[1],window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet]);
		window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].move = true;


	}
	var unitType = _unitTypes[window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].type];

	//draw move unit
	new View().drawMapMoveUnitGround(ctx,unitIconSet,unitType,indexNameFleet, window._ViewImage._screenList);

	ctx.fillText('  '+window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].GetCountUnitArm(),
	window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0]+window.tileW/2-10,
	window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1]+window.tileH);


	lastFrameTime = currentFrameTime;

	requestAnimationFrame(drawGame);

	if (window._CommandStrategy_ar!=null && window._CommandStrategy_ar.length>0)
	{

		if(player.timeMoved==0 || window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].move==true)
		{

				var indexNameHero =0;
				for(var i=0;i<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length;i++){

					let commandStrategy = new View().GetGridFleetCommandStrategy(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].Id);


					if (commandStrategy){
						_idSelect = window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].Id;

						_commStrCurrent = commandStrategy;

						if (_commStrCurrent.NameCommand=="AttackFleet")
						{
							
							InitTacticBattleAttackFiendAI(_commStrCurrent)
						}

						break;
					} else {
						//console.log(  window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].Id+" ^^ ^^^^^^^"+window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i].GetId()+"^^^^^^  i = "+i);
					}
					//console.log( " PrintAllFleetId = "+window._mapWorldModel._prototypeHeroDemo.PrintAllFleetId()+" ^^ ^^^^^^^^^^^^^^^^^^  x= "+i+"     commandStrategy = "+commandStrategy);
					//if (commandStrategy==null){
						//return;
					//}
				}



					player.timeMoved = currentFrameTime;
					indexNameHero = window._mapWorldModel._prototypeHeroDemo.GetHeroFleetIndex(_idSelect);

				

					window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileTo =[_commStrCurrent.GridFleetNewPoint.X,_commStrCurrent.GridFleetNewPoint.Y];

					window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileToPosition =window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].tileTo;



				if (_commStrCurrent.NameCommand=="AttackFleet")
				{
					//AttackFleet
					//Attack
					_battleTerra.Time =currentFrameTime;
					_battleTerra.GridFleetVictimId = _commStrCurrent.GridFleetVictim.Id;
					_battleTerra.Show = true;
					_battleTerra.GridFleetOldPoint =_commStrCurrent.GridFleetOldPoint;
					
					console.log("3310   fiend = ",_commStrCurrent)
				}
				if (_commStrCurrent.NameCommand=="MoveFleet")
				{


				}
				//register command
				var viewTerraAnimMove = new ViewTerraAnimMove();
				viewTerraAnimMove.AnimationCommand(null,//bBattlePlanetView,
        null,//StageWidthX,
		null,//Tick,
		window._CommandStrategy_ar[0] //commandStrategy
			);

			if (window._CommandStrategy_ar[0].NameCommand=="MoveFleet"){

				var heroFleet = window._CommandStrategy_ar[0].GetGridFleet();
				//heroFleet.SetPowerReserve();
				heroFleet.SetNullPowerReserve();
			}

				new View().RemoveCommandSteck();
				ResetCommStrCurrent();
				
				//var ttt =_mapWorldModel._prototypeHeroDemo.GetHeroFleet()[1];

					if (window._CommandStrategy_ar.length>0){
						if (window._CommandStrategy_ar[0].NameCommand=="MoveFleet"){
							// set select attack fiend hero.
							//SetSelectAttackFiendHero();

						}

					}
					SetPathMouseClickMapView();

		}
	 } else {
		_commStrCurrent = null;
	 }
	 if (_battleTerra.Show==true){



		_countStepResult = new View().ShowTacticBattle(ctx,currentFrameTime,
			_battleTerra,
			_countStepResult,
			_countAnimInfantery,
			 window._ViewImage._screenList,ResetCommStrCurrent);
		
	}
};
let ResetCommStrCurrent = function(){
	_commStrCurrent = null;
}

var _countAnimInfantery=0;

Character.prototype.placeAt = function(x,y,PrototypeHeroDemoObj) {
	PrototypeHeroDemoObj.tileFrom =[x,y];
	PrototypeHeroDemoObj.tileTo =[x,y];
	PrototypeHeroDemoObj.SpotX = x;
	PrototypeHeroDemoObj.SpotY = y;
	PrototypeHeroDemoObj.position =[32/2+(x*window.tileW),32/2+(y*window.tileH)];

};

Character.prototype.moveTrend = function(PrototypeHeroDemoObj) {
	return [PrototypeHeroDemoObj.tileTo[0]-PrototypeHeroDemoObj.tileFrom[0],PrototypeHeroDemoObj.tileTo[1]-PrototypeHeroDemoObj.tileFrom[1]];
};


function TurnEvent() {

			TurnPush();

			RefreshHeroPower();
			//var ModelStrategy = new ModelStrategy();
			//ModelStrategy.Development(Grid_ar,_mapWorldModel._prototypeHeroDemo.GetHeroFleet());

			window._mapWorldModel.Development(window.Grid_ar,window._mapWorldModel._prototypeHeroDemo.GetHeroFleet());
}
function TurnPush(){
	GlobalYear+=1;
};
function RefreshHeroPower() {
	for(var y=0; y<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){
		window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].move=false;
	}
};

export default class GlobalDune{


	onTurn() {

		RefreshHeroPower();
		TurnPush();
		_idSelect =0;
	
	
	}

	TestClick() {
	
		RefreshHeroPower();
			var modelStrategy = new ModelStrategy();
		//_CommandStrategy_ar = modelStrategy.Development(Grid_ar,_mapWorldModel._prototypeHeroDemo.GetHeroFleet());
		window._CommandStrategy_ar = window._mapWorldModel.Development(window.Grid_ar,window._mapWorldModel._prototypeHeroDemo.GetHeroFleet());

		console.log("88900000  wa   TestClick  CreateMap_ar = ",window._CommandStrategy_ar );
		//var wayGotoModel = new WayGotoModel(3, 4);

		
		//for (var i=0;i<window._CommandStrategy_ar.length;i++){
			//console.log(i+"   TOTAL  "+window._CommandStrategy_ar[i].GridFleetNewPoint.X+"  $$$$$$$   = "+window._CommandStrategy_ar[i].NameCommand );
		//}
		

	};
	SelectHeroLeft() {

		_buttonEvent_ar =new View().ButtonSelectHeroLeft();


	};
	SelectHeroRight() {
		_buttonEvent_ar =new View().ButtonSelectHeroRight();

	};

}




