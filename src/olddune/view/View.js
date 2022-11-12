import {ControllerConstant} from "../controller/ControllerConstant";
import {ControllerButton} from "../controller/ControllerButton";
import {BattlePlanetModel} from "../model/BattlePlanetModel";
import {IslandDemoMemento} from "../model/memento/IslandDemoMemento";
import {AI_Behavior_Existence} from "../modelStrategy/AI_Behavior_Existence";
import {TileBox} from "./TileBox";
import {Point} from "../modelStrategy/Point";
import {ButtonEvent} from "../model/ButtonEvent";
import {CreateFleetFast} from "../modelStrategy/CreateFleetFast.js";
import {ViewArmUnit} from "./ViewArmUnit.js";
import {ViewTacticModel} from "./ViewTacticModel";
import {ViewDrawInfantery } from './ViewDrawInfantery';
import {ViewTactic} from './ViewTactic';

export class View {
	_explodeAnimList = {
		0:{sprite:[{x:0,y:0,w:97,h:97}]},
		1:{sprite:[{x:97,y:0,w:160,h:97}]},
		2:{sprite:[{x:194,y:0,w:160,h:97}]},
		3:{sprite:[{x:291,y:0,w:160,h:97}]},
		4:{sprite:[{x:388,y:0,w:160,h:97}]},
		5:{sprite:[{x:485,y:0,w:160,h:97}]}
	};
	_unitTypesList = {
		0:{sprite:[{x:0,y:0,w:117,h:45}],attack:[{x:117,y:0,w:217,h:45}],dead:[{x:234,y:0,w:117,h:45}]},
		1:{sprite:[{x:0,y:45,w:117,h:90}],attack:[{x:117,y:45,w:117,h:45}],dead:[{x:234,y:45,w:117,h:45}]},
		2:{sprite:[{x:0,y:90,w:117,h:135}],attack:[{x:117,y:90,w:117,h:45}],dead:[{x:234,y:90,w:117,h:45}]},
		3:{sprite:[{x:0,y:135,w:117,h:180}],attack:[{x:117,y:135,w:117,h:45}],dead:[{x:234,y:135,w:117,h:45}]},
		4:{sprite:[{x:0,y:180,w:117,h:225}],attack:[{x:117,y:180,w:117,h:45}],dead:[{x:234,y:180,w:117,h:45}]},
		5:{sprite:[{x:0,y:225,w:117,h:270}],attack:[{x:117,y:225,w:117,h:45}],dead:[{x:234,y:225,w:117,h:45}]},
		6:{sprite:[{x:0,y:270,w:117,h:270}],attack:[{x:117,y:270,w:117,h:45}],dead:[{x:234,y:270,w:117,h:45}]}
	};
	_unitAnimInfanteryList = {
		0:{sprite:[{x:0,y:0,w:160,h:40}]},
		1:{sprite:[{x:40,y:0,w:160,h:40}]},
		2:{sprite:[{x:80,y:0,w:160,h:40}]},
		3:{sprite:[{x:120,y:0,w:160,h:40}]},
		4:{sprite:[{x:160,y:0,w:160,h:40}]},
		5:{sprite:[{x:220,y:0,w:160,h:40}]}
	};
	_tileTypes = {
		0:{colour:"ground", sprite:[{x:0,y:0,w:16,h:16}]},
		1:{colour:"ground", sprite:[{x:16,y:0,w:16,h:16}]},
		2:{colour:"ground", sprite:[{x:32,y:0,w:16,h:16}]},
		3:{colour:"ground", sprite:[{x:48,y:0,w:16,h:16}]},
		4:{colour:"ground", sprite:[{x:64,y:0,w:16,w:16,h:16}]},
		5:{colour:"ground", sprite:[{x:256,y:48,w:16,w:16,h:16}]},
		6:{colour:"ground", sprite:[{x:16*39,y:16*2,w:16,w:16,h:16}]},
		7:{colour:"ground", sprite:[{x:16*35,y:16*4,w:16,w:16,h:16}]},
		8:{colour:"ground", sprite:[{x:16*40,y:16*2,w:16,w:16,h:16}]},
		9:{colour:"ground", sprite:[{x:16*43,y:16*9,w:16,w:16,h:16}]},
		10:{colour:"move", sprite:[{x:16*42,y:16*9,w:16,w:16,h:16}]},
		11:{colour:"attack", sprite:[{x:16*41,y:16*9,w:16,w:16,h:16}]},
		12:{colour:"town", sprite:[{x:15*41,y:9*9,w:16,w:16,h:16}]}
		};
		//0x9
	HEIGHT_TACTIC = 400;
	WIDTH_TACTIC = 800;
	

