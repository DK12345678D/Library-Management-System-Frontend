import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf,
    FormsModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  title = '';
  author = '';
  isbn = '';
  error = '';
  success = '';

  constructor(private bs: BookService, private router: Router) {}

  onSubmit() {
    this.error = this.success = '';
    const book: Book = {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      available: true,
    };
    this.bs.addBook(book).subscribe({
      next: () => {
        this.success = 'Book added';
        setTimeout(() => this.router.navigate(['/']), 800);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to add book (are you admin?)';
      },
    });
  }
}
