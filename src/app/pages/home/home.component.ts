import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/_modal';
import { StoreService } from 'src/app/services/store.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	selectedTeamMembers: any[] = [];

	constructor(
		private modalSrv: ModalService,
		private readonly storeSrv: StoreService
	) {}

	ngOnInit() {
		this.selectedTeamMembers = this.storeSrv.getSelectedTeamMembers();
	}

	onNewTaskData(event: any): void {
		console.log(event);
	}

	openModal(id: string) {
		this.modalSrv.open(id);
	}

	closeModal(id: string) {
		this.modalSrv.close(id);
	}

	assignNewTeamMember(event: any): void {
		this.storeSrv.setSelectedTeamMembers(
			event.selectedTeam.map((id) => parseInt(id))
		);
		this.selectedTeamMembers = this.storeSrv.getSelectedTeamMembers();
	}
}
