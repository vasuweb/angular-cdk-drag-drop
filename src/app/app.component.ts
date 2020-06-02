import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public oneToThree:number = 0;
  public oneToTwo:number = 0;
  
  public oneToTwoLtR:number = 0;
  public oneToTwoRtL:number = 0;
  public oneToThreeLtR:number=0
  public oneToThreeRtL:number=0;
  public disableDivTwo:boolean = false;
  public disableDivThree:boolean = false;

  mainList = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];
  
  todos = [
  ];
  
  completed= [];
  pending = [];

  ngOnInit()
  {
    this.resetList();
  }

  private resetList() {
    this.todos = [];
    setTimeout(() => {
      this.todos = this.mainList.slice();
    }, 0);    
  }


  onDrop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer !== event.container) { // NOT within the same block
        if(event.previousContainer.id == "cdk-drop-list-0") 
        {
          //moved left to right
          if(this.oneToTwoLtR == 0)
          {
            this.oneToTwoRtL = 0;
            this.oneToTwoLtR++;
            copyArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex, event.currentIndex);
          }
        } else {
          //moved right to left
          if(this.oneToTwoRtL == 0)
          {
            this.oneToTwoRtL++;
            this.oneToTwoLtR = 0;
            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex, event.currentIndex);
          }
        }
    }
    this.resetList();
    this.disableDivTwo = (this.completed.length > 0) ? true : false;
  }
  

  onDrag(event: CdkDragDrop<string[]>) {
    if(event.previousContainer.id == "cdk-drop-list-0") 
    {
      //moved left to right
      if(this.oneToThreeLtR == 0)
      {
        this.oneToThreeRtL = 0;
        this.oneToThreeLtR++;
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex, event.currentIndex);
      }
    } else {
      //moved right to left
      if(this.oneToThreeRtL == 0)
      {
        this.oneToThreeRtL++;
        this.oneToThreeLtR = 0;
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex, event.currentIndex);
      }
    }
    this.resetList();
    console.log(this.pending.length);
    this.disableDivThree = (this.pending.length > 0) ? true : false;
  }

  clearBoxOne()
  {
    this.oneToTwoRtL = 0;
    this.oneToTwoLtR = 0;
    this.completed = [];
    this.disableDivTwo = false;
  }

  clearBoxTwo(){
    this.oneToThreeLtR = 0;
    this.oneToThreeRtL = 0;
    this.pending = [];
    this.disableDivThree = false;
  }

  test(event: CdkDragDrop<string[]>) {
    console.log("testig");
  }

}
