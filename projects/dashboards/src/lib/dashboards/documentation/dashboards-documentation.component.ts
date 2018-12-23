import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-dashboards-documentation',
	templateUrl: './dashboards-documentation.component.html',
	styleUrls: ['./dashboards-documentation.component.scss']
})
export class ForgeDashboardsSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);

		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-dashboards/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
