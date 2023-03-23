import { Component } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
	selector: 'app-add-project',
	templateUrl: './add-project.component.html',
	styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
	constructor(private modalService: ModalService) {}

	ngOnInit() {}

	onNewSubTaskData(event: any): void {
		console.log(event);
	}

	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}

	openSubtaskModal(id: string) {
		this.openModal(id);
		this.closeModal('add-new-project');
	}
}
