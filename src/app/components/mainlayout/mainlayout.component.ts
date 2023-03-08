import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SendDataService } from './../../services/send-data.service';
import { Icontactus } from './../../models/icontactus';
import { Isubscribe } from './../../models/isubscribe';
@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit{
  contactUsForm: FormGroup;
  subscribeForm:FormGroup ;
  showNavBar:boolean = false ;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  subscribeBtnClick:boolean = false ;

  constructor(
    private FormBuild: FormBuilder, 
    private sendFormsApi : SendDataService,
    private userMessageSnackBar: MatSnackBar,
    ){
    this.contactUsForm = FormBuild.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,}(@)[a-zA-Z0-9]{3,}(?!\s)(.com)')]],
      name: ['',[Validators.required ,Validators.pattern('[a-zA-Z /s]{4,}')]],
      phone_number: ['',[Validators.required,Validators.pattern('^[01][0-9]{9}$')]],
      subject: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9 /s]{4,}')]],
      message: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9 /s]{10,}')]],
    });
    this.subscribeForm = FormBuild.group({
      email:['', [Validators.required ,  Validators.pattern('[a-zA-Z0-9]{4,}(@)[a-zA-Z0-9]{3,}(?!\s)(.com)')]]
    })
  }
  ngOnInit(): void {
  }
  get SubscribeEmail(){
    return this.subscribeForm.get('email');
  }
  get Email(){
    return this.contactUsForm.get('email');
  }
  get Name(){
    return this.contactUsForm.get('name');
  }
  get MobileNumber(){
    return this.contactUsForm.get('phone_number');
  }
  get Subject(){
    return this.contactUsForm.get('subject');
  }
  get Message(){
    return this.contactUsForm.get('message');
  }
  SubmitContactUsForm(){
    const ContactusObserver =
    {
      next: (ressponse:any) => {
        console.log(ressponse)
        this.openSnackBar('Thank you ... we will contact soon...')
      },
      error: (err:Error)=>{
        console.log(err)
        this.openSnackBar('error')
      } ,
    }

    
    let contactusInfo :Icontactus = this.contactUsForm.value as Icontactus ;
    this.sendFormsApi.sendContactusForm(contactusInfo).subscribe(ContactusObserver)
  }
  SubmitSubscribeForm(){
    const subscribeObserver =
    {
      next: () => {
        this.openSnackBar('Thank you for subscribing...')
      },
      error: (err:Error)=>{
        console.log(err)
        this.openSnackBar('error')
      } ,
    }

    let subscribeInfo :Isubscribe = this.subscribeForm.value as Isubscribe ;
    this.sendFormsApi.sendSubscribeForm(subscribeInfo).subscribe(subscribeObserver);
  }
  toggle(){ 
    this.showNavBar = true
  document.getElementsByClassName("navslide")[0].classList.toggle("navslide2");
  }
  openSnackBar(snackBarMessage:string) {
    this.userMessageSnackBar.open(snackBarMessage ,"" ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5* 1000,
      panelClass:["mt-5","fs-6","fw-bold"]
    });
  }

}
