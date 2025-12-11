export class ViewArmUnit{
	PlaceStartX;
	DeadUnit;
	AttackUnitWin;
	Tick;
	ExplodeTickInt;
	ArmUnit;
	Id;
	UnitSpotX;
	constructor(deadUnit,tick,AttackUnitWin,ArmUnit) {
		this.PlaceStartX =  Math.floor(Math.random() * 70);
		this.DeadUnit = deadUnit;
		this.AttackUnitWin =AttackUnitWin;
		this.Tick =tick;
		this.ExplodeTickInt = 0;
		this.ArmUnit = ArmUnit;
		this.Id = ArmUnit.Id
	}
}