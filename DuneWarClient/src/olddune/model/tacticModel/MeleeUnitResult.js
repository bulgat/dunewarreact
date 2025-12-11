import {UnitResultBattleTactic} from "./UnitResultBattleTactic.js";
import {RobotExistence} from "./RobotExistence.js";
import {Robot} from "./Robot.js";
import {UnitResultTactic} from "./UnitResultTactic.js";

export class MeleeUnitResult extends UnitResultBattleTactic {
	Add_Melee_Unit = function(
			  BasaPurchaseUnitScience_ar,
			  HeroFiend,
			  HeroPlayer,
			  CrewPLayer_ar,
			  CrewFiend_ar,
			  MoveAi,
			  LongRange,
			  islandDemoMemento
			  )
	{
		if (CrewPLayer_ar.Count == 0 || CrewFiend_ar.Count == 0)
		{
			
			return null;
		}

		var unitResultTactic = null;

		if (HeroFiend != null && HeroPlayer != null)
		{
			
			var robotExistence = new RobotExistence();
			var player_AttackUnMove = robotExistence.GetAttackPlayer(MoveAi);

			// filr
			if (LongRange)
			{
				if (player_AttackUnMove)
				{
					CrewPLayer_ar = RobotExistence.GetCrewLongRangeArray(CrewPLayer_ar);
				}
				else
				{
					CrewFiend_ar = RobotExistence.GetCrewLongRangeArray(CrewFiend_ar);
				}
			}
			var robot = new Robot();
			var SelectUnit_Player = robot.SelectUnitPlayerRandom(CrewPLayer_ar);
			var SelectUnit_Fiend = robot.SelectUnitPlayerRandom(CrewFiend_ar);

			var UnitPlayer = robot.GetUnit(CrewPLayer_ar, SelectUnit_Player);
			var UnitFiend = robot.GetUnit(CrewFiend_ar, SelectUnit_Fiend);

			var shipPlayer = HeroPlayer.GetShipNameFirst();
			var shipFiend = HeroFiend.GetShipNameFirst();





			var robotResultMelee = new RobotExistence().Auto_Existense(
					HeroFiend,
					shipFiend,
					UnitFiend,
					HeroPlayer,
					shipPlayer,
					UnitPlayer,
					window._battlePlanetModel.TypeIsland,
					MoveAi,
					islandDemoMemento
				);


			var _AttackMelee = robotResultMelee;


			var FiendMelee = robotResultMelee.Fiend_Melee;
			var PlayerMelee = robotResultMelee.Player_Melee;

			var AttackPlayer = robotResultMelee.Player_Attack;
			
		

			var unitPlayer = robot.GetUnit(CrewPLayer_ar, SelectUnit_Player);
			var unitFiend = robot.GetUnit(CrewFiend_ar, SelectUnit_Fiend);



			var unitResultTactic = this.GetUnitResultTactic(robotResultMelee,
					BasaPurchaseUnitScience_ar,
					CrewPLayer_ar,
					CrewFiend_ar,
					unitPlayer,
					unitFiend,
					MoveAi,
					LongRange
					);
		}
		
		
		
		
		
		return unitResultTactic;

	};

	GetUnitResultTactic = function(
			robotResultMelee,
			BasaPurchaseUnitScience_ar,
			CrewPLayer_ar,
			CrewFiend_ar,
			unitPlayer,
			unitFiend,
			MoveAi,
			LongRange
			)
	{

		var unitWinPsevdo = null;
		var unitDeadPsevdo = null;

		var FiendMelee = robotResultMelee.Fiend_Melee;
		var PlayerMelee = robotResultMelee.Player_Melee;

		var AttackPlayer = robotResultMelee.Player_Attack;
		var DeadPlayer = false;
		var unitIdWin = 0;
		var unitIdDead = 0;


		if (robotResultMelee.Existense >= 0)
		{
			
			//dead fiend
			DeadPlayer = false;

			unitWinPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitPlayer
					);

			unitDeadPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitFiend
					);
			// surrogat
			unitIdWin = unitPlayer.Id;
			unitIdDead = unitFiend.Id;
			
			
		}
		else
		{
			//dead player
			DeadPlayer = true;
			unitWinPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitFiend
					);
			unitDeadPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitPlayer
					);
			// surrogat	
			unitIdWin = unitFiend.Id;
			unitIdDead = unitPlayer.Id;
		}

		var blockDead = this.GetBlockDead(MoveAi,
				LongRange, DeadPlayer, unitWinPsevdo);



		//Get UnitResultTactic
		return new UnitResultTactic(
				AttackPlayer,
		DeadPlayer,
		unitIdWin,
		unitIdDead,
		unitWinPsevdo,
		unitDeadPsevdo,
		robotResultMelee.Existense,
			CrewPLayer_ar,
			CrewFiend_ar,
			unitPlayer,
			unitFiend,
			robotResultMelee.PlayerMeleeFull,
			robotResultMelee.FiendMeleeFull,
			blockDead,
			false,
			null
				);
	};
	GetUnitResultTacticSalvo = function(
			robotResultMelee,
			BasaPurchaseUnitScience_ar,
			CrewPLayer_ar,
			CrewFiend_ar,
			unitPlayer,
			unitFiend,
			MoveAi,
			LongRange
			)
	{

		var unitWinPsevdo = null;
		var unitDeadPsevdo = null;

		var FiendMelee = robotResultMelee.Fiend_Melee;
		var PlayerMelee = robotResultMelee.Player_Melee;

		var AttackPlayer = robotResultMelee.Player_Attack;
		var DeadPlayer = false;
		var unitIdWin = 0;
		var unitIdDead = 0;

		if (robotResultMelee.ExistenseSalvo)
		{
			//dead fiend
			DeadPlayer = false;

			unitWinPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitPlayer
					);

			unitDeadPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitFiend
					);
			// surrogat
			unitIdWin = unitPlayer.Id;
			unitIdDead = unitFiend.Id;
		}
		else
		{
			//dead player
			DeadPlayer = true;
			unitWinPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitFiend
					);
			unitDeadPsevdo = this.CreatePseudoUnit(BasaPurchaseUnitScience_ar,
					unitPlayer
					);
			// surrogat	
			unitIdWin = unitFiend.Id;
			unitIdDead = unitPlayer.Id;
		}

		var blockDead = this.GetBlockDead(MoveAi,
				LongRange, DeadPlayer, unitWinPsevdo);

		return new UnitResultTactic(
				AttackPlayer,
		DeadPlayer,
		unitIdWin,
		unitIdDead,
		unitWinPsevdo,
		unitDeadPsevdo,
		robotResultMelee.Existense,
			CrewPLayer_ar,
			CrewFiend_ar,
			unitPlayer,
			unitFiend,
			robotResultMelee.PlayerMeleeFull,
			robotResultMelee.FiendMeleeFull,
			blockDead,
			true,
			robotResultMelee.ImprintVolleyList
				);
	};
	GetLongRange = function(Attack, MoveAi,
			LongRange)
	{
		if (MoveAi == true)
		{
			if (LongRange)
			{
				return true;
			}
		}
		else
		{
			if (LongRange)
			{
				return true;
			}
		}

		return false;
	};
}