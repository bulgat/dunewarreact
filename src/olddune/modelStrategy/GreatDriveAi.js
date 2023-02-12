import {MendMoveShip} from "./MendMoveShip.js";
import {ContactStateProceeding} from "./ContactStateProceeding.js";
import {Point} from "./Point.js";
import {AgentEvent} from "./AgentEvent.js";
import {CommandStrategy} from "./CommandStrategy.js";
import {ModelStrategy} from "./ModelStrategy";

export class GreatDriveAi{

    GreatImpDrivingAI = function (
        DispositionCountry_ar,
        FlagIdHero,
        PrototypeHeroDemo,
        Grid_ar,
        
        Island_ar,
        ShoalSeaBasa_ar,
        BasaPurchaseUnitScience_ar,
        HeroMax,
        GridTile_ar,GetIncrementUnitId) 
        {
            
            var mendMoveShip = new MendMoveShip();
            var CommandStrategy_ar = [];
            
    
            for (var Imperial = 0; Imperial < window._battlePlanetModel.GetDispositionCountry().length; Imperial++)
            {
                
                if (window._battlePlanetModel.GetDispositionCountry()[Imperial].PlayerControl!=true)  {
                
                
                    if (new ContactStateProceeding().ContactGlobalPeace(window._battlePlanetModel.GetDispositionCountry()[Imperial]))
                    {
                        /*
                        MendMovePeaceShip.moveFiend_MIR(DispositionCountry_ar[Imperial], NameHero_ar, Island_ar,
                                DispositionCountry_ar, Grid_ar, CommandStrategy_ar);
                                */
                    } 
                    else 
                    {
                        
                        var  DispositionCountryNameHero_ar = new ModelStrategy().GetHeroAll(window._battlePlanetModel.GetDispositionCountry()[Imperial].IdCountry,PrototypeHeroDemo);
                        
            
                        
                        for (var gridFleetInsex=0; gridFleetInsex<DispositionCountryNameHero_ar.length;gridFleetInsex++) {
                            
                            // move and search attack enemy.
                            //var point = TacticSearchIslandAndHero(_prototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex]);
                            if (DispositionCountryNameHero_ar[gridFleetInsex].GetTurnDone())
                            {
                                
                            } else {
                             
                             // old point 
                                var oldPoint = new Point(DispositionCountryNameHero_ar[gridFleetInsex].SpotX, DispositionCountryNameHero_ar[gridFleetInsex].SpotY);
                             
                                console.log( "1001 b ady! = ",GetIncrementUnitId );
                             
                             // move and search attack enemy.
                                let attackMoveFleet = mendMoveShip.PlaceFiendX(
                                        DispositionCountryNameHero_ar[gridFleetInsex],
                                        PrototypeHeroDemo,//NameHero_ar,
                                        Grid_ar,
                                        Island_ar,//Island_ar,
                                        window._battlePlanetModel.GetDispositionCountry(),//DispositionCountry_ar,
                                        CommandStrategy_ar,
                                        null,
                                        0,
                                        0,
                                        null,//NameHero_ar,
                                        null,//Sea,
                                        BasaPurchaseUnitScience_ar,//BasaPurchaseUnitScience_ar,
                                        GetIncrementUnitId
                                        );
    
                            console.log("666    Player=" ,DispositionCountryNameHero_ar[gridFleetInsex] );					 
                            console.log("667  attackMoveFleet =",attackMoveFleet);
                            if(attackMoveFleet){
                                if (DispositionCountryNameHero_ar[gridFleetInsex].FlagId===attackMoveFleet.Fleet.FlagId){
                                    console.error("Model Strategy Error - атака своего");
                                    //выкидываем результаты в мусор. Что-то не так с верхним скриптом - mendMoveShip.PlaceFiendX
                                    attackMoveFleet = null;
                                }		
                                console.log("668  FlagIdHero = "+DispositionCountryNameHero_ar[gridFleetInsex].FlagId+"  _flag = ");
                            }
    
    
                             let fleetSacrifive = new ModelStrategy().SetFleetSacrifive(
                                        attackMoveFleet,
                                        DispositionCountryNameHero_ar[gridFleetInsex],
                                        oldPoint);
                                        
                                        let heroPlayerSacrifive = fleetSacrifive.HeroPlayerSacrifive;
                                        oldPoint = fleetSacrifive.OldPoint;
                                        
                                        if (heroPlayerSacrifive != null)
                                        {
                                            // command Attack fleet 
                                            console.log("GGGGG  PUSH  commandStrategy =" )
    
                                            CommandStrategy_ar.push(new ModelStrategy().GetCommandAttack(DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet, 
                                            heroPlayerSacrifive,
                                                    attackMoveFleet, oldPoint));
                                            
    
    
                                            let agentEvent =  new AgentEvent(heroPlayerSacrifive,
                                                    DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet,
                                                    true, attackMoveFleet.LongRange,CommandStrategy_ar);
    
                                                    return agentEvent;
    /*
                                            return new AgentEvent().GetButtonEventModelMeeleeFleet(heroPlayerSacrifive,
                                                    DispositionCountryNameHero_ar[gridFleetInsex],//gridFleet,
                                                    true, attackMoveFleet.LongRange);
    */
                                        }
                                //mendMoveShip.PlaceFiendX(PrototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex],Grid_ar,CommandStrategy_ar);
                                /*
                                var point =Operate(_prototypeHeroDemo,DispositionCountryNameHero_ar[gridFleetInsex]);
                                if (point!=null){
                                    
                                }
                                */
                            }
                            
                        }
                    }
                    let fleet = new ModelStrategy().RefillHero(window._battlePlanetModel.GetDispositionCountry()[Imperial], //DispositionCountry_ar[Imperial],
                            PrototypeHeroDemo, //NameHero_ar,
                            Island_ar, //Island_ar,
                            ShoalSeaBasa_ar, //ShoalSeaBasa_ar,
                            window._battlePlanetModel.GetDispositionCountry(), //DispositionCountry_ar, 
                            BasaPurchaseUnitScience_ar, HeroMax, GridTile_ar);
                    
                    if (fleet != null)
                    {
                        var commandStrategy = new CommandStrategy();
                        commandStrategy.NameCommand = CommandStrategy.Type.CreateFleet;
                        commandStrategy.SetGridFleet(fleet);
    
                        CommandStrategy_ar.push(commandStrategy);
                        //PrototypeHeroDemo.GetHeroFleet().add(fleet);
                    }
                    
                }
            }
            let agentEventCommand =  new AgentEvent(null,null,null,null,CommandStrategy_ar);

            console.log( "100 countAnim return CommandStrategy_ar =",CommandStrategy_ar);
            console.log( "101 =  A     typeUnit = ",agentEventCommand,"   Fi " );
            return agentEventCommand;
   
        };
}