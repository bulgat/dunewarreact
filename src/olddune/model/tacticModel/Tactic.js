import {BasicTactic} from "../seaTactic/BasicTactic.js";
import {MeleeShip} from "./MeleeShip.js";
import {RobotResultMelee} from "./RobotResultMelee.js";
import {Robot} from "./Robot.js";
import { TimeArmUnit } from "./TimeArmUnit.js";
import {TacticScenarioBattle } from './TacticScenarioBattle';

export class Tactic extends BasicTactic {
	Select_Unit_Fiend = 0;
	Select_Unit_Player = 0;
	Player_Melee = 0;
	Fiend_Melee = 0;

	AttackPlayer = false;
	_AttackMelee;

	DeadPlayer = false;
	_unitIdDead = 0;
	_unitIdWin = 0;
	_unitDeadPsevdo;
	_unitWinPsevdo;

	MoveAI;
	LongRange;
	_unitResultTactic_ar;
	
	TacticSingleton;

	_timeArmPlayerList;
	_timeArmFiendList;

	_TacticScenarioBattle;



	constructor(HeroFiend, HeroPlayer, MoveAi, longRange)
	{
		super();
		
		


		this.SetFiendFleet(HeroFiend);
		this.SetPlayerFleet(HeroPlayer);

		var meleeShip = new MeleeShip();
		this.MoveAI = MoveAi;
		this.LongRange = longRange;
		meleeShip.Launch();
		
		this._AttackMelee = new RobotResultMelee();
		//var rand = new System.Random();
		//var limitDeadUnit = rand.Next(9)+1;
		var max = 9+1;
var limitDeadUnit = Math.floor(Math.random() * max);
		
		
		this._unitResultTactic_ar = meleeShip.GetStreamRunFast(
				this.GetFiendFleet(),
				this.GetPlayerFleet(),
				this.GetPlayerFleet().GetShipNameFirst(),
				this.GetFiendFleet().GetShipNameFirst(),
				limitDeadUnit,
				MoveAi, this.LongRange);
				
		this.TacticSingleton = this;

		this.ScenarioTacticBattle();
		console.log("3^^  ^^^^ InitTacticBattle print  F= " )
		this.PrintScenarioTacticBattle();
	};

	GetTactic = function() {
		return this.TacticSingleton;
	};
	GetResultTacticBattle = function() { 
		return this._unitResultTactic_ar; 
	};
	GetResultTacticBattleToIndex = function(CountStepResult) { 
		return this._unitResultTactic_ar[CountStepResult]; 
	};
	GetUnitResultTacticLength(){
		return this._unitResultTactic_ar.length;
	}
/*

tactic scenario

*/
	PrintScenarioTacticBattle(){
		
		this._TacticScenarioBattle =new TacticScenarioBattle(this._unitResultTactic_ar)
		this._TacticScenarioBattle.PrintScenarioTacticBattle();
		console.log(this._TacticScenarioBattle )
	}
    get GetPlayerDead() {
		console.log(this._TacticScenarioBattle )
		return  this._TacticScenarioBattle.GetPlayerDead;
	 }
	 get GetFiendDead() {
		return this._TacticScenarioBattle.GetFiendDead;
	 }


	ScenarioTacticBattle(){
		this._timeArmPlayerList = this.ScenarioTacticCreateList (this.heroPlayer);
		this._timeArmFiendList= this.ScenarioTacticCreateList (this.heroFiend);
	}

	ScenarioTacticCreateList = function(GridFleet) {
		let ViewArmUnitList=[];
		let ArmList = GridFleet.GetShipName().GetArmUnitArray();

		for(let i=0;i<ArmList.length;i++)
		{
			
			ViewArmUnitList.push(new TimeArmUnit(false,0,false,ArmList[i]));
		}
		
		return ViewArmUnitList;
	}

	GetTimeArmUnitPLayerList = function() {
		return  this._timeArmPlayerList;
	}
	GetTimeArmUnitFiendList = function() {
		return this._timeArmFiendList;
	}
	GetTimeArmUnitPlayer = function(Index) {
		
		return this._timeArmPlayerList[Index];
	}
	GetTimeArmUnitFiend = function(Index) {
		//console.log("Fi Index = "+Index+'  L='+this._timeArmPlayerList.length)
		return this._timeArmFiendList[Index];
	}

	ReleaseDead = function(GridFleetOldPoint)
	{

		// Должно сработать в конце.

		this.MeleeShipReleaseDead(this._unitResultTactic_ar,
				window._battlePlanetModel.GetBasaPurchaseUnitScience(),
				this.GetPlayerFleet().GetShipNameFirst().GetArmUnitArray(),
				this.GetFiendFleet().GetShipNameFirst().GetArmUnitArray()
				);

	
	
		this.BasicStopBattleVictory(window._mapWorldModel._prototypeHeroDemo,GridFleetOldPoint);

	};
	
	MeleeShipReleaseDead = function(unitResultTactic_ar,
			BasaPurchaseUnitScience_ar,
			CrewPlayer,
			CrewFiend
			  )
	{

		var robot = new Robot();

		unitResultTactic_ar.forEach (function (unitResultTactic)
		{
			
			
			if (unitResultTactic.BlockDead)
			{
				
			}
			else
			{
				

				// dead ship
				robot.DeadUnit(
						unitResultTactic.UnitIdDead,
						unitResultTactic.UnitIdWin,
							BasaPurchaseUnitScience_ar,
							CrewPlayer,
							CrewFiend
						);
			}
			
		});
		
		
	};
	BasicStopBattleVictory = function(prototypeHeroDemo,GridFleetOldPoint)
	{
		
		
		var meleeShip = new MeleeShip();


		var buttonEventmodel = meleeShip.SetEventEndTactic(
				this.heroPlayer.GetShipName(),
				this.heroFiend.GetShipName(),this);
				

		if (buttonEventmodel.IdHero == undefined)
		{
			//abolish turn unit
			

			//this.heroPlayer.Point = GridFleetOldPoint;
			this.heroPlayer.SetPoint(GridFleetOldPoint.X,GridFleetOldPoint.Y);
			
			var kol = window._mapWorldModel._prototypeHeroDemo.GetFleetWithId(this.heroPlayer.GetId());
			//this.heroFiend.Point = GridFleetOldPoint;
		
		}


	//CloseTactic!
		// load scenr
		window._mapWorldModel.GotoStrateg(buttonEventmodel);
	};
}