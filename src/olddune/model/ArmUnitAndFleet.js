class ArmUnitAndFleet{
	
	GetArmUnitIdFleet = function(IdFleet, fleetFiend, fleetPlayer)
	{
		var armUnitList = [];
		armUnitList.push(fleetFiend.GetShipNameFirst().GetArmUnitArray());
		armUnitList.push(fleetPlayer.GetShipNameFirst().GetArmUnitArray());
		armUnitList.forEach (function(armUnit)
		{
			if (IdFleet == armUnit.Id)
			{
				return armUnit;
			}
		});
		return null;
	}
}