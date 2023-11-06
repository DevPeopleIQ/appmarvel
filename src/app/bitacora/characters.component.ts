import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security/security.service';
import { MarvelService } from '../services/security/marvel.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit{

  dataSource: any;
  displayedColumns = ['idBitacoraAccesoApi', 'codigoApi', 'fechaConsulta'];

  constructor(public marvelService: MarvelService,public securityService: SecurityService){

  }

  ngOnInit() {
    this.init();    
  }

  
  async init(){
    this.securityService.getJWT().subscribe((data) => {
      let token = data.token.toString();
      console.log(token);

      this.marvelService.getBitacora(token).subscribe((data2) => {
        
        console.log(data2);

        this.dataSource = data2
      });

    });

  }
  
}
