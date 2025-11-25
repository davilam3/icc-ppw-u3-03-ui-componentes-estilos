import { Component } from '@angular/core';
import { Drawer } from "./components/drawer/drawer";
import { Tabla } from "./components/tabla/tabla";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { Codsimulado } from "./components/codsimulado/codsimulado";
import { Condicional } from "./components/condicional/condicional";
import { Avatar } from "./components/avatar/avatar";
import { Select } from "./components/select/select";


@Component({
  selector: 'app-daisyui-page',
  imports: [Tabla, Card, Codsimulado, Condicional, Avatar, Select],
  templateUrl: './daisyui-page.html',
  styleUrl: './daisyui-page.css',
})
export class DaisyuiPage {

}
