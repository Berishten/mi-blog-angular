import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://mi-api.cl';

  constructor(private http: HttpClient) { }
  private posts = [
    { id: 1, category: 1, title: 'Angular', date: "12/06/2024", imageUrl: "https://www.cloudi5.com/uploads/blog/250619011925_blog_image.png", content: 'Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.\nLa biblioteca lee el HTML que contiene atributos de las etiquetas personalizadas adicionales, entonces obedece a las directivas de los atributos personalizados, y une las piezas de entrada o salida de la página a un modelo representado por las variables estándar de JavaScript.\nAngular se basa en clases tipo "Componentes", cuyas propiedades son las usadas para hacer el binding de los datos. En dichas clases tenemos propiedades (variables) y métodos (funciones a llamar).\n\nAngular es la evolución de AngularJS aunque incompatible con su predecesor.', },
    { id: 2, category: 2, title: 'NgRx', date: "12/06/2024", imageUrl: "https://seeklogo.com/images/N/ngrx-logo-D484A6B4B3-seeklogo.com.png", content: 'NgRx es una biblioteca para la gestión del estado en aplicaciones Angular, diseñada según el patrón Redux. Proporciona una estructura organizada y escalable para manejar el estado de la aplicación, lo cual es especialmente útil en situaciones donde los datos son complejos y las interacciones entre componentes son numerosas', },
    { id: 3, category: 3, title: 'TypeScript', date: "12/06/2024", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", content: 'TypeScript es un lenguaje de programación desarrollado por Microsoft que se basa en JavaScript y agrega características de tipado estático opcional. Esto significa que TypeScript permite definir tipos para variables, parámetros de funciones y objetos, lo que ayuda a detectar errores en tiempo de compilación y facilita el desarrollo de código más robusto y mantenible. Además del tipado estático, TypeScript también soporta características modernas de JavaScript, como clases, interfaces, módulos y funciones flecha, lo que lo convierte en una opción poderosa para el desarrollo de aplicaciones web y de servidor. Al compilar, el código TypeScript se transforma en JavaScript estándar, asegurando la compatibilidad con todos los navegadores y entornos de ejecución que admiten ECMAScript 5 y superiores.', },
    { id: 4, category: 2, title: 'RouterModule ', date: "12/06/2024", content: 'RouterModule es un módulo de Angular que proporciona funcionalidades para la configuración y gestión del enrutamiento en una aplicación web. Permite definir rutas para diferentes vistas y componentes basados en URLs, facilitando la navegación dentro de la aplicación de manera organizada y estructurada. Con RouterModule, se pueden configurar rutas estáticas y dinámicas, establecer redirecciones, proteger rutas con guardias, y gestionar parámetros de URL y datos de ruta. Este módulo es fundamental para aplicaciones Angular que requieren múltiples vistas y la capacidad de cambiar dinámicamente entre ellas según la interacción del usuario.', }
  ]

  getPosts(): Observable<Post[]> {
    // return this.http.get<Post[]>(`${this.apiUrl}/posts`);
    return of(this.posts);
  }

  getPostsByCategory(category: number): Observable<Post[]> {
    return of(
      this.posts.filter(p => p.category == category)
    );
  }

  getPostById(id: number): Observable<Post | undefined> {
    return of(
      this.posts.find(p => p.id === id)
    );
  }

  getCategories(): Observable<Category[]> {
    return of([
      { id: 1, name: 'Angular' },
      { id: 2, name: 'Módulos' },
      { id: 3, name: 'TypeScript' },
    ])
  }
}

