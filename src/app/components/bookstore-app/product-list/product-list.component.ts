import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
   BookService : BooksService
  
  constructor(BooksService : BooksService) { 

    this.BookService = BooksService;
  }

  ngOnInit(): void {

  this.livros = this.BookService.getBook().subscribe(( data => {

    this.livros = data;
    console.log(this.livros);
  }))
  }

}
