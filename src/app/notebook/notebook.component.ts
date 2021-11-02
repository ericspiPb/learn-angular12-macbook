import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent {

  macbooks = this.productService.getMacbookInfo();

  constructor(private productService: ProductService) { }
}
