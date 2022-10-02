class NameHero {
	x=0;
	y=0;
	SpotX=0;
	SpotY=0;
	type=0;
	position=0;
	tileToPosition=0;
	tileFrom=0;
	tileTo=0;
	move=0;
	flagId=0;
	Id=0;
	Speed = 1;
	PowerReserve = 1;
	StaticLongRange =0;
	GetFlagId = function(){
		return this.flagId;
	};
	GetId = function(){
		return this.Id;
	};
	GetSpeed= function(){
		return this.Speed;
	};
	GetPowerReserve = function() {
		return this.PowerReserve;
	};
	GetRange = function(){
		var maxSpeed = 999;
		if (this.StaticLongRange)
		{
			return true;
		}
/*
			for (ArmUnit armUnit in ShipName.GetArmUnitArray())
			{

				if (armUnit.LongRange == true)
				{
					return true;
				}
			}
*/
		return false;
	};
}