	GetGridFleetCommandStrategy = function (Id) {

		if (typeof Id!="number")
		{
			throw "Это не число!"+typeof Id;
		}
		for(var i=0;i<window._CommandStrategy_ar.length;i++){
		
			if (Id == window._CommandStrategy_ar[i].GetGridFleet().Id) {

				return window._CommandStrategy_ar[i];
			}
		}
		
		return null;
	};
	MouseDownPathActionFunction = function (IdPath,buttonEvent_ar)
	{
		let idPathHero = window._battlePlanetModel.GetSelectHeroId();

		let _buttonEvent_ar = this.GetButtonEventPathList(window._battlePlanetModel.GetSelectHeroId());



		_buttonEvent_ar.forEach (function(buttonEvent)
        {


            if (idPathHero == IdPath)
            {
				var controllerConstant = new ControllerConstant();
				var controllerButton = new ControllerButton();
								 //EventCall
                controllerButton.EventCall(controllerConstant.PathHero, controllerConstant.PathHero, buttonEvent);
                //DestroyDrawPathHero();
            }
            idPathHero++;
        });
		// set select attack fiend hero.
        this.SetSelectAttackFiendHero();
  

		return _buttonEvent_ar;
	};
	SetSelectAttackFiendHero = function() {

		var selectHeroId = window._battlePlanetModel.GetSelectHeroId();

	   //selectHeroId =0;

	   var gridFleet = window._battlePlanetModel.GetHeroWithId(
		window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet(), selectHeroId);



        var buttonEvent_ar = this.GetButtonEventPathList(selectHeroId);
        var count=0;
        buttonEvent_ar.forEach (function (item) {

            count++;
        });
    };
	GetButtonEventPathList = function (SelectHeroId) {


		var _battlePlanetModel = new BattlePlanetModel();

		var islandDemoMemento = new IslandDemoMemento();
		islandDemoMemento.Init();

let gridMapExistence =new AI_Behavior_Existence().PreparationMap(window.Grid_ar,
	window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet(),
	_battlePlanetModel.FlagIdHero,
	_battlePlanetModel.DispositionCountry_ar,
	true,0,[]);



		let getPath= _battlePlanetModel.GetPathSelectHero(
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo,
										gridMapExistence,// ShoalSeaBasa_ar,
										 islandDemoMemento,//_islandDemoMemento,
										 window.Grid_ar,//GridTile_ar,
										 new ControllerConstant().PathHero,//PathHero,
										 new ControllerConstant().AttackHero,//AttackHero,
										 false,//SpeedStatic
										 null, //fleetFiend
										 null, //fleetPlayer
										 0,
										 0,
										 SelectHeroId,
										 _battlePlanetModel.FlagIdHero,//FlagIdHero
										 );
		
		return getPath;
	};
	toIndex = function (x,y) {
		return ((y*window.mapW)+x);
	};
	CreateMap = function () {
		var tileBox_ar =[];
		for(var y=0; y<window.mapW; y++){
			for(var x=0;x<window.mapH; x++)
			{
				let tileBox = new TileBox();
				tileBox.Tile = this._tileTypes[window.gameMap[new View().toIndex(x,y)]];
				tileBox.X= this._tileTypes[window.gameMap[new View().toIndex(x,y)]].sprite[0].w+(x*window.tileW);
				tileBox.Y= this._tileTypes[window.gameMap[new View().toIndex(x,y)]].sprite[0].h+(y*window.tileH);
				tileBox.Width =window.tileW;
				tileBox.Height = window.tileH;
				tileBox.SpotX= x;
				tileBox.SpotY= y;
				tileBox_ar.push(tileBox);
			}
		}
		return tileBox_ar;
	};
	GetGameMap= function() {
		return [
		6,6,6,6,6, 6,6,8,8,8,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		1,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		10,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,

		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,5,5,5, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,7,7, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,8,8,6,6,6,6,6,6,6, 6,6,6,6,6,

		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,
		6,6,6,6,6, 6,6,6,6,6,6,6,6,6,6, 6,6,6,6,6,

		0,1,0,1,0, 1,0,0,1,0,0,1,0,1,0, 1,0,0,1,0,
		0,1,1,1,1, 1,1,1,1,0,0,1,1,1,1, 1,1,1,1,0,
		0,1,0,0,0, 0,0,1,0,0,0,1,0,0,0, 0,0,1,0,0,
		0,1,1,1,0, 1,1,1,1,0,0,1,1,1,0, 1,1,1,1,0,
		0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0
		];
	};
	GetScale = function() {
		return 1.1;
	};
	GetScalePerspective= function(i) {
		return (this.GetScale()+i*0.1);
	};

