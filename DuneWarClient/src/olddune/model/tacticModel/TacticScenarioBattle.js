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
	
		for(let item in this._unitResultTactic_ar){
			
			winId_ar.push(this._unitResultTactic_ar[item].UnitIdWin)
			deadId_ar.push (this._unitResultTactic_ar[item].UnitIdDead);
		
			playerId_ar.push(this._unitResultTactic_ar[item].UnitPlayer.GetId())
            fiendId_ar.push(this._unitResultTactic_ar[item].UnitFiend.GetId())
   
		}

       //this. _playerDead;
       //this. _fiendDead;
       this._playerDead = this.GetDeadParty(playerId_ar,deadId_ar)
       this._fiendDead = this.GetDeadParty(fiendId_ar,deadId_ar)

	}
    GetDeadParty(IdParty_ar,IdDead_ar) {
        let countDead=0;
       // let idParty_ar = Array.from(IdParty_ar);
        let idParty_ar =[...new Set(IdParty_ar)]
       

        for(let indexParty in idParty_ar){
            for(let indexDead in IdDead_ar){
                if (idParty_ar[indexParty]===IdDead_ar[indexDead]){
                    countDead++;
                    continue;
                }
            }
        }
     
        return countDead;
    }
    get GetPlayerDead() {
       return  this._playerDead;
    }
    get GetFiendDead() {
       return this._fiendDead;
    }
}