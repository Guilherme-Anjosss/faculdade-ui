import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiciplinaListaComponent } from "./diciplina-lista/diciplina-lista.component";
import { DiciplinaCadastroComponent } from "./diciplina-cadastro/diciplina-cadastro.component";

const routes: Routes = [
    {
        path: '',
        component: DiciplinaListaComponent
    },
    {
        path: 'novo',
        component: DiciplinaCadastroComponent
    },
    {
        path: ':id',
        component: DiciplinaCadastroComponent
    }
];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule],
declarations:[],
providers:[]

})

export class DiciplinaRoutinhModule {}

