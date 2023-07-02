import { Component } from '@angular/core';

import { OnExit } from "./../../../guards/exit.guard";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  // Tenemos aqui la logica del guardian desde el componente
  onExit(){
    return confirm("Logica desde el componente, ¿Estas seguro de salir?");
  }
}
