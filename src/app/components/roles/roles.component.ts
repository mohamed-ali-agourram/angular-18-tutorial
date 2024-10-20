import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html'
})
export class RolesComponent {
  role: string = '';
  state: string = '';

  showWelcomeAlert(e: Event) {
    e.preventDefault();
    alert(`Role: ${this.role}, State: ${this.state}`);
  }
}
