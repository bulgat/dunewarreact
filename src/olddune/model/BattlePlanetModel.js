import {VictoryStipulation} from "../modelStrategy/VictoryStipulation.js";
import {MendMoveAbleFire} from "../modelStrategy/MendMoveAbleFire.js";
import {Point} from "../modelStrategy/Point.js";
import {ModelStrategy} from "../modelStrategy/ModelStrategy.js";
import {ButtonEvent} from "../model/ButtonEvent.js";
import {GridScenario} from "../scenario/GridScenario";
import {InitGlobalParams} from "../scenario/InitGlobalParams";
import {MapWorldModel} from "../mapWorld/MapWorldModel"
import { PrototypeHeroDemo } from "../model/prototype/PrototypeHeroDemo";
import { IslandDemoMemento } from "../model/memento/IslandDemoMemento.js";
import {CreateGridScenario} from '../scenario/CreateGridScenario';



export class BattlePlanetModel{
    //ObstacleMap = 2
	ObstacleMap = 1;
	SelectHeroId =1;
	FlagIdHero = 9;
	_BattlePlanetModel;
	BasaPurchaseUnitScience_ar = [];
	OfferNameHero_ar = [ "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ", "пїЅпїЅпїЅпїЅпїЅ" ];
	UnitId =0;
	DispositionCountryList =[];
	_VictoryScenario;
	_mapWorldModel;

	constructor(){
        var initGlobalParams = new InitGlobalParams();
        this.BasaPurchaseUnitScienceAll(initGlobalParams.InitGlobalParams());
        this.DispositionCountry_ar = [];
        var _gridScenario = new GridScenario();
        
		this._VictoryScenario = new VictoryStipulation(_gridScenario);
        this._mapWorldModel = new MapWorldModel();
        this._mapWorldModel._prototypeHeroDemo = new PrototypeHeroDemo();
		this._mapWorldModel._prototypeHeroDemo.HeroFleetInit();
		this._mapWorldModel._islandDemoMemento = new IslandDemoMemento();
		this._mapWorldModel._islandDemoMemento.Init();
        this.InitScenario(_gridScenario);
        /*
       let island_ar = _gridScenario.Init(this.FlagIdHero,this.BasaPurchaseUnitScience_ar,
        this.GetIncrementUnitId.bind(this),this._mapWorldModel._prototypeHeroDemo);
        this._mapWorldModel._islandDemoMemento.AddIslandAll(island_ar);
        */
        new CreateGridScenario().AddCountry(this);
	}
    InitScenario(gridScenario){
        let island_ar = gridScenario.Init(this.FlagIdHero,this.BasaPurchaseUnitScience_ar,
            this.GetIncrementUnitId.bind(this),this._mapWorldModel._prototypeHeroDemo);
            this._mapWorldModel._islandDemoMemento.AddIslandAll(island_ar);
    }
    get MapWorldModelPlanetModel(){
        return this._mapWorldModel;
    }
    get GetVictoryScenario(){
     return this._VictoryScenario;
    }
    GetIncrementUnitId(){
        
        return this.UnitId++;
    }
	DispositionCountryAdd = function(Country) {
		this.DispositionCountryList.push(Country);
	};
	GetDispositionCountry = function() {
		
		return this.DispositionCountryList;
	};
    GetDispositionCountryWithId = function(ContryId) {
		for(let item of this.DispositionCountryList){
           
            if (item.IdCountry === ContryId){
                return item;//.FlagImage 
            }
        }
		return 0;
	};

	GetBattlePlanetModelSingleton = function() {
        if (this._BattlePlanetModel == null) {
            this._BattlePlanetModel = new BattlePlanetModel();

        }
        return this._BattlePlanetModel;
    };
	SetSelectHeroId = function(selectHeroId) {
        this.SelectHeroId = selectHeroId;
    };
	GetSelectHeroId = function(){
		return this.SelectHeroId;
	};
	GetIndexHero = function(SelectHeroId,NameHero_ar) {
		for(var i=0;i<NameHero_ar.length;i++){
			if(NameHero_ar[i].GetId()==SelectHeroId){
				return i;
			}
		}
		return undefined;
	}
	
