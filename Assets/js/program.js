Program = {	init: function(){			},	run: function(){			},	playAudio: function(url){		var media = new Media(url.replace('file:/', ''), function(){			Debug.log('Program(playAudio)', true);		}, function(){			Debug.log('Program(playAudio)', false);		});				media.play();    }}