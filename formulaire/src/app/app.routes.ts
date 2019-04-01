import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { PATH , PATH_BI_DIRECTIONNEL,PATH_TYPESCRIPT_FIRST, PATH_VALIDATOR, PATH_STYLES} from './app.routes.constantes';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypescriptFirstComponent } from './typescript-first/typescript-first.component';
import { ValidatorsComponent } from './validators/validators.component';
import { StylesComponent } from './styles/styles.component';


export const ROUTES: Routes = [
    {path: PATH, component: TemplateComponent},
    {path: PATH_BI_DIRECTIONNEL, component:TwoWayBindingComponent } ,
    {path: PATH_TYPESCRIPT_FIRST, component:TypescriptFirstComponent } ,
    {path: PATH_VALIDATOR, component:ValidatorsComponent } ,
    {path: PATH_STYLES, component:StylesComponent } ,
];