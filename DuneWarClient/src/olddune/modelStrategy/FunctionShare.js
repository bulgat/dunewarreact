export class FunctionShare{
	
	Add_Level_Unit = function(Crew, BasaPurchaseUnitScience_ar)
	{
		if (Crew != null)
		{
			Crew.Level++;
			Crew.Attack += BasaPurchaseUnitScience_ar[Crew.GetUnit()].BonusAttack;
			Crew.Defence += BasaPurchaseUnitScience_ar[Crew.GetUnit()].BonusDefence;

		}


	}
}