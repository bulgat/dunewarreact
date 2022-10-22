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
		console.log("  ничего не найдено");
		return null;
	};
	MouseDownPathActionFunction = function (IdPath,buttonEvent_ar)
	{
		let idPathHero = window._battlePlanetModel.GetSelectHeroId();

		let _buttonEvent_ar = this.GetButtonEventPathList(window._battlePlanetModel.GetSelectHeroId());

console.log("!!!!!!@@@@_buttonEvent_ar ",_buttonEvent_ar)

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

	   var gridFleet = window._battlePlanetModel.GetHeroWithId(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet(), selectHeroId);



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
	window._mapWorldModel._prototypeHeroDemo.GetHeroFleet(),
	_battlePlanetModel.FlagIdHero,
	_battlePlanetModel.DispositionCountry_ar,
	true,0,[]);



		let getPath= _battlePlanetModel.GetPathSelectHero(
										window._mapWorldModel._prototypeHeroDemo,
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
		console.log("SSSSSSSSSS SSSSS")
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
				var tileBox = new TileBox();
				tileBox.Tile = window._tileTypes[window.gameMap[new View().toIndex(x,y)]];
				tileBox.X= window._tileTypes[window.gameMap[new View().toIndex(x,y)]].sprite[0].w+(x*window.tileW);
				tileBox.Y= window._tileTypes[window.gameMap[new View().toIndex(x,y)]].sprite[0].h+(y*window.tileH);
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
		for( var i =0; i<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length;i++)
		{
			var hero = window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i];
	
	
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
	DrawMapTilePachground = function(ctx,_tileBox_ar,_tileset,_buttonEvent_ar){
		for(var i=0; i<_buttonEvent_ar.length; i++){
			var unitTile = window._tileTypes[10];
	
			if (_buttonEvent_ar[i].NameEvent=="AttackHero")
			{
				var unitTile = window._tileTypes[11];
			}
			//movePath
			ctx.drawImage(_tileset, unitTile.sprite[0].x, unitTile.sprite[0].y, unitTile.sprite[0].w, unitTile.sprite[0].h,
				_buttonEvent_ar[i].Point.X*window.tileW-(window.tileW/2)+window.tileW, _buttonEvent_ar[i].Point.Y*window.tileH-(window.tileH/2)+window.tileH, window.tileW, window.tileH);
	
			//_buttonEvent_ar[i].NameEvent		AttackHero
	
		}
	};
	DrawMapUnitGround = function(ctx,indexNameFleet,_unitTypes,unitIconSet,screenList){
		for(var y=0; y<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){


			if(indexNameFleet!=y){
	
				var unitType = _unitTypes[window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].type];
				var position = new CreateFleetFast().GetPositionPointArray(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].SpotX, window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].SpotY);
	
	
				ctx.drawImage(unitIconSet,
					unitType.sprite[0].x, unitType.sprite[0].y, 
					unitType.sprite[0].w, unitType.sprite[0].h,
				position[0],
				position[1],
				window.tileW, window.tileH);
	
				ctx.fillStyle = "black"; 
				ctx.font = '10px serif';
				ctx.fillText(''+window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetCountUnitArm(),position[0]+window.tileW/2-10,position[1]+window.tileH);
				
				////GetDispositionCountryWithId = function(Id)
				//let item = window._battlePlanetModel.GetDispositionCountryWithId(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetFlagId())
				//let indexImage = item.FlagImage;
				let indexImage = this.GetIndexFlagImage(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].GetFlagId())
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
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0],
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1],
			window.tileW, window.tileH
		);

		//let indexImage = 0;

		let indexImage = this.GetIndexFlagImage(window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].GetFlagId());
		//console.log("0011 flag  ",indexImage)
		//console.log("0012 flag  ",window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].GetFlagId())

		this.drawFlagUnit(ctx,screenList,
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[0],
			window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameFleet].position[1],
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
/*
	ShowTacticBattle = function(ctx,currentFrameTime,_battleTerra,_countStepResult,
		_countAnimInfantery,screenList,ResetCommStrCurrent)
	{
			var tick = ( currentFrameTime - _battleTerra.Time);
	
			this.DrawTacticFonPlanetBacground(ctx,screenList);
			this.TextTacticFon(ctx);
	
				var idHero = window._battlePlanetModel.GetSelectHeroId();
				var indexNameHero = window._mapWorldModel._prototypeHeroDemo.GetHeroFleetIndex(idHero);
				var playerGridHero = window._mapWorldModel._prototypeHeroDemo[indexNameHero];
				//var typeUnit = window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[indexNameHero].type;
	
				let ArmListPlayer =window._mapWorldModel._tactic.GetTimeArmUnitPLayerList()
				let ArmFiendList =window._mapWorldModel._tactic.GetTimeArmUnitFiendList();

				//3500
				let maxLengthMovie = 2000;
			
				let stepTickResultTacticInt = maxLengthMovie/window._mapWorldModel._tactic.GetUnitResultTacticLength()
				let percentStep = tick%stepTickResultTacticInt;
				var pointTank = new Point(117, 45);
	
		
				//console.log(ArmListPlayer)
				//console.log(ArmFiendList)
				//if(tick>1000 && tick<1020){}
	
				//start
				if( percentStep >= 0 && percentStep<17)
				{
					
					if (_countStepResult<window._mapWorldModel._tactic._unitResultTactic_ar.length){
						//UnitIdDead
						
	
						//block move ViewArmUnit
	
						let unitDead = window._mapWorldModel._prototypeHeroDemo.GetArmUnitWithId(window._mapWorldModel._tactic.GetResultTacticBattleToIndex(_countStepResult).UnitIdDead);
						let unitWin = window._mapWorldModel._prototypeHeroDemo.GetArmUnitWithId(window._mapWorldModel._tactic.GetResultTacticBattleToIndex(_countStepResult).UnitIdWin);
						unitDead.ViewArmUnit = new ViewArmUnit(true,tick,false,unitDead.Id);
						unitWin.ViewArmUnit = new ViewArmUnit(false,tick,true,unitWin.Id);
	
						this.MutationViewArmUnit(ArmListPlayer,unitDead,"Dead");
						this.MutationViewArmUnit(ArmFiendList,unitDead,"Dead");
	
						this.MutationViewArmUnit(ArmListPlayer,unitWin,"Win");
						this.MutationViewArmUnit(ArmFiendList,unitWin,"Win");
	
						
						_countStepResult++;
						
				}
			}
	
			//if(tick>3800) {
			//3500
				//_mapWorldModel._tactic.ReleaseDead();
			//}
	
			//var imageUnitX = new View()._unitTypesList[typeUnit].sprite[0].x;
			//var imageUnitY = new View()._unitTypesList[typeUnit].sprite[0].y;
	
			var Yheight = 20;
			//draw player
			for(let i=0;i<ArmListPlayer.length;i++)
			{
				new View().drawUnitAnim(ctx,tick,i,Yheight,ArmListPlayer[i],false);
	
			}
	
			//draw fiend
			var typeUnitFiend = window._mapWorldModel._tactic.heroFiend.type;
	
			ctx.save();
				
			ctx.scale(-1, 1);
	
			

			//if (typeUnitFiend == 2){
			   //on animation unit
				//attack -4
				//dead -5
				
			//}
			//else
			//{
				
				//draw fiend
				//attack
				for(let i=0;i<ArmFiendList.length;i++)
				{
					if (ArmFiendList[i].ArmUnit.GetUnit() != 2){
						//typeUnitFiend
						new View().drawUnitAnim(ctx,tick,i,Yheight,ArmFiendList[i],true);
					} else {
			
						//for(let i=0;i<ArmFiendList.length;i++){
							//var kol = new ViewDrawInfantery()
							console.log("kol i="+i);
							 new ViewDrawInfantery().drawInfantaryAnim(ctx,tick,i,Yheight,ArmFiendList[i],null,true,
								this._unitAnimInfanteryList);
		
		
								
						//}
			
			
						//ctx.restore();
					}
				}
	
	
				ctx.restore();
	
			//}
	
			// attack
			if(currentFrameTime>_battleTerra.Time+(700*5))
			{
	
				// end show attack
				_battleTerra.Show=false;
				this.RemoveCommandSteck();
				ResetCommStrCurrent();
	
	
	
				var indexGridFleetVictim;
	
					for(var y=0; y<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){
						if (window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].Id==_battleTerra.GridFleetVictimId)
						{
							indexGridFleetVictim = y;
						}
					}
	
				window._mapWorldModel._tactic.ReleaseDead(_battleTerra.GridFleetOldPoint);
	
	
			}
		return _countStepResult;
	};
	
	DrawTacticFonPlanetBacground=function(ctx,screenList){
		ctx.drawImage(screenList[1], window.tileW/2, window.tileH/2, new ViewTacticModel().WIDTH_FON, new ViewTacticModel().HEIGHT_FON);
		ctx.drawImage(screenList[2], window.tileW/2, window.tileH/2, new ViewTacticModel().WIDTH_FON, new ViewTacticModel().HEIGHT_FON);
	}
	TextTacticFon=function(ctx){
		ctx.font = '18px serif';
		ctx.fillStyle = "yellow";
		ctx.fillText('total battle:' ,30,40);
		ctx.fillText('player dead = '+window._mapWorldModel._tactic.GetPlayerDead ,30,60);
		ctx.fillText('fiend dead = '+window._mapWorldModel._tactic.GetFiendDead ,30,80);
		
	}
	MutationViewArmUnit = function(ArmListPlayer,unit,NameEventFight){
		for(let armUnutIndex in ArmListPlayer){
			//console.log(ArmListPlayer[armUnutIndex].ArmUnit.Id+" = FFF  = "+unit.Id+ " "+NameEventFight);
			//console.log(ArmListPlayer[armUnutIndex]);
	
			
			
			if(ArmListPlayer[armUnutIndex].ArmUnit.Id ===unit.Id ){
				if(NameEventFight==="Dead"){
					ArmListPlayer[armUnutIndex].DeadUnit = true;
				} else {
					ArmListPlayer[armUnutIndex].AttackUnitWin = true;
				}
			}
			
		}
	}
	drawUnitAnim = function(ctx,tickUnit,index,Yheight,ArmUnit,Fiend){



		let typeUnit =ArmUnit.ArmUnit.GetUnit();
		
	


		var imageUnitX = this._unitTypesList[typeUnit].sprite[0].x;
		var imageUnitY = this._unitTypesList[typeUnit].sprite[0].y;
		let pointTank = new Point(117, 45);
		var Yheight = 20;
		var startPlace = new View().GetStartPLaceUnitTactic(Fiend);
		ArmUnit.SetTick(tickUnit/20);
		

		let placeStartX=0;
			if (Fiend){

				placeStartX =window._mapWorldModel._tactic.GetTimeArmUnitFiend(index).PlaceStartX;
				
				
			} else {

				placeStartX =window._mapWorldModel._tactic.GetTimeArmUnitPlayer(index).PlaceStartX;
			}
			

			if (ArmUnit!=undefined){

			//.06
			ArmUnit.ExplodeTickInt +=.16;
				var countAnimInf = Math.round(ArmUnit.ExplodeTickInt);
				if (new View().GetDeadArmUnit(ArmUnit)){
					tickUnit = ArmUnit.Tick;
					//dead
					imageUnitX = this._unitTypesList[typeUnit].dead[0].x;
					imageUnitY = this._unitTypesList[typeUnit].dead[0].y;
				} else {
					//life
					//ArmUnit.SetUnitSpotX(startPlace+placeStartX+(tickUnit/20));
				}
				if (new View().GetAttackArmUnit(ArmUnit)){
					//attack
					if(countAnimInf>5)	{
						imageUnitX = this._unitTypesList[typeUnit].attack[0].x;
						imageUnitY = this._unitTypesList[typeUnit].attack[0].y;
					}
				}

			}
			
			//ArmUnit.SetUnitSpotX(startPlace+placeStartX+(tickUnit/20));
			ArmUnit.SetUnitSpotX(startPlace+placeStartX+ArmUnit.Tick);

			var heightUnitPlace = new View().HEIGHT_TACTIC+(index*Yheight);

			console.log("===   typeUnit = ",typeUnit," unit   Fiend = ",Fiend);

			ctx.drawImage(window._viewTacticModel.tankUnitScreen, imageUnitX, imageUnitY,
				pointTank.X, pointTank.Y,
				ArmUnit.UnitSpotX,
				heightUnitPlace,
				pointTank.X*new View().GetScalePerspective(index)/2,
				pointTank.Y*new View().GetScalePerspective(index)/2
			);

			

			if (ArmUnit!=undefined){
				if (new View().GetDeadArmUnit(ArmUnit)){
					new View().drawExplodeAnim(ctx,index,ArmUnit.ExplodeTickInt,1,ArmUnit.UnitSpotX,
						heightUnitPlace,
						window._viewTacticModel.explodeUnitAnim);
				}
			}
	};
	
	drawExplodeAnim = function(ctx,i,ExplodeTickInt,Scale,weightUnitPlace,heightUnitPlace,
		explodeUnitAnim){
		
		
		

		var countAnimInf = Math.round(ExplodeTickInt);
		var pointTank = new Point(97, 97);
	
		//ctx.save();
			//ctx.scale(-1, 1);
		if(countAnimInf>5)	{
	
			return;
		}

		var correctYinfantery =0;
		if (Scale===4)
		{
			//infantery 85
			correctYinfantery =85;
		}
		//4
		heightUnitPlace -=pointTank.Y-5-correctYinfantery ;//Scale;
	
	
		ctx.drawImage(explodeUnitAnim,
					this._explodeAnimList[countAnimInf].sprite[0].x,
					this._explodeAnimList[countAnimInf].sprite[0].y,
					pointTank.X,
					pointTank.Y,
					//-WIDTH_TACTIC+placeStartX+(tickUnit/20)-(pointTank.X/7),
					weightUnitPlace,
					//(HEIGHT_TACTIC+(i*Yheight)-correctY),
					heightUnitPlace,
					pointTank.X*new View().GetScalePerspective(i)/Scale,
					pointTank.Y*new View().GetScalePerspective(i)/Scale
				);
					
					
	};
	GetStartPLaceUnitTactic(Fiend) {
		return Fiend? -this.WIDTH_TACTIC:100;
	}
	*/
}

