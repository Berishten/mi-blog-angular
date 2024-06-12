import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { BlogService } from '../../services/blog.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getCategories().subscribe(categorias => this.categorias = categorias);
  }

}
