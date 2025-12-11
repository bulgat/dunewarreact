export class PrototypeHeroDemo{
	_NameHeroFleet_ar =[];
	HeroFleetInit = function()
	{

		this._NameHeroFleet_ar = [];
	};
	HeroFleetAdd = function(gridFleet)
	{
		if (gridFleet==null){
			throw new Error("gridFleet == null");
		}
		this._NameHeroFleet_ar.push(gridFleet);
		return gridFleet;
	};
	HeroFleetRemove = function(gridFleet)
	{
		this._NameHeroFleet_ar.Remove(gridFleet);
	};
	HeroFleetAddAll=function(gridFleet_ar)
	{
		if (gridFleet_ar==null){
			throw new Error("gridFleet_ar == null");
		}
		this._NameHeroFleet_ar.push(gridFleet_ar);

	};
	GetHeroFleetIndex = function(Id) {
		for(var i=0;i<this._NameHeroFleet_ar.length;i++){
			if (this._NameHeroFleet_ar[i].GetId()==Id) {
				return i;
			}
		}
		return null;

		
	};
	GetHeroFleet = function() {

		return this._NameHeroFleet_ar;
	};
	IndexOf = function(gridFleet) {

		  for (var i =0;i<this._NameHeroFleet_ar.length;i++){

			  if(this._NameHeroFleet_ar[i].GetId() ==gridFleet.GetId()){
				  return i;
			  }
		  }
	};


	GetHeroFleetFirst = function()
	{
		return this._NameHeroFleet_ar[0];
	};
	GetFleetWithId = function(Id)
	{
		var gridFleetArm = null
		this._NameHeroFleet_ar.forEach (function(gridFleet)
		{

			if (gridFleet.GetId() == Id)
			{

				gridFleetArm = gridFleet;
				//return gridFleet;
			}
		});
		return gridFleetArm;
	};

	HeroFleetCopy = function()
	{
		var copyHero_ar = [];

		this._NameHeroFleet_ar.forEach (function( gridFleet)
		{

			copyHero_ar.push(gridFleet.Copy());
		});
		return copyHero_ar;
	};
	GetArmUnitWithId = function(Id)
	{

		for(let i=0;i<this._NameHeroFleet_ar.length;i++){

			for(var z=0;z<this._NameHeroFleet_ar[i].GetShipName().Crew_ar.length;z++){


				if (this._NameHeroFleet_ar[i].GetShipName().Crew_ar[z].GetId()===Id) {
					return this._NameHeroFleet_ar[i].GetShipName().Crew_ar[z];
				}
			}

		}
		return null;
	};
	PrintAllFleetId(){
		let idList="";
		for(var i=0;i<this._NameHeroFleet_ar.length;i++){
			idList+=this._NameHeroFleet_ar[i].GetId()+",";
		}
		console.log("PrintFleetId = "+idList);
	};
}
