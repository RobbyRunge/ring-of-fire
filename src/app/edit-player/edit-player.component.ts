import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {

  allProfilePicture = ['1.webp', '2.png', 'monkey.png', 'pinguin.svg', 'serious-woman.svg', 'winkboy.svg'];

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  onNoClick(): void{
    this.dialogRef.close();
  }
}
