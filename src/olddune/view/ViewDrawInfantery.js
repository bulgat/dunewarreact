import { View } from "./View";
import {ViewTactic} from './ViewTactic';

export class ViewDrawInfantery {
    constructor(){
        //console.log("# SS  tic     percent  ="  )
    };
    drawInfantaryAnim = function(ctx,tick,index,Yheight,ArmFiendUnit,countAnimInf,Fiend,
		_unitAnimInfanteryList,_unitTypesList
		){
			
		//var tickUnit = tick;
		ArmFiendUnit.SetTick(tick/20);

        
let countAnimIndex =tick%3;


		let imageUnitX = _unitAnimInfanteryList[countAnimIndex].sprite[0].x;
		let imageUnitY = _unitAnimInfanteryList[countAnimIndex].sprite[0].y;

		
			if (ArmFiendUnit!=undefined){

					//let countAnimInf = Math.round(ArmFiendUnit.ExplodeTickInt);
                    
					//console.log( "#__*****  SPLI  ArmFiendList[index].ExplodeTickInt= " +ArmFiendUnit.ExplodeTickInt);
					
					

					if (new View().GetDeadArmUnit(ArmFiendUnit)){

					
						//dead
						imageUnitX = _unitAnimInfanteryList[5].sprite[0].x;
						imageUnitY = _unitAnimInfanteryList[5].sprite[0].y;
					}
					if (new View().GetAttackArmUnit(ArmFiendUnit)){

						if(countAnimIndex>5)	{
							imageUnitX = new View()._unitTypesList[4].attack[0].x;
							imageUnitY = new View()._unitTypesList[4].attack[0].y;
						}
					}
				let tickUnit = ArmFiendUnit.Tick;

				ArmFiendUnit.ExplodeTickInt +=.06;
                console.log("-countAnimInf--"+countAnimIndex+" A  ArmFiendUnit.ExplodeTickInt = "+ArmFiendUnit.ExplodeTickInt) ;
			}
			
			console.log( " =  A  = ",index,"=   typeUnit = ",window._viewTacticModel.VIEW_TACTIC_BATTLE.GetArmUnitPLayer(index),"   Fiend = " );
			let placeStartX =window._viewTacticModel.VIEW_TACTIC_BATTLE.GetArmUnitPLayer(index).PlaceStartX;

            let weightUnitPlace = -new View().WIDTH_TACTIC+placeStartX+ArmFiendUnit.Tick;

			let heightUnitPlace = new View().HEIGHT_TACTIC+(index*Yheight);


            console.log( " countAnimInf  ="+countAnimIndex +" tick ="+tick);

            //imageUnitX
			ctx.drawImage(window._viewTacticModel.infanteryUnitAnim,imageUnitX, imageUnitY,
				40, 40,
				weightUnitPlace,
				heightUnitPlace,
				45*new View().GetScalePerspective(index)/2,
				45*new View().GetScalePerspective(index)/2
			);

			

			if (ArmFiendUnit!=undefined){
                if (new View().GetDeadArmUnit(ArmFiendUnit)){
				new ViewTactic().drawExplodeAnim(ctx,index,ArmFiendUnit.ExplodeTickInt,4,weightUnitPlace,heightUnitPlace,
					window._viewTacticModel.explodeUnitAnim);
                }
			}
            return ctx;
	};
}