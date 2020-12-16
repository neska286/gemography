import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IRepos } from 'src/app/repos';
import {DataService} from '../../services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 allRepos : IRepos [];
 notEmptyRepos = true;
 notScrolly = true;
 pageNumber : number = 1
  
 
 

  constructor( private dataService : DataService,private http:HttpClient , private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
this.dataService.getAllRepos().subscribe((data)=>{
  this.allRepos = data["items"];
  console.log(data)
})
  }




  onScroll(){
  if (this.notEmptyRepos && this.notScrolly){
    this.spinner.show();
    this.notScrolly = false;
    this.pageNumber++;
    console.log(this.pageNumber);
    this.loadNextPage();
    console.log("spinner !")
 
  }
}
  
   // load next page
   loadNextPage(){
    const url = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page="+this.pageNumber;

    // call http request
    this.http.get(url).subscribe((data)=>{
     const newRepo = data["items"];
     console.log(newRepo);
     this.spinner.hide();
       if(newRepo.length === 0){
         this.notEmptyRepos = false;
       }
       this.allRepos = this.allRepos.concat(newRepo);
       this.notScrolly = true;
    })
 
 }
   }

