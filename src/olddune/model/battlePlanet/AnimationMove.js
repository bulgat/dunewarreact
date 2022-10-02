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
		    // var heroFleet = SetPostionFleet(UnitHeroGameObjectList, commandStrategy.GridFleet.GetId());



               new ControllerButton().SetCommandPerform(commandStrategy.Id,commandStrategy);
/*
                _animCaptureIsland.ResetCapture();

                MapWorldModel.SetChangeStateView(true);
                ControllerButton.UnlockBlock();
*/
                this.SetPostionFleetTile(null,//commandStrategy.GridFleet,
				null,//UnitHeroGameObjectList,
         null,//SceneList,
		 null,//heroFleet
		 );
		
	};
	SetPostionFleetTile = function(GridFleet, UnitHeroGameObjectList,
        SceneList, heroFleet)
    {
        //var heroZ = heroFleet.transform.position.z;
        //var tile = GetTileGameObject(SceneList, (int)GridFleet.SpotX, (int)GridFleet.SpotY);
        //heroFleet.transform.position = new Vector3(tile.transform.position.x, tile.transform.position.y, heroZ);
    };
}