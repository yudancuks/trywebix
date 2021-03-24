import {JetView} from "webix-jet";
import {allpayments} from "models/allpayments";

export default class TransactionsView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true, tooltip:true,
			columns:[
				{
					id:"date", header:"Date",
					fillspace:1, minWidth:100,
					sort:"date", format:webix.Date.dateToStr("%j %F")
				},
				{
					id:"name", header:{
						text:"Purchase",
						tooltip:"Click to sort the list by shops"
					},
					fillspace:4, minWidth:200, sort:"text"
				},
				{
					id:"sum", header:"Sum", sort:"int",
					fillspace:1.5, minWidth:90,
					format:webix.i18n.priceFormat
				}
			]
		};
	}
	init(grid){
		grid.sync(allpayments);
	}
}