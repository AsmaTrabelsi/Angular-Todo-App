import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute, private router :Router,private datePipe: DatePipe) {
    
  }
  ngOnInit(): void {
  }


  selectedDate: Date =  new Date();

  onDateSelect(date: Date) {
    this.selectedDate = date;
    const localDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    this.router.navigate(['/tasks', localDate]);

  }

}
