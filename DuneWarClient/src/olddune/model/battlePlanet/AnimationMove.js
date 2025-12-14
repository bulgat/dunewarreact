import {ControllerButton} from "../../controller/ControllerButton";

export class AnimationMove{
	AnimationCommand = function(
	StageWidthX,
	Tick,
            commandStrategy,
            _loadBibleImage, _width,
            _animCaptureIsland,
            _createHero, SlipX, SlipY,
            BasaPurchaseUnitScience_ar,
             SceneList, SadIslandId, SelectAttackId, UnitHeroGameObjectList
	) {

               new ControllerButton().SetCommandPerform(commandStrategy.Id,commandStrategy);

                this.SetPostionFleetTile(null,//commandStrategy.GridFleet,
				null,//UnitHeroGameObjectList,
         null,//SceneList,
		 null,//heroFleet
		 );
		
	};
	SetPostionFleetTile = function(GridFleet, UnitHeroGameObjectList,
        SceneList, heroFleet)
    {
    };
}