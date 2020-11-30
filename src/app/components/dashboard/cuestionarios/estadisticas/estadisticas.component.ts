import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  idCuestionario: number;
  loading = false;
  listRespuestaCuestionario: RespuestaCuestionario[] = [];

  constructor(private aRoute: ActivatedRoute,
    private respuestaCuestionarioService: RespuestaCuestionarioService,
    private toastr: ToastrService) {
    this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getListCuestionarioRespuesta();
  }

  getListCuestionarioRespuesta(): void {
    this.loading = true;
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario).subscribe(data => {
      this.loading = false;
      this.listRespuestaCuestionario = data;
      console.log(this.listRespuestaCuestionario);
    });
  }

  eliminarRespuestaCuestionario(idRtaCuestionario: number): void {
    if (confirm('¿Está seguro que desea eliminar las estadísticas del participante seleccionado?')) {
    this.loading = true;
    this.respuestaCuestionarioService.eliminarRespuestaCuestionario(idRtaCuestionario).subscribe(data => {
      this.loading = false;
      this.toastr.success('La respuesta al cuestionario fue eliminada con éxito', 'Registro Eliminado');
      this.getListCuestionarioRespuesta();
    }, error => {
      this.loading = false;
    });
  }
}

}
