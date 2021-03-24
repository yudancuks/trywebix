import {JetView} from "webix-jet";

export default class TablesView extends JetView{
	config(){
		return {
			type:"space",
			rows:[
				{
					type:"wide", cols:[
						{ $subview:"tables.transactions" },
						{ $subview:"tables.films" }
					]
				}
				
			]
		};
	}
}