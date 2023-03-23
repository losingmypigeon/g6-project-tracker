import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalModule } from 'src/app/components/_modal';
import { AddTaskModule } from 'src/app/components/add-task/add-task.module';
import { AssignTeamMemberModule } from 'src/app/components/assign-team-member/assign-team-member.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		ModalModule,
		AddTaskModule,
		AssignTeamMemberModule,
	],
})
export class HomeModule {}
