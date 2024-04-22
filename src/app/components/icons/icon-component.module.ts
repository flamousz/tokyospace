import { NgModule } from "@angular/core";
import { IconQuestionGrayComponent } from "./icon-question-gray";
import { IconTokyospaceComponent } from "./icon-tokyospace";
import { IconHomeComponent } from "./icon-home";
import { IconWallet } from "./icon-wallet";

@NgModule({
	imports: [
		IconQuestionGrayComponent,
		IconTokyospaceComponent,
		IconHomeComponent,
		IconWallet
	],
	exports: [
		IconQuestionGrayComponent,
		IconTokyospaceComponent,
		IconHomeComponent,
		IconWallet
	]
})


export class IconComponentModule {}