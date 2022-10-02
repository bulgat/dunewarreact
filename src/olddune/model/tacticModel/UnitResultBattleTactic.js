import {ArmUnit} from "../../modelStrategy/ArmUnit.js";

export class UnitResultBattleTactic {
	UnitResultBattleTactic = function() { }
	CreatePseudoUnit = function(BasaPurchaseUnitScience_ar, unit
			)
	{

		var armPsevdo = new ArmUnit(BasaPurchaseUnitScience_ar,
				unit.GetUnit(), 0
				);
		armPsevdo.Level = unit.Level;
		armPsevdo.SoundMusic = unit.SoundMusic;
		return armPsevdo;


	}
	GetBlockDead =function(MoveAi,
			LongRange, DeadPlayer, unitWinPsevdo)
	{
		if (LongRange)
		{
			if (unitWinPsevdo.LongRange)
			{
				return false;
			}
		}


		if (MoveAi == false)
		{
			//attack player
			if (LongRange)
			{
				return this.GetBlockDeadPlayerAndFiend(LongRange, true);

			}
		}
		else
		{
			if (LongRange)
			{
				return this.GetBlockDeadPlayerAndFiend(LongRange, false);

			}
		}
		return false;
	}
	GetBlockDeadPlayerAndFiend = function(LongRange, Player)
	{
		if (LongRange)
		{
			if (Player)
			{
				return true;
			}
			else
			{
				return true;
			}
		}
		return false;
	}
	
}