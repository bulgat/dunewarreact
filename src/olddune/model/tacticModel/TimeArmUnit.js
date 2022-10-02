export class TimeArmUnit{
	_PlaceStartX=0;
	DeadUnit;
	AttackUnitWin;
	_Tick=0;
	ExplodeTickInt;
	ArmUnit;
	Id;
	_UnitSpotX;
   
	constructor(deadUnit,tick,AttackUnitWin,ArmUnit) {
		this._PlaceStartX =  Math.floor(Math.random() * 70);
		this.DeadUnit = deadUnit;
		this.AttackUnitWin =AttackUnitWin;
		this._Tick =tick;
		this.ExplodeTickInt = 0;
		this.ArmUnit = ArmUnit;
		this.Id = ArmUnit.Id
        
	}
    get  PlaceStartX () {
        
        return this._PlaceStartX;
    }
    SetTick (value){
        if(this.DeadUnit===false){
                this._Tick = value;
        }
    }
    get Tick(){
        return this._Tick;
    }
    SetUnitSpotX  (UnitSpotX) {
        
        if(isNaN(UnitSpotX)){
            throw Error("error isNaN!")
        }
        this._UnitSpotX = UnitSpotX;
    } 
    get UnitSpotX  () {
        return  this._UnitSpotX;
    } 
}