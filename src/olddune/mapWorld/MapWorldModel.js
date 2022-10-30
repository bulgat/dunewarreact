import {Point} from "../modelStrategy/Point.js";
import {PrototypeHeroDemo} from "../model/prototype/PrototypeHeroDemo.js";
import {IslandDemoMemento} from "../model/memento/IslandDemoMemento.js";
import {ModelStrategy} from "../modelStrategy/ModelStrategy.js";
import {UsingCommand} from "../model/seaTactic/UsingCommand.js";
import {ExecuteCommandStrateg} from "../model/seaTactic/ExecuteCommandStrateg.js";
import {BattlePlanetModel} from "../model/BattlePlanetModel.js";
import {ListIsland} from "../mapWorld/model/service/ListIsland.js";
import {MapWorldStartGame} from "../scenario/MapWorldStartGame.js";
import {MainFormat} from "../mapWorld/model/MainFormat.js";
import {Tactic} from "../model/tacticModel/Tactic.js";
import {AgentEvent} from "../modelStrategy/AgentEvent.js";

export class MapWorldModel {
	_turnCount = 0;
	_prototypeHeroDemo=new PrototypeHeroDemo();
	_islandDemoMemento=new IslandDemoMemento();
	_changeStateView = false;
	_commandStrategyMap_ar =[];
	_tactic;
	
