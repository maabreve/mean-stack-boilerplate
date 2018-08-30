import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchItemComponent  } from './components/search-item/search-item.component';
import { ItemsFoundComponent  } from './components/items-found/items-found.component';

const COMPONENTS = [ SearchItemComponent,
                    ItemsFoundComponent ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class ListsModule { }