	GetDeadArmUnit = function(ArmUnit){
	if (ArmUnit.DeadUnit){
		return true;
	}
	return false;
	};
	GetAttackArmUnit = function(ArmUnit){
		if (ArmUnit.AttackUnitWin){
			return true;
		}
		return false;
	};
	ButtonSelectHeroLeft() {
		

		var modelEvent =this.GetSelectHeroButtonEvent(-1);

		this.SelectHeroLeft(modelEvent);

		return this.RefreshPathButtonEvent();
		
	};
	ButtonSelectHeroRight() {


		var modelEvent =this.GetSelectHeroButtonEvent(1);

		this.SelectHeroRight(modelEvent);

		return this.RefreshPathButtonEvent();
	};
	SelectHeroLeft = function(modelEvent){

		var controllerConstant = new ControllerConstant();
        new ControllerButton().EventCall(controllerConstant.SelectHeroLeft, controllerConstant.SelectHeroLeft,modelEvent);
	};
	SelectHeroRight = function(modelEvent){

		var controllerConstant = new ControllerConstant();
        new ControllerButton().EventCall(controllerConstant.SelectHeroRight, controllerConstant.SelectHeroRight,modelEvent);
	};
	GetSelectHeroButtonEvent = function(SelectHeroEnumerator) {

		

		var IdHero = window._battlePlanetModel.GetSelectHeroId();

		
	
		let heroSel=null;
		var pointHeroSel = null;
		for( var i =0; i<window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length;i++)
		{
			var hero = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i];
	
	
			var pointHero = new Point(hero.SpotX, hero.SpotY);
			if (hero.GetId() == IdHero) {
				heroSel = hero;
				pointHeroSel = pointHero;
	
				break;
			}
		}
	
	
	
		   var modelEvent = new ButtonEvent();
			modelEvent.HeroFleet = heroSel;
			modelEvent.Point = pointHeroSel;
			modelEvent.NameEvent = new ControllerConstant().SelectHero;
			modelEvent.SelectHeroEnumerator = SelectHeroEnumerator
		return modelEvent;
	};
	RefreshPathButtonEvent(){
		var idHero = window._battlePlanetModel.GetSelectHeroId();
		let buttonEvent_ar = this.PathButtonEvent(idHero,[]);
		return buttonEvent_ar;
	};
	PathButtonEvent(idHero,buttonEventPath_ar){
		let buttonEvent_ar = new View().MouseDownPathActionFunction(idHero,buttonEventPath_ar);
		return buttonEvent_ar;
	};
	PrintMap = function(GridTile_ar,CreateMap_ar) {
		for (var GridRow = 0; GridRow < (GridTile_ar[GridTile_ar.length - 1].SpotX + 1); GridRow++)
		{
			var line ="";
			for (var GridLine = 0; GridLine < GridTile_ar[GridTile_ar.length - 1].SpotY + 1; GridLine++)
			{
				line+=CreateMap_ar[GridRow][GridLine] ;

			}
			console.log(" @@@@ PrintMap =  "+line  );
		}
	};
	InitPathButtonEventArray() {
		return this.PathButtonEvent(1,[]);
	}
	GetPathIndex =function(ButtonEvent_ar,SpotX,SpotY){
		for(var i=0;i<ButtonEvent_ar.length;i++){
			if (SpotX == ButtonEvent_ar[i].Point.X && SpotY == ButtonEvent_ar[i].Point.Y){
				return i;
			}
		}
		return null;
	};
	DrawMapTileBackground = function(ctx,_tileBox_ar,_tileset){
		for(var i=0; i<_tileBox_ar.length; i++){
			ctx.drawImage(_tileset, _tileBox_ar[i].Tile.sprite[0].x, _tileBox_ar[i].Tile.sprite[0].y, _tileBox_ar[i].Tile.sprite[0].w, _tileBox_ar[i].Tile.sprite[0].h,
				_tileBox_ar[i].X, _tileBox_ar[i].Y, window.tileW, window.tileH);
		}
	};
	DrawIsland=function(ctx,_tileBox_ar,_tileset){
		let island_ar = window._battlePlanetModel._mapWorldModel._islandDemoMemento.GetIslandArray();
	
		let _buttonEvent_ar =[new Point(3,3),new Point(6,6),new Point(6,6)];


		let i =0;
		for(let island of island_ar)
		{

			
			let unitTile = this._tileTypes[12];
			
			ctx.drawImage(_tileset, unitTile.sprite[0].x, unitTile.sprite[0].y, unitTile.sprite[0].w, unitTile.sprite[0].h,
				island.SpotX*window.tileW-(window.tileW/2)+window.tileW, island.SpotX*window.tileH-(window.tileH/2)+window.tileH, window.tileW, window.tileH);

			i++;
		}

	};
	DrawMapTilePachground = function(ctx,_tileBox_ar,_tileset,_buttonEvent_ar){
		for(var i=0; i<_buttonEvent_ar.length; i++){
			var unitTile = this._tileTypes[10];
	
			if (_buttonEvent_ar[i].NameEvent=="AttackHero")
			{
				var unitTile = this._tileTypes[11];
			}
			//movePath
			ctx.drawImage(_tileset, unitTile.sprite[0].x, unitTile.sprite[0].y, unitTile.sprite[0].w, unitTile.sprite[0].h,
				_buttonEvent_ar[i].Point.X*window.tileW-(window.tileW/2)+window.tileW, _buttonEvent_ar[i].Point.Y*window.tileH-(window.tileH/2)+window.tileH, window.tileW, window.tileH);
	
		
	
		}
	};
	DrawMapUnitGround = function(ctx,indexNameFleet,_unitTypes,unitIconSet,screenList){
		for(var y=0; y<window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){


			if(indexNameFleet!=y){
	
				var unitType = _unitTypes[window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].type];
				var position = new CreateFleetFast().GetPositionPointArray(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].SpotX,
				 window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].SpotY);
	
	
				ctx.drawImage(unitIconSet,
					unitType.sprite[0].x, unitType.sprite[0].y, 
					unitType.sprite[0].w, unitType.sprite[0].h,
				position[0],
				position[1],
				window.tileW, window.tileH);
	
				ctx.fillStyle = "black"; 
				ctx.font = '10px serif';
				ctx.fillText(''+window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetCountUnitArm(),position[0]+window.tileW/2-10,position[1]+window.tileH);
				

				//let item = window._battlePlanetModel.GetDispositionCountryWithId(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetFlagId())
				//let indexImage = item.FlagImage;
				let indexImage = this.GetIndexFlagImage(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetFlagId())
