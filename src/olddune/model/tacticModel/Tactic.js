import {BasicTactic} from "../seaTactic/BasicTactic.js";
import {MeleeShip} from "./MeleeShip.js";
import {RobotResultMelee} from "./RobotResultMelee.js";
import {Robot} from "./Robot.js";
import { TimeArmUnit } from "./TimeArmUnit.js";
import {TacticScenarioBattle } from './TacticScenarioBattle';
import {ControllerTactic} from '../../controller/ControllerTactic';
import { ControllerTacticConstant } from "../../controller/ControllerTacticConstant.js";
import {ButtonEvent} from '../../model/ButtonEvent';

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

		if (HeroFiend.FlagId===HeroPlayer.FlagId)
		{
			console.error("Tactic  нападение на самого себя, ошибка пути?  " );
			this.CloseTactic(this.GetEventModel());
		}
		
		
		console.log("557 Path fiend =",HeroFiend)
		console.log("555 way ===== " +HeroFiend.FlagId," ==== ",HeroPlayer.FlagId		)

		var meleeShip = new MeleeShip();
		this.MoveAI = MoveAi;
		this.LongRange = longRange;
		meleeShip.Launch();
		
		this._AttackMelee = new RobotResultMelee();

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

	}
    get GetPlayerDead() {

		return  this._TacticScenarioBattle.GetPlayerDead;
	 }
	 get GetFiendDead() {
		return this._TacticScenarioBattle.GetFiendDead;
	 }


	ScenarioTacticBattle(){
		console.log("Fi Inde L=",this.heroPlayer);
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
		
		return this._timeArmFiendList[Index];
	}

	ReleaseDead = function(GridFleetOldPoint)
	{

		// Должно сработать в конце.
		let buttonEventMelee = new ButtonEvent();
		buttonEventMelee.unitResultTactic_ar = this._unitResultTactic_ar
		buttonEventMelee.BasaPurchaseUnitScience_ar =window._battlePlanetModel.GetBasaPurchaseUnitScience(); 
		buttonEventMelee.CrewPlayer = this.GetPlayerFleet().GetShipNameFirst().GetArmUnitArray();
		buttonEventMelee.CrewFiend = this.GetFiendFleet().GetShipNameFirst().GetArmUnitArray();

		new ControllerTactic().TacticEventCall(new ControllerTacticConstant().MeleeShipReleaseDead,buttonEventMelee)

	
	
		//this.BasicStopBattleVictory(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo,GridFleetOldPoint);
		let buttonEventVictory = new ButtonEvent();
		buttonEventVictory.GridFleetOldPoint = GridFleetOldPoint;
		buttonEventVictory.FleetFiend =this.heroFiend;
		buttonEventVictory.FleetPlayer= this.heroPlayer;
		buttonEventVictory.MoveAI = this.MoveAI;
		
		new ControllerTactic().TacticEventCall(new ControllerTacticConstant().BasicStopBattleVictory,buttonEventVictory)


		console.log("556 wayGoto   =",this.GetPlayerFleet().GetId())
		let buttonEvent = new ButtonEvent();
		buttonEvent.IdHero = this.GetPlayerFleet().GetId();
		new ControllerTactic().TacticEventCall(new ControllerTacticConstant().EndBattleTactic,buttonEvent)
	};
	
}