	GetPathSelectHero = function(
        prototypeHeroDemo,
            MapShoalSeaBasa_ar,
            islandDemoMemento,
            GridTile_ar,
            PathHeroName,
            AttackHeroName,
             SpeedStatic,
             fleetFiend,
            fleetPlayer,
             GlobalParamsTimeQuick,
             GlobalParamsGale,
             SelectHeroId,
             FlagIdHeroFleet
            )
    {
        
        
  
        var gridFleet = this.GetHeroWithId(prototypeHeroDemo.GetHeroFleet(), SelectHeroId);



        if (gridFleet == null)
        {

            return [];
        }
		
		
        if (FlagIdHeroFleet == 0) 
        {
            FlagIdHeroFleet = gridFleet.GetFlagId();
        }
		
        var gridFleetSpeed = gridFleet.GetSpeed();
		
     
   
        if (SpeedStatic)
        {
            gridFleetSpeed = gridFleet.GetPowerReserve();

            // emulation set speed fleet.

        }
      
        var range = false;
		
        if (fleetFiend != null && fleetPlayer != null)
        {
            console.log("0099 D  Ur exIm  "  )
            range = new MendMoveAbleFire().DetermineAbleFirePlayer(fleetFiend, fleetPlayer, gridFleet,
                    new Point(gridFleet.SpotX + 2, gridFleet.SpotY + 2),
                    GlobalParamsTimeQuick, GlobalParamsGale);

        }
        else
        {
            range = gridFleet.GetRange();
        }
        console.log("0100   GlobalVictory   -countAnimIn FiendUnit.ExplodeTick  = ",gridFleet.GetAttackDone() ) ;
 
        let selectPath_ar = this.SelectHeroPath(gridFleet,
                prototypeHeroDemo,
                FlagIdHeroFleet,
                MapShoalSeaBasa_ar, islandDemoMemento, GridTile_ar,
                PathHeroName, AttackHeroName, gridFleetSpeed, range);

                console.log( "0101  _PowerReserve ="+gridFleet.GetPowerReserve()+"  ndHero_ar = " ,selectPath_ar );

                return selectPath_ar;
    };
	SelectHeroPath = function(HeroFleet,
            prototypeHeroDemo,
            flagIdHero, 
            shoalSeaBasa_ar,
            islandDemoMemento,
            GridTile_ar,
            PathHeroName, AttackHeroName, HeroFleetSpeed, range) {
				
		if (HeroFleet == null)
        {
            return [];
        }
		


        var buttonEvent_ar = [];
		var modelStrategy = new ModelStrategy();

 

        if (modelStrategy.GetHeroAll(flagIdHero, prototypeHeroDemo.GetHeroFleet()).length > 0)
        {
          
            if (HeroFleet.GetFlagId() == flagIdHero)
            {


                if (HeroFleet.GetPowerReserve() > 0)
                {
                    
					var wayRude_ar = modelStrategy.CreateVariationWay(HeroFleetSpeed);



                    var wayGotoModel_ar =
                            modelStrategy.SelectVariationWayFleet(HeroFleet, wayRude_ar,
                            this.DispositionCountry_ar, shoalSeaBasa_ar,
                            islandDemoMemento.GetIslandArray(), prototypeHeroDemo, GridTile_ar);



					wayGotoModel_ar.forEach(function(wayPoint)
                    {
						
                        
                        if (wayPoint.PathGoto_ar.length <= HeroFleetSpeed + 1)
                        {

                            let pointHero = new Point(wayPoint.X, wayPoint.Y);
                            
                            if (modelStrategy.AllowPointMap(shoalSeaBasa_ar, pointHero))
                            {
                                
                              
                                var map_ar_ar = modelStrategy.PreparationMap(
                                        GridTile_ar,
                                        prototypeHeroDemo.GetHeroFleet(),
                                        HeroFleet.GetFlagId(),
                                        window._battlePlanetModel.DispositionCountry_ar,
                                        true,
                                        HeroFleet.GetSea(),
                                        islandDemoMemento.GetIslandArray());


 //PrintMap(GridTile_ar,map_ar_ar);
 


                                if (map_ar_ar[pointHero.X][pointHero.Y] != new BattlePlanetModel().ObstacleMap)
                                {
                                    

                                    var modelEvent = new ButtonEvent();
                                    modelEvent.HeroFleet = HeroFleet;
                                    modelEvent.Point = pointHero;
                                    modelEvent.PathGoto_ar = wayPoint.PathGoto_ar;
                                    modelEvent.TypeEventId = 1;
                        
                                    modelEvent.NameEvent = PathHeroName;
                                    modelEvent.MoveAI = false;
                                    buttonEvent_ar.push(modelEvent);

                                }
                           
						   }
                        
						}
                     
					 });
               
				}
				
            }
         
            var attack = !HeroFleet.GetAttackDone() && HeroFleet.GetPowerReserve() <= 0;
            
			console.log("0102   this.Disposi  = ",HeroFleet.GetAttackDone()," === ",HeroFleet.GetPowerReserve() );

            if (attack)
            {
                // click Attack
                // Is long range unit?

                var fiendHeroWar_ar = this.SelectHeroAttacSemikPath(range, HeroFleet, prototypeHeroDemo,
				shoalSeaBasa_ar);



                fiendHeroWar_ar.forEach(function(attackFiendFleetWar)
                {

                    var pointAttack = new Point(attackFiendFleetWar.SpotX, attackFiendFleetWar.SpotY);


                    var modelEvent = new ButtonEvent();
                    modelEvent.HeroFleet = HeroFleet;
                    modelEvent.VictimFleet = attackFiendFleetWar;
                    modelEvent.Point = pointAttack;
                    modelEvent.TypeEventId = 1;
                    modelEvent.NameEvent = AttackHeroName;
       
                    modelEvent.MoveAI = false;
                    modelEvent.LongRange = new ModelStrategy().GetDistanceSQRT(
                            new Point(HeroFleet.SpotX, HeroFleet.SpotY),
                            pointAttack);
					modelEvent.PathGoto_ar =[];
					//modelEvent.PathGoto_ar.push(pointAttack);	
						
                    buttonEvent_ar.push(modelEvent);

                });
				
            }

        }

        return buttonEvent_ar;
	};
	GetHeroWithId = function(NameHero_ar, SelectHeroId)
    {
		
        if (NameHero_ar != null)
        {
            for (var i=0; i<NameHero_ar.length;i++)
            {
                
                if (NameHero_ar[i].GetId() == SelectHeroId)
                {
                    return NameHero_ar[i];
                }
            }
        }
        return null;
    }
	SelectHeroAttacSemikPath = function(Range, HeroFleet, prototypeHeroDemo,
        shoalSeaBasa_ar) {
        var fiendHeroWar_ar;

        if (Range)
        {
            fiendHeroWar_ar = ModelStrategy.PreparationAttackFleet(HeroFleet,
                    this.DispositionCountry_ar,
                    prototypeHeroDemo.GetHeroFleet(),
                    shoalSeaBasa_ar,
                    ModelStrategy.GetXmapNear(false)
                 );

        }
        else
        {


            fiendHeroWar_ar = new ModelStrategy().PreparationAttackFleet(HeroFleet,
                       this.DispositionCountry_ar,
                       prototypeHeroDemo.GetHeroFleet(),
                       shoalSeaBasa_ar,
                       new ModelStrategy().GetMapFlagIslandArray()
                    );
        }
        return fiendHeroWar_ar;
    };
	GetBasaPurchaseUnitScience = function() {
		return this.BasaPurchaseUnitScience_ar;
	};
	InitBasaPurchaseUnitScience= function()
    {
        this.BasaPurchaseUnitScience_ar= [];
    };
    BasaPurchaseUnitScienceAdd= function(gridCrewScience)
    {
		
		
        this.BasaPurchaseUnitScience_ar.push(gridCrewScience);
		
    };
    BasaPurchaseUnitScienceAll= function(gridCrewScience_ar)
    {
		
		
        this.BasaPurchaseUnitScience_ar =gridCrewScience_ar;
		
    };


	GotoGlobalFail = function() {
		
	};

	GetIslandWithGridFleet = function(Island_ar, gridFleet)
    {
        return new ModelStrategy().GetIsland(Island_ar,
                this.DispositionCountry_ar, gridFleet.SpotX, gridFleet.SpotY);
    };
	GotoPlanetWorld = function()
    {
		
	};
    GotoGlobalWin = function()
    {
        //LoadSceneChange.LoadSceneRotation("GlobalWin");
    
    }
    GotoSuperGlobalWinEnd=function()
    {
        //throw new Exception("GotoSuperGlobalWinEnd");

    }
}