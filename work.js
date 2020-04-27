

const MAXHIRANUM = 100;
const MAXKATANUM = 100;
const HIRACHS = ['あ', 'い', 'う', 'え', 'お'];
const HIRACHSLEN = HIRACHS.length;
const HIRARMS = ['a', 'i', 'u', 'e', 'o'];
const HIRARMSLEN = HIRARMS.length;
const KATACHS = [];
const KATARMS = HIRARMS;

function arrayToStr(arr){
    var finalStr = "";
    arr.forEach(element => {
        finalStr += element + ' ';
    });
    return finalStr;
}

var hiraToShow = [];
var hiraRms = [];
var hiraShowing = false;

$(document).ready(function(){
    $('#HiraShow').html('Show');
    $("#HiraSubmit").click(function(){
        var numHira = parseInt($("#numHira").val());
        if (numHira <= MAXHIRANUM && numHira >= 0){
            //valid numHira
            let i = 0;
            hiraToShow = [];
            hiraRms = [];
            
            for (i = 0; i < numHira; i++){
                let idHira = Math.floor(Math.random() * HIRACHSLEN);
                hiraToShow.push(HIRACHS[idHira]);
                hiraRms.push(HIRARMS[idHira]);
            }
            $('#HiraChs').html((arrayToStr(hiraToShow)));
            $('#HiraRms').html(' ');
            $('#HiraShow').html('Show');
            hiraShowing = false;
        }
        //console.log(numHira + 1);
    });
    $('#HiraShow').click(function(){
        if (hiraShowing){
            $('#HiraRms').html(' ');
            $('#HiraShow').html('Show');
            hiraShowing = false;
        }
        else{
            $('#HiraRms').html(arrayToStr(hiraRms));
            $('#HiraShow').html('Hide');
            hiraShowing = true;
        }
    });
});