import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StoreService {
	private projects = [];
	private teamMembers = [
		{ id: 1, name: 'Janice Richardson' },
		{ id: 2, name: 'James Dean' },
		{ id: 3, name: 'Tim Clarkson' },
		{ id: 4, name: 'Rachel Miller' },
		{ id: 5, name: 'James Lance' },
	];
	private selectedTeamMembers: number[] = [];

	setSelectedTeamMembers(payload: number[]): void {
		this.selectedTeamMembers.push(...payload);
	}

	getSelectedTeamMembers() {
		return this.teamMembers.filter((user) =>
			this.selectedTeamMembers
				.map((id) => String(id))
				.includes(`${user.id}`)
		);
	}

	setProjects(): void {
		this.projects.push;
	}

	getTeamMembers() {
		return this.teamMembers;
	}

	constructor() {}
}
