
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fg = new FormGroup({
    fname: new FormControl("", [Validators.required]), aadhar: new FormControl("", [Validators.required]), dob: new FormControl("", [Validators.required]), gender: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]), date: new FormControl("", [Validators.required]), time: new FormControl("", [Validators.required]), lab: new FormControl("", [Validators.required]), report: new FormControl("", [Validators.required])
    , result: new FormControl("", [Validators.required])
  });
  store: any = [];
  input: any;
  headers = ["First Name", , "Aadhar Number", "Date of Birth", "Gender", "City", "Date Of Test", "Time Of Test", "Lab Name",
    "Report Number", "Result"];
  title: any;
  searchvalue: any = [];
  add() {
    if (this.fg.dirty === true) {
      console.log(this.store.push(this.fg.value));
      console.log(this.store);
      this.fg.reset();
      (<HTMLDivElement>document.getElementById("msg")).style.display = "none";
    }
  }
  search() {
    console.log((<HTMLDivElement>document.getElementById("find")).innerHTML);
    if ((<HTMLDivElement>document.getElementById("find")).innerText == "") {
      (<HTMLDivElement>document.getElementById("msg")).innerText = "no records";
    }
    this.input = (<HTMLInputElement>document.getElementById("find")).value;
    this.store.forEach((element: any) => {
      if (element.aadhar == this.input) {
        this.searchvalue.push(element);
      }
    });
    (<HTMLInputElement>document.getElementById("find")).value = "";
  }
  removefield() {
    (<HTMLTableRowElement>document.getElementById('tr')).style.display = "none";
  }
}