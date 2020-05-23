import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesFeatureComponent } from './articles-feature/articles-feature.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { ArticlesRecentComponent } from './articles-recent/articles-recent.component';
import { ArticlesCategoriesComponent } from './articles-categories/articles-categories.component';
import { MaterilModule } from '../material/material.module';

@NgModule({
  declarations: [ArticlesFeatureComponent, ArticlesListComponent, ArticlesDetailsComponent, ArticlesRecentComponent, ArticlesCategoriesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterilModule
  ],
  exports:[
    ArticlesFeatureComponent
  ]
})
export class ArticlesModule { }
