import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { AuthService } from '../../service/auth.service';
import { BookService } from '../../service/book.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgForOf, AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf,
    NgForOf,
    FormsModule,
    AsyncPipe,
    CommonModule,
    FormsModule,
    MatSnackBarModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {}
