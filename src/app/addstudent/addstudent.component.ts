import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:DataService) { }
  employee:Array<any>=[];
  emp:Emp;
  error:string;

  addData(){

    this.emp ={eId:101,eName:'rudresh',eEmail:'rudresh@gmail.com',ePassword:'rudresh@123',eAge:20,eSalary:1200}


    this.service.add(this.emp).subscribe(res=>{
      if(res==1){

        this.service.view().subscribe(res=>{

          console.log(res)
          this.employee = res;
          console.log(this.employee)
        })
      
      }
      else{

        this.error ="no data added.."

      }
    })


  }
  delete(eId){

    this.service.delete(eId).subscribe(res=>{

      if(res==1){
        console.log('data deeleted')
      }
      else{
        console.log('data not deleted..')
      }
    })

  }

  ngOnInit(): void {

  /*   
    this.service.view().subscribe(res=>{

      console.log(res)
      this.employee = res;
      console.log(this.employee)
    }) */
  }

}
