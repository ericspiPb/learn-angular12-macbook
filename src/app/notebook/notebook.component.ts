import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { pick } from 'lodash';

import { ProductService } from '../services/product.service';
import { MacbookPro } from '../models/macbook-pro.model';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent {

  macbooks: MacbookPro[] = [];

  constructor(private productService: ProductService) {
    this.productService.getMacbookInfo()
                       .pipe(take(1))
                       .subscribe((macbooks: MacbookPro[]) => {
                        this.macbooks = this.macbooks.concat(macbooks);
                       });
                       //pick<MacbookPro>(macbooks[0], ['name', 'color', 'chip', 'memory', 'storage'])
  }
}
