import {ControllerConstant} from "../controller/ControllerConstant";
import {ControllerButton} from "../controller/ControllerButton";
import {BattlePlanetModel} from "../model/BattlePlanetModel";
import {IslandDemoMemento} from "../model/memento/IslandDemoMemento";
import {AI_Behavior_Existence} from "../modelStrategy/AI_Behavior_Existence";
import {TileBox} from "./TileBox";
import {Point} from "../modelStrategy/Point";
import {ButtonEvent} from "../model/ButtonEvent";
import {CreateFleetFast} from "../modelStrategy/CreateFleetFast.js";
import {ViewArmUnit} from "./ViewArmUnit.js";
import {ViewTacticModel} from "./ViewTacticModel";
import {ViewDrawInfantery } from './ViewDrawInfantery';
import {View} from './View';

export class ViewTactic{


	ShowTacticBattle = function(ctx,currentFrameTime,_battleTerra,_countStepResult,
		_countAnimInfantery,screenList,ResetCommStrCurrent)
	{
			var tick = ( currentFrameTime - _battleTerra.Time);
	
			this.DrawTacticFonPlanetBacground(ctx,screenList);
			this.TextTacticFon(ctx);
	
				var idHero = window._battlePlanetModel.GetSelectHeroId();


				//let ArmListPlayer =window._battlePlanetModel._mapWorldModel._tactic.GetTimeArmUnitPLayerList()
				//let ArmFiendList =window._battlePlanetModel._mapWorldModel._tactic.GetTimeArmUnitFiendList();
				let ArmListPlayer =window._controllerTactic.GetTacticModel().GetTimeArmUnitPLayerList()
				let ArmFiendList =window._controllerTactic.GetTacticModel().GetTimeArmUnitFiendList();
				//window._controllerTactic.GetTacticModel()
				//3500
				let maxLengthMovie = 2000;
			
				let stepTickResultTacticInt = maxLengthMovie/window._controllerTactic.GetTacticModel().GetUnitResultTacticLength()
				let percentStep = tick%stepTickResultTacticInt;
				var pointTank = new Point(117, 45);
	
		//GetPlayerFleet
        //GetFiendFleet
       

        let indexImage = new View().GetIndexFlagImage(window._controllerTactic.GetTacticModel().GetPlayerFleet().FlagId);
        let indexImageFiend = new View().GetIndexFlagImage(window._controllerTactic.GetTacticModel().GetFiendFleet().FlagId);
        
				
                
	
				//start
				if( percentStep >= 0 && percentStep<17)
				{
					
					if (_countStepResult<window._controllerTactic.GetTacticModel()._unitResultTactic_ar.length){
						//UnitIdDead
						
	
						//block move ViewArmUnit
	
						let unitDead = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetArmUnitWithId(window._controllerTactic.GetTacticModel().GetResultTacticBattleToIndex(_countStepResult).UnitIdDead);
						let unitWin = window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetArmUnitWithId(window._controllerTactic.GetTacticModel().GetResultTacticBattleToIndex(_countStepResult).UnitIdWin);
						unitDead.ViewArmUnit = new ViewArmUnit(true,tick,false,unitDead.Id);
						unitWin.ViewArmUnit = new ViewArmUnit(false,tick,true,unitWin.Id);
	
						this.MutationViewArmUnit(ArmListPlayer,unitDead,"Dead");
						this.MutationViewArmUnit(ArmFiendList,unitDead,"Dead");
	
						this.MutationViewArmUnit(ArmListPlayer,unitWin,"Win");
						this.MutationViewArmUnit(ArmFiendList,unitWin,"Win");
	
						
						_countStepResult++;
						
				}
			}
	
			//if(tick>3800) {
			//3500
				//_mapWorldModel._tactic.ReleaseDead();
			//}

	
			var Yheight = 20;
			//draw player
			for(let i=0;i<ArmListPlayer.length;i++)
			{
				new View().drawUnitAnim(ctx,tick,i,Yheight,ArmListPlayer[i],false);
	
			}
	
			//draw fiend
			var typeUnitFiend = window._controllerTactic.GetTacticModel().heroFiend.type;
	
			ctx.save();
				
			ctx.scale(-1, 1);
	
			

	
				
				//draw fiend
				//attack
				for(let i=0;i<ArmFiendList.length;i++)
				{
					if (ArmFiendList[i].ArmUnit.GetUnit() != 2){
                         
						//typeUnitFiend
						new View().drawUnitAnim(ctx,tick,i,Yheight,ArmFiendList[i],true);
					} else {
		
							 new ViewDrawInfantery().drawInfantaryAnim(ctx,tick,i,Yheight,ArmFiendList[i],null,true,
								new View()._unitAnimInfanteryList);
		
		
								
			
			
			
						//ctx.restore();
					}
				}
	
	
				ctx.restore();
	
	
			// attack
			if(currentFrameTime>_battleTerra.Time+(700*5))
			{
	
				// end show attack
				_battleTerra.Show=false;
				new View().RemoveCommandSteck();
				ResetCommStrCurrent();
	
	
	
				var indexGridFleetVictim;
	
					for(var y=0; y<window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().length; y++){
						if (window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet()[y].Id==_battleTerra.GridFleetVictimId)
						{
							indexGridFleetVictim = y;
						}
					}
	
					window._controllerTactic.GetTacticModel().ReleaseDead(_battleTerra.GridFleetOldPoint);
	
	
			}

           // indexImageFiend
            this.drawFlagUnitTactic(ctx, window._ViewImage._screenList,indexImage,false);
            this.drawFlagUnitTactic(ctx, window._ViewImage._screenList,indexImageFiend,true);

		return _countStepResult;
	};
	drawFlagUnitTactic(ctx,screenList,indexImage,Fiend){
        let flagWidth = 400;
        let size = 100
        let fiendX = Fiend?new View().WIDTH_TACTIC-size:0;
		ctx.drawImage(screenList[3], flagWidth*indexImage, 0, flagWidth, 433,
			40+fiendX,
			100,
			size/2, size/2);
            
	}
	DrawTacticFonPlanetBacground=function(ctx,screenList){
		ctx.drawImage(screenList[1], window.tileW/2, window.tileH/2, new ViewTacticModel().WIDTH_FON, new ViewTacticModel().HEIGHT_FON);
		ctx.drawImage(screenList[2], window.tileW/2, window.tileH/2, new ViewTacticModel().WIDTH_FON, new ViewTacticModel().HEIGHT_FON);
	}
	TextTacticFon=function(ctx){
		ctx.font = '18px serif';
		ctx.fillStyle = "yellow";
		ctx.fillText('total battle:' ,30,40);
		//ctx.fillText('player dead = '+window._battlePlanetModel._mapWorldModel._tactic.GetPlayerDead ,30,60);
		//ctx.fillText('fiend dead = '+window._battlePlanetModel._mapWorldModel._tactic.GetFiendDead ,30,80);
		ctx.fillText('player dead = '+window._controllerTactic.GetTacticModel().GetPlayerDead ,30,60);
		ctx.fillText('fiend dead = '+window._controllerTactic.GetTacticModel().GetFiendDead ,30,80);
	}
	MutationViewArmUnit = function(ArmListPlayer,unit,NameEventFight){
		for(let armUnutIndex in ArmListPlayer){
			//console.log(ArmListPlayer[armUnutIndex].ArmUnit.Id+" = FFF  = "+unit.Id+ " "+NameEventFight);
			//console.log(ArmListPlayer[armUnutIndex]);
	
			
			
			if(ArmListPlayer[armUnutIndex].ArmUnit.Id ===unit.Id ){
				if(NameEventFight==="Dead"){
					ArmListPlayer[armUnutIndex].DeadUnit = true;
				} else {
					ArmListPlayer[armUnutIndex].AttackUnitWin = true;
				}
			}
			
		}
	}
	drawUnitAnim = function(ctx,tickUnit,index,Yheight,ArmUnit,Fiend){



		let typeUnit =ArmUnit.ArmUnit.GetUnit();
		
	


		let imageUnitX = new View()._unitTypesList[typeUnit].sprite[0].x;
		let imageUnitY = new View()._unitTypesList[typeUnit].sprite[0].y;
		let pointTank = new Point(117, 45);
		var Yheight = 20;
		var startPlace = this.GetStartPLaceUnitTactic(Fiend);
		ArmUnit.SetTick(tickUnit/20);
		

		let placeStartX=0;
			if (Fiend){

				placeStartX =window._controllerTactic.GetTacticModel().GetTimeArmUnitFiend(index).PlaceStartX;
				
				
			} else {

				placeStartX =window._controllerTactic.GetTacticModel().GetTimeArmUnitPlayer(index).PlaceStartX;
			}
			

			if (ArmUnit!=undefined){

                //.06
                ArmUnit.ExplodeTickInt +=.16;
				var countAnimInf = Math.round(ArmUnit.ExplodeTickInt);
				if (new View().GetDeadArmUnit(ArmUnit)){
					tickUnit = ArmUnit.Tick;
					//dead
					imageUnitX = new View()._unitTypesList[typeUnit].dead[0].x;
					imageUnitY = new View()._unitTypesList[typeUnit].dead[0].y;
				} else {
					//life
					//ArmUnit.SetUnitSpotX(startPlace+placeStartX+(tickUnit/20));
				}
				if (new View().GetAttackArmUnit(ArmUnit)){
					//attack
					if(countAnimInf>5)	{
						imageUnitX = new View()._unitTypesList[typeUnit].attack[0].x;
						imageUnitY = new View()._unitTypesList[typeUnit].attack[0].y;
					}
				}

			}

			ArmUnit.SetUnitSpotX(startPlace+placeStartX+ArmUnit.Tick);

			var heightUnitPlace = new View().HEIGHT_TACTIC+(index*Yheight);

			

			ctx.drawImage(window._viewTacticModel.tankUnitScreen, imageUnitX, imageUnitY,
				pointTank.X, pointTank.Y,
				ArmUnit.UnitSpotX,
				heightUnitPlace,
				pointTank.X*new View().GetScalePerspective(index)/2,
				pointTank.Y*new View().GetScalePerspective(index)/2
			);

			

			if (ArmUnit!=undefined){
				if (new View().GetDeadArmUnit(ArmUnit)){
					this.drawExplodeAnim(ctx,index,ArmUnit.ExplodeTickInt,1,ArmUnit.UnitSpotX,
						heightUnitPlace,
						window._viewTacticModel.explodeUnitAnim);
				}
			}
	};
	
