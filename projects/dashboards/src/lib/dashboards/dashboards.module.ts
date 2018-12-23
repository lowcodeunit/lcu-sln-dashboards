import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FathymSharedModule } from "@lcu/hosting";
import { BaseSolutionModule } from "@lcu/solutions";
import { NgxMarkdownDocsModule } from "@lowcodeunit/ngx-markdown-docs";
import { ForgeDashboardsSolutionManage } from "./manage/dashboards-manage.component";
import { ForgeDashboardsSolutionDocumentation } from "./documentation/dashboards-documentation.component";
import { ForgeDashboardsSolutionHeading } from "./heading/dashboards-heading.component";
import { ForgeDashboardsSolutionMarketplace } from "./marketplace/dashboards-marketplace.component";
import { ForgeDashboardsSolutionOverview } from "./overview/dashboards-overview.component";
import { ReactiveFormsModule } from "@angular/forms";

export class ForgeDashboardsSolutionDisplayModule extends BaseSolutionModule {
  public Documentation() {
    return ForgeDashboardsSolutionDocumentation;
  }

  public Heading() {
    return ForgeDashboardsSolutionHeading;
  }

  public Manage() {
    return ForgeDashboardsSolutionManage;
  }

  public Marketplace() {
    return ForgeDashboardsSolutionMarketplace;
  }

  public Overview() {
    return ForgeDashboardsSolutionOverview;
  }
}

var comps = [
  ForgeDashboardsSolutionDocumentation,
  ForgeDashboardsSolutionHeading,
  ForgeDashboardsSolutionManage,
  ForgeDashboardsSolutionMarketplace,
  ForgeDashboardsSolutionOverview
];

@NgModule({
  imports: [
    FathymSharedModule,
    NgxMarkdownDocsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [...comps],
  exports: [...comps],
  entryComponents: [...comps]
})
export class ForgeDashboardsSolutionModule {}
