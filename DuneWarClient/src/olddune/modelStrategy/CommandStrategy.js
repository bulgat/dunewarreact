export class CommandStrategy{
	_GridFleet;
	EnumType = function(StrEnum)
	{

		var enum_ar = ["CaptureIsland","MoveFleet","AttackFleet","CreateFleet","CaptureIsland"]
		for (var i=0; i<enum_ar.length;i++){
			if (StrEnum==enum_ar[i]){
				return StrEnum;
			}
		}


		console.error('Error enumType = '+StrEnum);
	};

	GridFleetOldPoint;
	GridFleetNewPoint;
	SetGridFleet = function(gridFleet) {
		if(Array.isArray(gridFleet))
		{
			console.error("Is Array! Not class GridFleet!");
			throw new Error("Is Array! Not class GridFleet!");
		}
		this._GridFleet = gridFleet;
	}
	GetGridFleet = function() {
		return this._GridFleet;
	}
	NameCommand;

	CaptureIsland;
	OldIslandFlag;
	GridFleetVictim;
	LongRange;
	Id;
	AttackPlayer;
	unitResultTactic_ar;

}
