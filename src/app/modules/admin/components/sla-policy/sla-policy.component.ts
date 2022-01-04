import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sla-policy',
  templateUrl: './sla-policy.component.html',
  styleUrls: ['./sla-policy.component.scss'],
})
export class SlaPolicyComponent implements OnInit {
  policies: any;

  timeZones: any;

  constructor() {}

  ngOnInit(): void {
    this.policies = [
      {
        Priority: 'high',
        Respond_within: '2hrs',
        Resolve_within: '12 hrs',
        Operational_Hrs: '12hrs',
        Escalation_Email: 'true',
      },
    ];
    this.timeZones = [
      { format: 'Hours', code: 'Hrs' },
      { format: 'minutes', code: 'Mins' },
      { format: 'days', code: 'Days' },
      { format: 'months', code: 'Mos' },
    ];
  }
}
