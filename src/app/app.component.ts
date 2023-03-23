import { Component, OnInit } from '@angular/core';
import { ModalService } from './components/_modal/modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'project-tasks-app';
	isHidden = false;

	constructor(private modalService: ModalService) {}

	ngOnInit() {}

	toggleDropdown() {
		this.isHidden = !this.isHidden;
	}

	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}
}
