Template.appChat.helpers({
	messages: function (){
			return Messages.find({}, {sort: {createdAt: -1}, limit: 10})
	}


});

Template.appChat.events({
	"click .btnDelete": function (event){
		Messages.remove(this._id);
		return false;
	},
	"click .btnAdd": function (event){
		
			Messages.insert({
				Sno: $(".txtSno").val(),
				Ln: $(".txtLn").val(),
				Fn: $(".txtFn").val(),
				Mn: $(".txtMn").val(),
				C: $(".txtC").val(),
				Cr: $(".txtCr").val(),
				Yl: $(".txtYl").val(),
				Bt: $(".txtBt").val(),
				createdAt: new Date()
			});
			$(".txtSno").val(""),
				$(".txtLn").val("");
				$(".txtFn").val("");
				$(".txtMn").val("");
				$(".txtC").val("");
				$(".txtCr").val("");
				$(".txtYl").val("");
				$(".txtBt").val("");	
				$(".txtSno").focus();
				return false;
				
	}
	
});
