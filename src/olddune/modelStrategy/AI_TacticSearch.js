import {CoordinateSearch} from "./CoordinateSearch";
import {Point} from "./Point.js";

export class AI_TacticSearch{
	GetNearTacticHero = function (PrototypeHeroDemo_ar,NameHero) {
				
				var nearMap_ar = new CoordinateSearch().GetXmapNear();
				
				
				for (var heroInd =0; heroInd<PrototypeHeroDemo_ar.length;heroInd++) {
					
					if (NameHero.Id!=PrototypeHeroDemo_ar[heroInd].Id) {
						
					
						if (PrototypeHeroDemo_ar[heroInd].flagId!=NameHero.flagId) 
						{
							
							
							for (var pointInd=0;pointInd< nearMap_ar.length;pointInd++) 
							{
								//var kol = new Point(13,67);
								
								//console.log(nearMap_ar[pointInd][0]+"ye  o  ="+nearMap_ar[pointInd][1]+"   "+kol.X+"="+kol.Y);
								
								if(nearMap_ar[pointInd][0]+PrototypeHeroDemo_ar[heroInd].x==NameHero.x && nearMap_ar[pointInd][1]+PrototypeHeroDemo_ar[heroInd].y==NameHero.y) {

										return new Point(PrototypeHeroDemo_ar[heroInd].x,PrototypeHeroDemo_ar[heroInd].y);
									
								}
								
							}
							
						}
						
					}
					
				}
				return null;
				
	}
}