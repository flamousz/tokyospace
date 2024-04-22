import { NgModule } from "@angular/core";
import { IconQuestionGrayComponent } from "./icon-question-gray";
import { IconTokyospaceComponent } from "./icon-tokyospace";
import { IconHomeComponent } from "./icon-home";
import { IconWallet } from "./icon-wallet";
import { IconBell } from "./icon-bell";

@NgModule({
	imports: [
		IconQuestionGrayComponent,
		IconTokyospaceComponent,
		IconHomeComponent,
		IconWallet,
		IconBell
	],
	exports: [
		IconQuestionGrayComponent,
		IconTokyospaceComponent,
		IconHomeComponent,
		IconWallet,
		IconBell
	]
})


export class IconComponentModule {}