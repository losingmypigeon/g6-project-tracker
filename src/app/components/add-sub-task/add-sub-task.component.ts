import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'add-sub-task',
	templateUrl: 'add-sub-task.component.html',
	styleUrls: ['add-sub-task.component.scss'],
})
export class AddSubTaskComponent implements OnInit {
	@Output() taskData = new EventEmitter<Object>();
	addTaskForm: FormGroup;

	ngOnInit(): void {
		this.initForm();
	}

	onSubmit(): void {
		if (this.addTaskForm.invalid) {
			return;
		}
		this.taskData.emit(this.addTaskForm.value);
	}

	private initForm(): void {
		this.addTaskForm = new FormGroup({
			subTask: new FormControl(null, Validators.required),
		});
	}
}
