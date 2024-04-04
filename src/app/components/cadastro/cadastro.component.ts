import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Animal {
  nome: string;
  raca: string ;
  email: string;
  idade: number;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  animalForm: FormGroup;
  animais: Animal[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.animalForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      raca: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.animalForm.valid) {
      const animal: Animal = {
        nome: this.animalForm.value.nome,
        raca: this.animalForm.value.raca,
        email: this.animalForm.value.email,
        idade: this.animalForm.value.idade
      };
      this.animais.push(animal);
      this.animalForm.reset();
    }
  }

  removerAnimal(index: number) {
    this.animais.splice(index, 1);
  }  

  isIdadeMaiorQueQuinze(idade: number): boolean {
    return idade > 15;
  }
  
}