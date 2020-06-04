import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDragExit, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public oneToThreeLtR:number=0
  public oneToThreeRtL:number=0;
  public sourceOne:string='';
  public sourceTwo:string='';

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

  /*
  This function is called when:  
    Source(s) items drags into the Source-1 list.
  */
  onDrop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer !== event.container) { // NOT within the same block
        
        if(event.previousContainer.id == "cdk-drop-list-0") 
        {
          //moved left to right
            copyArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex, event.currentIndex);
        } else {
          //moved right to left
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex, event.currentIndex);
            this.sourceOne = null;
        }
    }
    this.resetList();
    if(this.completed.length > 0)
    {
      this.deleteCompletedSet(1);
      this.sourceOne = this.completed[0].name;
    }
  }

  /*
  This function is called when:  
    Source(s) items drags into the Source-2 list.
  */
  onDrag(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) { // NOT within the same block
      if(event.previousContainer.id == "cdk-drop-list-0") 
      {
        //moved left to right
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex, event.currentIndex);
      } else {
        //moved right to left
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex, event.currentIndex);
          this.sourceTwo = '';
      }
    }
    this.resetList();
    if(this.pending.length > 0)
    {
      this.deletePendingSet(1);
      this.sourceTwo = this.pending[0].name;
    }
  }

  // remove the item from the completed array list
  deleteCompletedSet(index:number) {
    if (index > 0) {
        this.completed.splice(index, 1);
    }        
  }

  // remove the item from the pending array list
  deletePendingSet(index:number) {
    if (index > 0) {
        this.pending.splice(index, 1);
    } else {
      this.pending = [];
    }
  }

  /*
    This function is called when we drag items from source-2 to source(s) list items
  */
  removeSourceTwoItems(event: CdkDragExit<string[]>)
  {
    this.sourceTwo = '';
    this.deletePendingSet(1);
    
  }

}
