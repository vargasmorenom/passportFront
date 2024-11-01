import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,Validators, FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public form: any;
  cliente: any;
  errorMessage: string = '';

constructor(public fb: FormBuilder,public consulta:ClienteService){this.createForm();}

createForm(){
  this.form = this.fb.group({
   numeroCedula:['',[Validators.required,Validators.pattern(/^[0-9]{8,11}$/)]],
   tipo:['',[Validators.required]]

  });
 }

 get numeroCedula(){
  return this.form.get('numeroCedula')?.invalid && this.form.get('numeroCedula')?.touched && this.form.get('numeroCedula')?.dirty;
}

get tipo(){
  return this.form.get('tipo')?.invalid && this.form.get('tipo')?.touched && this.form.get('tipo')?.dirty;
}

enviar(){

  console.log(this.form.value);
  this.consulta.getCliente(this.form.value.tipo,this.form.value.numeroCedula).subscribe((data)=>{
    console.log(data);
  });
}

}
