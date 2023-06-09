﻿import {
	Component,
	ViewEncapsulation,
	ElementRef,
	Input,
	OnInit,
	OnDestroy,
	HostListener,
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'jw-modal',
	templateUrl: 'modal.component.html',
	styleUrls: ['modal.component.less'],
	encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
	@Input() id: string;
	@Input() style: string;
	private element: any;

	constructor(private modalService: ModalService, private el: ElementRef) {
		this.element = el.nativeElement;
	}

	ngOnInit(): void {
		// ensure id attribute exists
		if (!this.id) {
			console.error('modal must have an id');
			return;
		}

		// move element to bottom of page (just before </body>) so it can be displayed above everything else
		document.body.appendChild(this.element);

		// close modal on background click
		this.element.addEventListener('click', (el: Event) => {
			if ((el.target as HTMLElement).className === 'jw-modal') {
				this.close();
			}
		});

		// add self (this modal instance) to the modal service so it's accessible from controllers
		this.modalService.add(this);
	}

	// open modal
	open(): void {
		this.element.style.display = 'block';
		document.body.classList.add('jw-modal-open');
	}

	// close modal
	close(): void {
		this.element.style.display = 'none';
		document.body.classList.remove('jw-modal-open');
	}

	@HostListener('document:keydown.escape', ['$event'])
	onEscapeKey(event: KeyboardEvent) {
		this.close();
	}

	// remove self from modal service when component is destroyed
	ngOnDestroy(): void {
		this.modalService.remove(this.id);
		this.element.remove();
	}
}
