Update = {	init: function(){			},	verify: function(){			},	syncronize: function(callback){		$.ajaxJSONP({		  url: 'http://touchspeak.conheca.me/Services/update.php?callback=?',		  success: function(data){			DataBase.updateUsuario(data.Usuario);			DataBase.updateAcao(data.Acao);			DataBase.updateListaAcao(data.ListaAcao);		  }		});	},	download: function(src, callback){		function fail(evt) {			Debug.log("Update(download){code} " + evt.target.error.code, false);		}	        window.requestFileSystem( LocalFileSystem.PERSISTENT, 0, function (fileSystem) {			fileSystem.root.getDirectory("TouchSpeak",				{					create: true,					exclusive: false				}, 				function (dirEntry){					var fileTransfer = new FileTransfer();					var fileName = "bbd74649e7fc1910b3e9b5620500705e.mp3";										fileTransfer.download("http://touchspeak.conheca.me/AppFiles/Audio/" + fileName, dirEntry.fullPath + "/" + fileName,					function(theFile) {						Debug.log("Update(download){" + theFile.toURL() + "}", true);						callback(true);					},					function(error) {						Debug.log("Update(download){source} " + error.source, false);						Debug.log("Update(download){target} " + error.target, false);						Debug.log("Update(download){code} " + error.code, false);						callback(false);					});				},fail);			}, 		fail);    }}