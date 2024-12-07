import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front';

  users: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any[]>(`http://localhost:3000/users`)
      .pipe(

    )
      .subscribe((data: any[]) => {
        this.users = data;
        console.log(data);
      });
  }
}
