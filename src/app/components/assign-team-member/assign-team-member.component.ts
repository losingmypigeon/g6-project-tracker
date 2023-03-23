import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
	selector: 'app-assign-team-member',
	templateUrl: 'assign-team-member.component.html',
	styleUrls: ['assign-team-member.component.scss'],
})
export class AssignTeamMemberComponent implements OnInit {
	@Output() taskData = new EventEmitter<Object>();
	addTeamMemberForm: FormGroup;
	teamMembers: any[];
	assignedTeamMembers: number[] = [];

	constructor(private readonly storeSrv: StoreService) {}

	ngOnInit(): void {
		this.initForm();
		this.teamMembers = this.storeSrv.getTeamMembers();
	}

	onSubmit(): void {
		if (this.addTeamMemberForm.invalid) {
			return;
		}
		this.taskData.emit(this.addTeamMemberForm.value);
	}

	onCheckChange(event: any) {
		const formArray: FormArray = this.addTeamMemberForm.get(
			'selectedTeam'
		) as FormArray;

		if (event.target.checked) {
			// Add a new control in the arrayForm
			formArray.push(new FormControl(event.target.value));
		} else {
			// find the unselected element
			let i: number = 0;
			formArray.controls.forEach((ctrl: FormControl) => {
				if (ctrl.value == event.target.value) {
					// Remove the unselected element from the arrayForm
					formArray.removeAt(i);
					return;
				}
				i++;
			});
		}
	}

	private initForm(): void {
		this.addTeamMemberForm = new FormGroup({
			selectedTeam: new FormArray([]),
		});
	}
}
