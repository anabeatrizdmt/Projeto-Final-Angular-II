import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BetRoutingModule } from './bet-routing.module';
import { BetComponent } from './bet.component';
import { CreateBetComponent } from './components/create-bet/create-bet.component';
import { ListBetComponent } from './components/list-bet/list-bet.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
    declarations: [
        BetComponent,
        CreateBetComponent,
        ListBetComponent,
        ResultComponent
    ],
    imports: [
        BetRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        MatChipsModule,
        MatExpansionModule,
    ]
})
export class BetModule { }
