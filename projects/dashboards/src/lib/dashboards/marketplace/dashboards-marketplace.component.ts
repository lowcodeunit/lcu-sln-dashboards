import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-dashboards-marketplace',
	templateUrl: './dashboards-marketplace.component.html',
	styleUrls: ['./dashboards-marketplace.component.scss']
})
export class ForgeDashboardsSolutionMarketplace extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}
	//	Life Cycle

	//	API Methods

	//	Helpers
}
