import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContainerComponent } from './components/container/container.component';
import { ModalComponent } from './modals/modal/modal.component';
import { Subscription } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, ContainerComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  closeModalSubscription$!: Subscription;

  showModal: boolean = false;
  documentBody: HTMLElement | null = null;

  constructor(
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.documentBody = document.querySelector('body');
    this.handleToggleModal();
  }

  ngOnDestroy(): void {
    this.closeModalSubscription$.unsubscribe();
  }

  handleToggleModal() {
    this.closeModalSubscription$ = this.modalService.toggleModal.subscribe((isShowing) => {
      if (isShowing) this.showModal = isShowing;
      else setTimeout(() => {
        this.documentBody?.classList.remove('tw-overflow-clip');
        this.showModal = isShowing;
      }, 400);
      this.changeDetectorRef.detectChanges();
    });
  }

}
