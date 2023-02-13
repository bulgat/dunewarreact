export class BasaPurchaseUnitScienceHelp{
    GetUnitType=function(TehName,basaPurchaseUnitScience_ar){
        for(let itemUnit of basaPurchaseUnitScience_ar){
            if(itemUnit.TehName===TehName){
                return itemUnit;
            }
            console.log("99909 itemUnit.TehName = "+itemUnit.TehName+" id" ,itemUnit );
        }
        throw new Error("Not teh name");
    };
    ConvertIdInName=function(Id,basaPurchaseUnitScience_ar){
        for(let itemUnit of basaPurchaseUnitScience_ar){
            if(itemUnit.IdImage===Id){
                
                return itemUnit.TehName;
            }
            console.log(Id,"   99 eet id" ,itemUnit );
        }
        console.log("999097   GetIncrementUnit  HeroFleet  Id = ",Id)
        throw new Error("Not id teh Id = ",Id);
    }
    
}