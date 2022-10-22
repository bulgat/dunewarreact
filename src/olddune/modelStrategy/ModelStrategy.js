import {MendMoveShip} from "./MendMoveShip.js";
import {ContactStateProceeding} from "./ContactStateProceeding.js";
import {Point} from "./Point.js";
import {AgentEvent} from "./AgentEvent.js";
import {CommandStrategy} from "./CommandStrategy.js";
import {FleetSacrifive} from "../mapWorld/model/FleetSacrifive.js";
import {WayGotoSelectField} from "./WayGotoSelectField.js";
import {AI_Behavior_Existence} from "./AI_Behavior_Existence.js";
import {WayGotoAttack} from "./WayGotoAttack.js";
import {CoordinateSearch} from "./CoordinateSearch.js";
import {FiendFleet} from "./FiendFleet.js";
import {MendMoveAbleFire} from "./MendMoveAbleFire.js";
import {AI_Behavior} from "./AI_Behavior.js";
import {CreateGridScenario} from "../scenario/CreateGridScenario.js";
import {CreateFleetFast} from "./CreateFleetFast.js";
import {PerformCommandModel} from "./AI/PerformCommandModel";
import { GridFleet } from "./GridFleet.js";

export class ModelStrategy{
	//_prototypeHeroDemo =[];
	/*
	Development = function(Grid_ar,PrototypeHeroDemo) {
		var commGreatImp = this.GreatImpDrivingAI(Grid_ar,PrototypeHeroDemo);
	
	console.log( "=    fla =TEST  commGreatImp =    " +commGreatImp);
		return commGreatImp;
		
	};
	*/
	GreatImpDrivingAI = function (
	DispositionCountry_ar,
	FlagIdHero,
	PrototypeHeroDemo,
	Grid_ar,
	
	Island_ar,
	ShoalSeaBasa_ar,
	BasaPurchaseUnitScience_ar,
	HeroMax,
	GridTile_ar) {
		
		var mendMoveShip = new MendMoveShip();
		var CommandStrategy_ar = [];
		

		for (var Imperial = 0; Imperial < window._battlePlanetModel.GetDispositionCountry().length; Imperial++)
		{
			
			if (window._battlePlanetModel.GetDispositionCountry()[Imperial].PlayerControl!=true)  {
			
			
				if (new ContactStateProceeding().ContactGlobalPeace(window._battlePlanetModel.GetDispositionCountry()[Imperial]))
				{
					/*
					MendMovePeaceShip.moveFiend_MIR(DispositionCountry_ar[Imperial], NameHero_ar, Island_ar,
							DispositionCountry_ar, Grid_ar, CommandStrategy_ar);
							*/
				} 
				else 
				{
					
					var  DispositionCountryNameHero_ar = this.GetHeroAll(window._battlePlanetModel.GetDispositionCountry()[Imperial].IdCountry,PrototypeHeroDemo);
					
		
					
					for (var gridFleetInsex=0; gridFleetInsex<DispositionCountryNameHero_ar.length;gridFleetInsex++) {
						
						// move and search attack enemy.
						//var point = TacticSearchIslandAndHero(_prototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex]);
						if (DispositionCountryNameHero_ar[gridFleetInsex].GetTurnDone())
						{
							
						} else {
						 
						 // old point 
							var oldPoint = new Point(DispositionCountryNameHero_ar[gridFleetInsex].SpotX, DispositionCountryNameHero_ar[gridFleetInsex].SpotY);
						 
						
						 
						 // move and search attack enemy.
							let attackMoveFleet = mendMoveShip.PlaceFiendX(
									DispositionCountryNameHero_ar[gridFleetInsex],
									PrototypeHeroDemo,//NameHero_ar,
									Grid_ar,
									Island_ar,//Island_ar,
									window._battlePlanetModel.GetDispositionCountry(),//DispositionCountry_ar,
									CommandStrategy_ar,
									null,
									0,
									0);

						console.log("    Player=" ,DispositionCountryNameHero_ar[gridFleetInsex] );					 
						console.log("  attackMoveFleet =",attackMoveFleet);
						if(attackMoveFleet){
							console.log("___flag = ",attackMoveFleet.Fleet.FlagId);
						}


						 var fleetSacrifive = this.SetFleetSacrifive(attackMoveFleet,
									DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet,
									oldPoint);
									
									var heroPlayerSacrifive = fleetSacrifive.HeroPlayerSacrifive;
									oldPoint = fleetSacrifive.OldPoint;
									
									if (heroPlayerSacrifive != null)
									{
										// command Attack fleet 


										CommandStrategy_ar.push(this.GetCommandAttack(DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet, 
										heroPlayerSacrifive,
												attackMoveFleet, oldPoint));
										


var agentEvent =  new AgentEvent().GetButtonEventModelMeeleeFleet(heroPlayerSacrifive,
												DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet,
												true, attackMoveFleet.LongRange,CommandStrategy_ar);

return agentEvent;
/*
										return new AgentEvent().GetButtonEventModelMeeleeFleet(heroPlayerSacrifive,
												DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet,
												true, attackMoveFleet.LongRange);
*/
									}
							//mendMoveShip.PlaceFiendX(PrototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex],Grid_ar,CommandStrategy_ar);
							/*
							var point =Operate(_prototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex]);
							if (point!=null){
								
							}
							*/
						}
						
					}
				}
				var fleet = this.RefillHero(window._battlePlanetModel.GetDispositionCountry()[Imperial], //DispositionCountry_ar[Imperial],
						PrototypeHeroDemo, //NameHero_ar,
						Island_ar, //Island_ar,
						ShoalSeaBasa_ar, //ShoalSeaBasa_ar,
						window._battlePlanetModel.GetDispositionCountry(), //DispositionCountry_ar, 
						BasaPurchaseUnitScience_ar, HeroMax, GridTile_ar);
				
				if (fleet != null)
				{
					var commandStrategy = new CommandStrategy();
					commandStrategy.NameCommand = CommandStrategy.Type.CreateFleet;
					commandStrategy.SetGridFleet(fleet);

					CommandStrategy_ar.push(commandStrategy);
					//PrototypeHeroDemo.GetHeroFleet().add(fleet);
				}
				
			}
		}
		
		return CommandStrategy_ar;
	};
	SetFleetSacrifive = function(attackMoveFleet, gridFleet,
			oldPoint)
	{

		var heroPlayerSacrifive = null;
		if (attackMoveFleet != null)
		{
			heroPlayerSacrifive = attackMoveFleet.Fleet;
			if (attackMoveFleet.PlacePredator != null)
			{
				gridFleet.SpotX = attackMoveFleet.PlacePredator.X;
				gridFleet.SpotY = attackMoveFleet.PlacePredator.Y;
				oldPoint = attackMoveFleet.PlacePredator;
			}
		}
		var fleetSacrifive = new FleetSacrifive();
		fleetSacrifive.HeroPlayerSacrifive = heroPlayerSacrifive;
		fleetSacrifive.OldPoint = oldPoint;

		return fleetSacrifive;
	}
	GetHeroAll = function (FlagId,PrototypeHeroDemo) {
		var prototypeHeroDemo=[];
		for (var i=0;i<PrototypeHeroDemo.length;i++){
				
			if(PrototypeHeroDemo[i].FlagId==FlagId){
				prototypeHeroDemo.push(PrototypeHeroDemo[i]);
			}
		}
		
		return prototypeHeroDemo;
	};
	GetContactPeace = function () {
		return false;
	}
	CreateVariationWay = function(Speed) {
		var wayGotoSelectField = new WayGotoSelectField();
		return wayGotoSelectField.CreateVariationWay(Speed);
	};
	SelectVariationWayFleet = function(HeroFleet,
				wayRude_ar,
				DispositionCountry_ar, ShoalSeaBasa_ar,
				Island_ar, prototypeHeroDemo,
				GridTile_ar) {
					
			var wayGotoSelectField = new WayGotoSelectField();
			
			
			
			
		return wayGotoSelectField.SelectVariationWayFleet(HeroFleet, wayRude_ar,
				DispositionCountry_ar, ShoalSeaBasa_ar, Island_ar, prototypeHeroDemo,
				GridTile_ar);
				
	};
	AllowPointMap = function(ShoalSeaBasa_ar, point)
	{
		return new AI_Behavior_Existence().AllowPointMap(ShoalSeaBasa_ar, point);
	};
	PreparationMap = function(
			Grid_ar,
			NameHero_ar, FlagId, DispositionCountry_ar,
			StopFiendHero, Sea, Island_ar)
	{
		return new AI_Behavior_Existence().PreparationMap(Grid_ar, NameHero_ar, FlagId,
				DispositionCountry_ar, StopFiendHero, Sea, Island_ar);
	};
	PreparationAttackFleet = function(Hero,
				DispositionCountry_ar, NameHero_ar,
				ShoalSeaBasa_ar, CircleFleet_ar)
	{

		return new WayGotoAttack().PreparationAttackFleet(Hero,
				DispositionCountry_ar, NameHero_ar, ShoalSeaBasa_ar, CircleFleet_ar);
	};
	GetXmapNear = function(AddCenter)
	{
		return CoordinateSearch.GetXmapNear(AddCenter);
	};
	GetFiendHeroAll = function(spotX, spotY, flagId,
				NameHero_ar)
	{
		return new FiendFleet().GetFiendHeroAll(spotX, spotY, flagId,
				NameHero_ar);
	};
	GetDistanceSQRT = function(Start,  End)
	{
		return new WayGotoAttack().GetDistanceSQRT(Start, End);
	}
	GetDistance = function(Start, End)
	{
		return WayGotoAttack.GetDistance(Start, End);
	}
	GetAbleFireWithDistance = function(gridFleet,
			pointLongRange, ArmUnitFleet,
			GlobalParamsTimeQuick, GlobalParamsGale
			)
	{
		return new MendMoveAbleFire().GetAbleFireWithDistance(gridFleet, pointLongRange, ArmUnitFleet, GlobalParamsTimeQuick, GlobalParamsGale);
	}
	GetFindPathBigArray = function(pointAim,
				FiendPoint, FiendFlagId,
				NameHero_ar,
				Grid_ar,
				DispositionCountry_ar, StopFiendHero,
				Sea, Island_ar,ClearHeroPoint)
	{

		var pointPath_ar = [];

		// map?
		let Grid2d_ar;// = new AI_Behavior_Existence().Get2Dgrid();
		Grid2d_ar = new AI_Behavior_Existence().PreparationMap(
			Grid_ar, NameHero_ar, FiendFlagId,
			DispositionCountry_ar,
			StopFiendHero, Sea, Island_ar,ClearHeroPoint);

console.log("555  GetFindPathBigArray ",Grid2d_ar," pointAim ["+pointAim.X+" x "+pointAim.Y+" ] = "
+Grid2d_ar[pointAim.X][pointAim.Y]+"  Island_ar = ",Island_ar)

		//StartNode_ID_Fiend
		var pathBasa_ar = new AI_Behavior().GetFindPathBigSearchArray(pointAim,
				FiendPoint, //FiendFlagId,
				//NameHero_ar,
				Grid2d_ar);//,//Grid_ar,
				//DispositionCountry_ar, StopFiendHero, Sea, Island_ar);



		//pathBasa_ar.forEach (function( superNode)
		for(let superNode in pathBasa_ar) 
		{


			var nodePoint = new Point((superNode.id % 100), (superNode.id / 100));
			pointPath_ar.push(nodePoint);
		}
		//);
		return pointPath_ar;

	};
	SearchHeroOne = function(spotX, spotZ, NameHero_ar,
			flagId, Fiend)
	{
		var fiendFleet = new FiendFleet();
		return fiendFleet.SearchHeroOne(spotX, spotZ, NameHero_ar, flagId, Fiend);

	};
	GetAttackMoveFleet = function(fleetVictim, LongRange, PlacePredator)
	{
		return new MendMoveShip().GetAttackMoveFleet(fleetVictim, LongRange, PlacePredator);
	};
	GetAttackCommand = function(gridFleet,
			heroPlayerSacrifive,
			attackMoveFleet,
			oldPoint)
	{
		let commandStrategy = new CommandStrategy();
		commandStrategy.GridFleetNewPoint = new Point(gridFleet.SpotX, gridFleet.SpotY);

		commandStrategy.GridFleetVictim = heroPlayerSacrifive;
		//commandStrategy.NameCommand = CommandStrategy.Type.AttackFleet;
		commandStrategy.NameCommand = commandStrategy.EnumType("AttackFleet");
		
		commandStrategy.SetGridFleet(gridFleet);
		
		//commandStrategy.GridFleet.SpotX = heroPlayerSacrifive.SpotX;
		//commandStrategy.GridFleet.SpotY = heroPlayerSacrifive.SpotY;
		//GridFleetOldPoint

		commandStrategy.GridFleetOldPoint = oldPoint;
		commandStrategy.GridFleetNewPoint = new Point(heroPlayerSacrifive.SpotX, heroPlayerSacrifive.SpotY);
		commandStrategy.LongRange = attackMoveFleet.LongRange;

		return commandStrategy;
	};
	GetCommandMoveFleet = function(gridFleetOldPoint, resultPoint,
			gridFleet)
	{
		return new MendMoveShip().GetCommandMoveFleet(gridFleetOldPoint, resultPoint, gridFleet);
	};
	GetIsland = function(Island_ar,
				DispositionCountry_ar, SpotX, SpotY)
	{
		return new FiendFleet().GetIsland(Island_ar, DispositionCountry_ar, SpotX, SpotY);
	};
	GetFlagIslandArray = function(island_ar, flagIdHero, FlagFiend) {
		return new FiendFleet().GetFlagIslandArray(island_ar, flagIdHero, FlagFiend);
	};
	GetFleetFast = function(SpotX, SpotY, FlagId,
			Name, UnitTypeId,
			BasaPurchaseUnitScience_ar, AddOne, customShip)
	{
		var image = new CreateGridScenario().GetImageIcon(UnitTypeId);
		return new CreateFleetFast().GetFleetFast(SpotX, SpotY, FlagId, image, Name, UnitTypeId,
				BasaPurchaseUnitScience_ar, AddOne, customShip);
	};
	GetMapFlagIslandArray =function()
	{
		return new CoordinateSearch().GetMapFlagIslandArray();
	};
	InitContact = function(DispositionCountry_ar)
	{
		new ContactStateProceeding().InitContact(DispositionCountry_ar);
	};
	SetContactPeace = function(DispositionCountry_ar,
		flagIdPoint, Peace)
	{
		new ContactStateProceeding().SetContactPeace(DispositionCountry_ar,
				flagIdPoint, Peace);
	};
	GetCommandAttack = function(gridFleet, heroPlayerSacrifive,
			attackMoveFleet, oldPoint)
	{
		// command Attack fleet 
		return this.GetAttackCommand(gridFleet,
				heroPlayerSacrifive,
				attackMoveFleet,
				oldPoint);
	};
	RefillHero = function(country, NameHero_ar,
			Island_ar, ShoalSeaBasa_ar,
			DispositionCountry_ar,
			BasaPurchaseUnitScience_ar,
			HeroMax, GridTile_ar)
	{



		var heroCountry_ar = new FiendFleet().GetHeroAll(country.IdCountry, NameHero_ar);
		if (heroCountry_ar.Count < HeroMax)
		{
			console.error("UNITY var rand = new System.Random();");
			/*
			var typeUnit =0;
			
			//var rand = new System.Random();

			//int typeUnit = (int)Math.floor(Math.random() * BasaPurchaseUnitScience_ar.size());
			//var typeUnit = rand.Next( BasaPurchaseUnitScience_ar.Count);

			var cost = UnitTech.GetUnit(typeUnit).Cost * BattlePlanetModel.SizeSquad;

			if (country.Money - cost >= 0)
			{


				var fleet = new AI_Behavior_Replace().Replace_Ship_AfterLoss(
						country.IdCountry, Island_ar, ShoalSeaBasa_ar,
						DispositionCountry_ar, BasaPurchaseUnitScience_ar, typeUnit, GridTile_ar);
				if (fleet != null)
				{
					country.Money -= cost;
				}
				return fleet;

			}
			*/
		}
		return null;
	};
	PerformCommandMoveFleet= function(prototypeHeroDemo,
			commandStrategy)
	{
		new PerformCommandModel().PerformCommandMoveFleet(prototypeHeroDemo, commandStrategy);
	};
	PerformAttackFleetAction = function(prototypeHeroDemo, commandStrategy)
	{


		
	if(Array.isArray(commandStrategy.GridFleet)){
		console.error ("Is array! Not GridFleet");
		return;
	}



	let gridFleet = prototypeHeroDemo.GetFleetWithId(commandStrategy.GetGridFleet().GetId());

		if (gridFleet !== null)
		{
			gridFleet.SetAttackDone(true);
			gridFleet.SetTurnDone(true);
			gridFleet.PowerReserveChange(-1);
		}
	}
}