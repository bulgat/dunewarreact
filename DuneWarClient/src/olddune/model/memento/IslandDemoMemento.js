export class IslandDemoMemento {
	Island_ar = [];
	_id = 1;

	IslandDemoMemento = function()
	{
		this.Island_ar = [];
	};
	Init = function()
	{
		this.Island_ar = [];
	};
	GetIslandArray = function()
	{
		return this.Island_ar;

	};
	GetIslandWithId = function(Id)
	{
		this.Island_ar.forEach (function (island)
		{
			if (island.Id == Id)
			{
				return island;
			}
		});
		return null;
	};
	GetCopyIslandArray = function()
	{
		var copyIsland_ar = [];
		this.Island_ar.forEach (function (island)
		{
			copyIsland_ar.push(island.GetCopy());
		});
		return copyIsland_ar;
	};
	SaveChangeIslandArray = function(copyIsland_ar)
	{
		this.Island_ar = copyIsland_ar;

	};
	AddIsland = function(island)
	{
		island.Id = this._id;
		this.Island_ar.push(island);
		this._id++;
	};
	AddIslandAll = function(island_ar){
		this.Island_ar=island_ar;
		for(let island of this.Island_ar){
			island.Id = this._id;
			this._id++;
		}
	}
}