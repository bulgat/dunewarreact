export class TacticScenarioBattle {
    _unitResultTactic_ar;
   _playerDead;
   _fiendDead;
    constructor(UnitResultTactic_ar){
        this._unitResultTactic_ar = UnitResultTactic_ar;
    }
    
    PrintScenarioTacticBattle(){
		


		let winId_ar =[];
		let deadId_ar =[];
		let playerId_ar =[];
        let fiendId_ar =[];
		console.warn('-------------------Print L = '+this._unitResultTactic_ar.length)
		for(let item in this._unitResultTactic_ar){
			console.warn('UnitIdWin = '+this._unitResultTactic_ar[item].UnitIdWin+"  Star SSSS SSS UnitIdDead = " +this._unitResultTactic_ar[item].UnitIdDead);
			winId_ar.push(this._unitResultTactic_ar[item].UnitIdWin)
			deadId_ar.push (this._unitResultTactic_ar[item].UnitIdDead);
			console.warn('playerId = '+this._unitResultTactic_ar[item].UnitPlayer.GetId() );
			playerId_ar.push(this._unitResultTactic_ar[item].UnitPlayer.GetId())
            fiendId_ar.push(this._unitResultTactic_ar[item].UnitFiend.GetId())
            //console.log(this._unitResultTactic_ar[item].UnitFiend)
			
			console.warn(" === ");
		}
		console.warn("total win = "+winId_ar);
		console.warn("total dead = "+deadId_ar);
		console.warn("total plaeyr id ="+playerId_ar);
		console.warn(' ----------------- Print end')
       //this. _playerDead;
       //this. _fiendDead;
       this._playerDead = this.GetDeadParty(playerId_ar,deadId_ar)
       this._fiendDead = this.GetDeadParty(fiendId_ar,deadId_ar)

	}
    GetDeadParty(IdParty_ar,IdDead_ar) {
        let countDead=0;
       // let idParty_ar = Array.from(IdParty_ar);
        let idParty_ar =[...new Set(IdParty_ar)]
        console.log(idParty_ar );

        for(let indexParty in idParty_ar){
            for(let indexDead in IdDead_ar){
                if (idParty_ar[indexParty]===IdDead_ar[indexDead]){
                    countDead++;
                    continue;
                }
            }
        }
        console.log("%%%% eroId = GlobalVic elopment tack = @@@@ countDead  =  "+countDead  );
        return countDead;
    }
    get GetPlayerDead() {
       return  this._playerDead;
    }
    get GetFiendDead() {
       return this._fiendDead;
    }
}