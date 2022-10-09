import {ViewArmUnit} from "../view/ViewArmUnit";

export class ViewTacticBattle{
	_armListPlayerList;
	_armListFiendList;
	
	constructor(heroPlayer,heroFiend) {
		
		

		
		this._armListPlayerList = this.CreateList(heroPlayer);
		this._armListFiendList = this.CreateList(heroFiend);


	}
	GetArmUnitPLayerList = function(Index) {
		return  this._armListPlayerList;
	}
	GetArmUnitPLayer = function(Index) {
		return this._armListPlayerList[Index];
	}
	GetArmUnitFiendList = function() {
		return  this._armListFiendList;
	}
	GetArmUnitFiend = function(Index) {
		return this._armListFiendList[Index];
	}
	CreateList = function(GridFleet) {
		let ViewArmUnitList=[];
		let ArmList = GridFleet.GetShipName().GetArmUnitArray();



		for(let i=0;i<ArmList.length;i++)
		{
			
			ViewArmUnitList.push(new ViewArmUnit(false,0,false,ArmList[i]));
		}
		
		return ViewArmUnitList;
	}
}