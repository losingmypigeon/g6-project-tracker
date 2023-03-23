import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { ModalModule } from '../_modal';
import { AddSubTaskModule } from '../add-sub-task/add-sub-task.module';

@NgModule({
	declarations: [AddProjectComponent],
	imports: [CommonModule, ModalModule, AddSubTaskModule],
	exports: [AddProjectComponent],
})
export class AddProjectModule {}
