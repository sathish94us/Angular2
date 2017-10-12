import {Component,OnInit,Input} from '@angular/core'
import {ActivatedRoute,Router,Params} from '@angular/router';
@Component({
  templateUrl: './department-detail.component.html',
})

export class DepartmentDetailComponent implements OnInit 
{
    public departmentId;
    constructor(private route:ActivatedRoute,private router:Router){}
    ngOnInit()
    {
/*      let id=this.route.snapshot.params['id'];
      this.departmentId=id;
      console.log(this.route);*/

      this.route.params.subscribe((params:Params)=>
      {
        let id=parseInt(params['id']);
        this.departmentId=id;
      })
    }

    goprevious()
    {
      let preid=this.departmentId-1;
      this.router.navigate(['/departments',preid]);
    }

    gonext()
    {
      let nextid=this.departmentId+1;
      this.router.navigate(['/departments',nextid]);
    }
}