	get GetCommandStrategyMap ()
	{
		return this._commandStrategyMap_ar;
	}
	RemoveCommandStrategy = function(Command)
	{
		this._commandStrategyMap_ar.Remove(Command);
	}
	AddCommandStrategy(Command) {
		
		this._commandStrategyMap_ar.push(Command);
	}
	GotoHero = function(buttonEvent)
	{

		this.AddCommandStrategy(this.SetMoveCommand(buttonEvent));

		var spotPlayerX = buttonEvent.Point.X;
		var spotPlayerY = buttonEvent.Point.Y;

		var heroFiend = new ModelStrategy().SearchHeroOne(
				spotPlayerX, spotPlayerY,
				this._prototypeHeroDemo.GetHeroFleet(), window._battlePlanetModel.FlagIdHero, true);


		if (heroFiend != null)
		{
			// attack fiend
			// old point 

			this.AddCommandStrategy([ this.CommandAttackFleet(buttonEvent.HeroFleet, heroFiend, buttonEvent.LongRange) ]);
		}

		var island = new ModelStrategy().GetIsland(this._islandDemoMemento.GetIslandArray(),
				window._battlePlanetModel.DispositionCountry_ar,
				buttonEvent.HeroFleet.SpotX,
				buttonEvent.HeroFleet.SpotY);
		if (island != null)
		{

			if (island.FlagId != window._battlePlanetModel.FlagIdHero)
			{
				

				// seizure island.
				island.FlagId = buttonEvent.HeroFleet.GetFlagId();

				var commandStrategyHero = new ModelStrategy().GetCommandCaptureIsland(island, buttonEvent.HeroFleet);

				this.AddCommandStrategy([ commandStrategyHero ]);
			}


		}

		this._changeStateView = true;
	};
	AddCommandStrategy = function(Command) {
		var _commandStrategyMap_ar = []
		_commandStrategyMap_ar.push(Command);
	};
	CommandAttackFleet = function(PlayerFleet,
			 FiendFleet, LongRange)
	{
		
		let oldPoint = new Point(PlayerFleet.SpotX, PlayerFleet.SpotY);
		let attackMoveFleet = new ModelStrategy().GetAttackMoveFleet(FiendFleet, LongRange, null);
		let commandAttack = new ModelStrategy().GetAttackCommand(PlayerFleet,
				FiendFleet, attackMoveFleet, oldPoint);
				
		commandAttack.AttackPlayer = true;
		
		
		
		return commandAttack;

	};
	SetMoveCommand = function(buttonEvent)
	{
		var count = 0;
		var commandStrategy_ar = [];
		
		
		
		buttonEvent.PathGoto_ar.forEach (function(pointPath)
		{
			if (count != 0)
			{

				var commandStrategy = new ModelStrategy().GetCommandMoveFleet(
						buttonEvent.PathGoto_ar[count - 1],
						buttonEvent.PathGoto_ar[count],
						buttonEvent.HeroFleet);
				commandStrategy_ar.push(commandStrategy);

			}
			count++;
		});

		return commandStrategy_ar;
	};
	PickUpCommandCaptureIsland = function(Id,commandStrategy)
	{

		var usingCommand = new UsingCommand();
		


		this._commandStrategyMap_ar = usingCommand.PickUpCommandCaptureIsland(null,
				this._commandStrategyMap_ar, Id, this._turnCount, 0,commandStrategy);
		this.CheckGlobalVictory();

		// change model
		this.ChangeModelCommandJs(commandStrategy);
				

	};
	ChangeModelCommandJs=function(commandStrategy) {
		this._prototypeHeroDemo.GetHeroFleet().forEach(function(Fleet){
			 
			
			 
			if(Array.isArray(commandStrategy.GetGridFleet())){
				console.error("Fleet is array? njt object!")
			}

			 if (Fleet.GetId()===commandStrategy.GetGridFleet().GetId()){
				
				Fleet.x =Fleet.SpotX = commandStrategy.GridFleetNewPoint.X;
				Fleet.y =Fleet.SpotY = commandStrategy.GridFleetNewPoint.Y;
				// = new Point(ResultPoint.X,ResultPoint.Y);
				// = GridFleet;
				// = commandStrategy.EnumType("MoveFleet");
				// =_idCommand;
			 }
		});
		
	};
	TurnPush = function()
	{
		this._turnCount++;

	}
	CheckGlobalVictory = function() {
		console.log("200 CheckGlobalVictory   -countAnimIn FiendUnit.ExplodeTickInt = " ) ;

		var islandHero_ar = new ModelStrategy().GetFlagIslandArray(this._islandDemoMemento.GetIslandArray(),
		window._battlePlanetModel.FlagIdHero, false);

		if (islandHero_ar.length== 0)
		{

			
			//this.GlobalVictoryFailDevelopment();
		}
	
		islandHero_ar = new ModelStrategy().GetFlagIslandArray(this._islandDemoMemento.GetIslandArray(), window._battlePlanetModel.FlagIdHero, true);

		var listIsland = new ListIsland();
		listIsland.PrintIslandName(islandHero_ar);

		
		if (islandHero_ar.length == 0)
		{
			
			
			
			
			console.log( "201  _**** FiendList islandHero_ar = " ,window._battlePlanetModel._VictoryScenario.ReturnStart);
			console.log("205   this.Disposition = ",window._battlePlanetModel._VictoryScenario.ScenarioNumber );
			
			window._battlePlanetModel._VictoryScenario.ScenarioNumber++;

			if (window._battlePlanetModel._VictoryScenario.Dual)
			{

				MapWorldStartGame.StartGameChange(window._battlePlanetModel.VictoryScenario);

			}
			else
			{


				this.GlobalVictoryWinDevelopment(window._battlePlanetModel._VictoryScenario);
			}

		}
	};
	GlobalVictoryWinDevelopment = function(VictoryScenario)
	{
 		console.log( "207   D   = " ,window._battlePlanetModel._VictoryScenario.Scenario);
		// Проверить по юнитам
		if (new MapWorldStartGame().StartGameChange(VictoryScenario))
		{
			window._battlePlanetModel.GotoSuperGlobalWinEnd();
		}
		else
		{
			window._battlePlanetModel.GotoGlobalWin();
		}
	}
	GlobalVictoryFailDevelopment = function()
	{
		
		//var battlePlanetModel = new BattlePlanetModel();
		new MapWorldStartGame().StartGameFirstReset(window._battlePlanetModel.VictoryScenario);
		window._battlePlanetModel.GotoGlobalFail();
	};
	AttackHero = function(buttonEvent)
	{

		buttonEvent.HeroFleet.SetAttackDone(true);

		this.AttackHeroEvent(buttonEvent, buttonEvent.VictimFleet);

	};
	AttackHeroEvent =function(buttonEvent, heroFiend)
	{

		// player attack AI
		this.AddCommandStrategy([ this.CommandAttackFleet(buttonEvent.HeroFleet, heroFiend, buttonEvent.LongRange) ]);

	};
	GotoCreateTactic= function(
			IdHeroPlayer, IdHeroFiend, MoveAI, LongRange, CountTurn
			)
	{


		let gridFleetFiend = window._mapWorldModel._prototypeHeroDemo.GetFleetWithId(IdHeroFiend);
		let gridFleetPlayer = window._mapWorldModel._prototypeHeroDemo.GetFleetWithId(IdHeroPlayer);

		
		
		if (gridFleetFiend != null)
		{
			// break нападение на самого себя
			if (gridFleetFiend.FlagId===gridFleetPlayer.FlagId)
			{
				console.error("MapWorldModel  нападение на самого себя, ошибка пути?  " );
				return;
			}


			

				this.SetStateGame(new MainFormat().BATTLE);

		

				this._tactic = new Tactic(
						gridFleetFiend,
						gridFleetPlayer,
						MoveAI, LongRange);
		

		}

	};
	SetStateGame = function(MainFormat)
	{
		var MainFormat="";
		if (MainFormat=="SEA_BATTLE") {

			return;
		}


	};
	GotoStrateg = function(buttonEventmodel)
	{



		if (buttonEventmodel.IdHero != -1)
		{

			// delete hero.
	
			var deadGridFleet = this.DeadGridFleet(this._prototypeHeroDemo, buttonEventmodel.IdHero);
			
			
			
			if (deadGridFleet == true)
			{
				this.DeadHero();
			}
		
			var gridFleet0 = window._battlePlanetModel.GetHeroWithId(this._prototypeHeroDemo.GetHeroFleet(), buttonEventmodel.IdHero);

		}
		this.CloseTactic();

		
		if (buttonEventmodel.MoveAI)
		{
			
			if (this.GetCommandStrategyMap.Count != 0)
			{
				
				this.Development(window.Grid_ar);
			}
		}
	};
	DeadGridFleet = function(prototypeHeroDemo,IdHero)
	{
		
		if (IdHero == undefined){
			return false;
		}
		
		
		var gridFleet = window._battlePlanetModel.GetHeroWithId(this._prototypeHeroDemo.GetHeroFleet(), IdHero);
		//??
		var index = prototypeHeroDemo.IndexOf(gridFleet);

		if (index != -1)
		{

			//prototypeHeroDemo.GetHeroFleet().RemoveAt(index);
			prototypeHeroDemo.GetHeroFleet().splice(index,1);
			return true;
		}
		return false;
	};
	DeadHero = function()
	{
		var nameHero_ar = new ModelStrategy().GetHeroAll(window._battlePlanetModel.FlagIdHero, this._prototypeHeroDemo.GetHeroFleet());
		
		
		
		if (nameHero_ar.length > 0)
		{
			var hero = new ModelStrategy().GetHeroAll(window._battlePlanetModel.FlagIdHero, this._prototypeHeroDemo.GetHeroFleet())[0];
			
			
			window._battlePlanetModel.SetSelectHeroId(this.GetHeroSelect(hero));

		}
	};
	CloseTactic = function()
	{

		this.ReturnMapWorldScene();

		window._battlePlanetModel.GotoPlanetWorld();
	};
	ReturnMapWorldScene = function() { 
		//LoadSceneChange.LoadSceneRotation("SampleScene");
	};
	SelectHeroLeft = function(buttonEvent)
	{
		//this.SelectHero(buttonEvent);
		this.SelectHeroPlunk(buttonEvent);
	};
	SelectHeroRight = function(buttonEvent)
	{
		//this.SelectHero(buttonEvent);
		this.SelectHeroPlunk(buttonEvent);
	};
	SelectHeroPlunk = function(buttonEvent){
		
		
		
		var idCurrent = window._battlePlanetModel.GetSelectHeroId();
		var idHeroNew=0;
		var allHeroTheir_ar =[];
		for( var i =0; i<window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length;i++)
		{
			var hero = window._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[i];
			
			if (buttonEvent.HeroFleet.GetFlagId() == window._battlePlanetModel.FlagIdHero)
			{
				allHeroTheir_ar.push(hero);
			}
		}
		if(allHeroTheir_ar.length>1) {
			var index =0;
			for(var i=0;i<allHeroTheir_ar.length;i++){
				if (allHeroTheir_ar[i]==idCurrent){
					index = i;
					break;
				}
			}
			 index+=buttonEvent.SelectHeroEnumerator;
			 if(index>=allHeroTheir_ar.length){
				 index =0;
			 }
			 idHeroNew = allHeroTheir_ar[index];
		}
		
		window._battlePlanetModel.SetSelectHeroId(this.GetHeroSelectWithId(idHeroNew));
	};
	SelectHeroButton= function(buttonEvent){

		
		var nameHero_ar = new ModelStrategy().GetHeroAll(window._battlePlanetModel.FlagIdHero, this._prototypeHeroDemo.GetHeroFleet());
		var idSelectHero = window._battlePlanetModel.GetSelectHeroId();
		
		
		var indexSelectHero = window._battlePlanetModel.GetIndexHero(idSelectHero,nameHero_ar);
		var newIndexSelectHero =indexSelectHero + buttonEvent.SelectHeroEnumerator;

		if (newIndexSelectHero>nameHero_ar.length-1){

			newIndexSelectHero=0;
		}
		if (newIndexSelectHero<0){
		
			newIndexSelectHero=nameHero_ar.length-1;
		}
		
		var newIdSelectHero = nameHero_ar[newIndexSelectHero].GetId();
		window._battlePlanetModel.SetSelectHeroId(newIdSelectHero);
	};
	SelectHero = function(buttonEvent)
	{
		
		
		//for( var i =0; i<_mapWorldModel._prototypeHeroDemo.GetHeroFleet().length;i++)
		//{
			
			if (buttonEvent.HeroFleet.GetFlagId() == window._battlePlanetModel.FlagIdHero)
			{
				
				
				window._battlePlanetModel.SetSelectHeroId(this.GetHeroSelect(buttonEvent.HeroFleet));



				MapWorldModel._changeStateView = true;
			}
			
		//}
	};
	GetHeroSelect = function(hero)
	{
		return this.GetHeroSelectWithId (hero.GetId());

	};
	GetHeroSelectWithId = function(HeroId)  {
		var gridFleet = window._battlePlanetModel.GetHeroWithId(this._prototypeHeroDemo.GetHeroFleet(), HeroId);

		if (gridFleet != null)
		{
			window._battlePlanetModel.BlockSelectHero = false;
			return gridFleet.GetId();
		}
		window._battlePlanetModel.BlockSelectHero = true;

		return 0;
	};
	Development = function(Grid_ar)
	{
		
		// get copy island list.
		var copyIsland_ar = this._islandDemoMemento.GetCopyIslandArray();
		this._commandStrategyMap_ar = [];
		
		var copyFleetGrid_ar = this.CopyHeroNameArray();

//_battlePlanetModel.GridTile_ar = Grid_ar;
let getIncrementUnitId = window._battlePlanetModel.GetIncrementUnitId.bind(window._battlePlanetModel);
console.log("900001   Her  = ",getIncrementUnitId);

		let eventModel = new ModelStrategy().GreatImpDrivingAI
				(
						window._battlePlanetModel.DispositionCountry_ar,
						window._battlePlanetModel.FlagIdHero,
						copyFleetGrid_ar,
						Grid_ar,//_battlePlanetModel.GridTile_ar,
						window._battlePlanetModel._mapWorldModel._islandDemoMemento.GetIslandArray(),
						window._battlePlanetModel.ShoalSeaBasa_ar,
						window._battlePlanetModel.GetBasaPurchaseUnitScience(),
						2,
						this.GetCommandStrategyMap,
						window._battlePlanetModel.GridTile_ar,
						getIncrementUnitId
						//window._battlePlanetModel.GetIncrementUnitId.bind(window._battlePlanetModel
							//)
				);

		
		

		if(eventModel.CommandStrategy_ar == undefined){
			console.error("MapWorldModel  Not response! Not Data!")
		}

		this._commandStrategyMap_ar = eventModel.CommandStrategy_ar;
		//this._commandStrategyMap_ar = eventModel;

		
		

		if (this.GetCommandStrategyMap==undefined){
			this._commandStrategyMap_ar = [];
		}

		// input command
		this._commandStrategyMap_ar.forEach (function(commandStrategy)
		{
			
			if (commandStrategy.GetGridFleet() === null)
			{
				//Debug.Log("unknow command GridFleet  ");
			}

		});
		if (eventModel != null)
		{

			// Ai 
			// attack player/ 
			//GotoTactic(eventModel);
			this._eventModel = eventModel;

		}
		//if (this.GetCommandStrategyMap.length== 0)
		//{
			this.CheckGlobalVictory();
		//}
		return this.GetCommandStrategyMap;
	};
	CopyHeroNameArray = function()
	{
		return this._prototypeHeroDemo.HeroFleetCopy();
	}
}