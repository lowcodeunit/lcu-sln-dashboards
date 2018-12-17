import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';


@Component({
    selector: 'forge-solution-dashboards-manage',
    templateUrl: './dashboards-manage.component.html',
    styleUrls: ['./dashboards-manage.component.scss']
})
export class ForgeDashboardsSolutionManage extends ForgeGenericSolution
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
