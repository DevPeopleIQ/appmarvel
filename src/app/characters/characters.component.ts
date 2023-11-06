import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security/security.service';
import { MarvelService } from '../services/security/marvel.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  lstCharacter: any;

  constructor(public marvelService: MarvelService,public securityService: SecurityService){

  }

  ngOnInit() {
    this.init();    
  }

  
  async init(){
    this.securityService.getJWT().subscribe((data) => {
      let token = data.token.toString();
      console.log(token);

      this.marvelService.getAllCharacters(token).subscribe((data2) => {
        
        console.log(data2.data.results);

        this.lstCharacter = data2.data.results;
      });

    });

  }


  async getCharacterById(idCharacter:string){
    this.securityService.getJWT().subscribe((data) => {
      let token = data.token.toString();
      console.log(token);

      debugger;

      this.marvelService.getAllCharactersById(token,idCharacter).subscribe((data2) => {
        
        console.log("getAllCharactersById" + data2.data.results);
          alert('Identificador: ' + data2.data.results[0].id + "\nNombre: " + data2.data.results[0].name);
        });

    });

  }
  
}
