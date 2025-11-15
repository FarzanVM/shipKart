import { Component } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { Footer } from "../../../shared/components/footer/footer";
import { AdminRoutingModule } from "../../../pages/admin/admin-routing.module";

@Component({
  selector: 'app-main-layout',
  standalone:true,
  imports: [Header, Footer, AdminRoutingModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
