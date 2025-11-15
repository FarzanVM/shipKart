import { Component } from '@angular/core';
import { Header } from "../../../shared/components/header/header";

@Component({
  selector: 'app-main-layout',
  standalone:true,
  imports: [Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