	drawExplodeAnim = function(ctx,i,ExplodeTickInt,Scale,weightUnitPlace,heightUnitPlace,
		explodeUnitAnim){
		
		
		

		var countAnimInf = Math.round(ExplodeTickInt);
		var pointTank = new Point(97, 97);
	
		//ctx.save();
			//ctx.scale(-1, 1);
		if(countAnimInf>5)	{
	
			return;
		}

		var correctYinfantery =0;
		if (Scale===4)
		{
			//infantery 85
			correctYinfantery =85;
		}
		//4
		heightUnitPlace -=pointTank.Y-5-correctYinfantery ;//Scale;
	
	
		ctx.drawImage(explodeUnitAnim,
					new View()._explodeAnimList[countAnimInf].sprite[0].x,
					new View()._explodeAnimList[countAnimInf].sprite[0].y,
					pointTank.X,
					pointTank.Y,
					//-WIDTH_TACTIC+placeStartX+(tickUnit/20)-(pointTank.X/7),
					weightUnitPlace,
					//(HEIGHT_TACTIC+(i*Yheight)-correctY),
					heightUnitPlace,
					pointTank.X*new View().GetScalePerspective(i)/Scale,
					pointTank.Y*new View().GetScalePerspective(i)/Scale
				);
					
					
	};
	GetStartPLaceUnitTactic(Fiend) {
		return Fiend? -new View().WIDTH_TACTIC:100;
	}
}