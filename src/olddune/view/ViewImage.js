export class ViewImage{
    _screenList;
    _attackScreenURL = [
        "/imageDune/duneDefeat.jpg",
        "/imageDune/cosmosFon.jpg",
        "/imageDune/desertFon.png",
        "/imageDune/shieldLine.png"
    ];
    LoadImage =function(){
        this._screenList=[];
        for(var i=0;i<this._attackScreenURL.length;i++){
            this._screenList[i] = new Image();
            this._screenList[i].src = this._attackScreenURL[i];
            this._screenList[i].onerror = function() {
                //alert(attackScreenURL[i]+" Failed loading tileset.");
                console.error(i+"  == "+this._attackScreenURL[i]+" Failed loading tileset.");
            };
            this._screenList[i].onload = function() { };
        }
    }
}