//console.log("0000 flag  ",indexImage)
				
				
				
				this.drawFlagUnit(ctx,screenList,position[0],position[1],window.tileW,window.tileH,indexImage)
				
				
				////.FlagImage 
			}
		}
	};
	GetIndexFlagImage(FlagId){
		let item = window._battlePlanetModel.GetDispositionCountryWithId(FlagId)
		return item.FlagImage;
	}

	drawFlagUnit(ctx,screenList,PositionX,PositionY,TileW,TileH,indexImage){
		ctx.drawImage(screenList[3], 400*indexImage, 0, 400, 433,
			PositionX,
			PositionY,
			TileW/3, TileH/3);
	}

	//move
	drawMapMoveUnitGround(ctx,unitIconSet,unitType,indexNameFleet,screenList){
		ctx.drawImage(unitIconSet,
			unitType.sprite[0].x, unitType.sprite[0].y, unitType.sprite[0].w, unitType.sprite[0].h,
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0],
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1],
			window.tileW, window.tileH
		);

		//let indexImage = 0;

		let indexImage = this.GetIndexFlagImage(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].GetFlagId());
		//console.log("0011 flag  ",indexImage)
		//console.log("0012 flag  ",window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].GetFlagId())

		this.drawFlagUnit(ctx,screenList,
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0],
			window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1],
			window.tileW,window.tileH,indexImage)
	}
	/*
	//tactic
	--
	*/
	RemoveCommandSteck = function() {
		window._CommandStrategy_ar.shift();
		//_commStrCurrent = null;
		
	};

	ShowTacticBattle= function(ctx,currentFrameTime,_battleTerra,_countStepResult,
		_countAnimInfantery,screenList,ResetCommStrCurrent){
			new ViewTactic().ShowTacticBattle(ctx,currentFrameTime,_battleTerra,_countStepResult,
				_countAnimInfantery,screenList,ResetCommStrCurrent);
		}
	drawUnitAnim = function(ctx,tickUnit,index,Yheight,ArmUnit,Fiend){
		new ViewTactic().drawUnitAnim(ctx,tickUnit,index,Yheight,ArmUnit,Fiend);
	}

}

