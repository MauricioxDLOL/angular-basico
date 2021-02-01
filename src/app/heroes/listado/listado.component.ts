import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor","Capitan America"];
  heroeBorrado: string = "";

  borrarHeroe(heroe:string){

    let posicionHeroeEliminado = this.heroes.indexOf(heroe);

    if(posicionHeroeEliminado !== -1){

      this.heroeBorrado = (this.heroes.splice(posicionHeroeEliminado,1)).toString();

      console.log(this.heroeBorrado)

    }

    
  
  }
  
}
