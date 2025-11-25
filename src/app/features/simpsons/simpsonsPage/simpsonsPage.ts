import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { SimpsonsService } from '../services/simpsons-service';
import { PaginationService } from '../../../share/services/paginationServices';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Pagination } from "../../../share/components/pagination/pagination";
import { HeroSimpsons } from "../components/hero-simpsons/hero-simpsons";
import { Breadcrumbs } from "../../../share/components/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Pagination, HeroSimpsons, Breadcrumbs],
  templateUrl: './simpsonsPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class SimpsonsPage {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);
  charactersPerPage = signal(10);


  // simpsonsResource = toSignal(
  //   this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
  //     map(res => res)
  //   ),
  //   { initialValue: null }
  // );

  // Signal que mantiene el número total de páginas
  totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      if (this.simpsonsResource1.hasValue()) {
        this.totalPages.set(this.simpsonsResource1.value().pages);
      }
    });
  }

  simpsonsResource1 = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.charactersPerPage(),
    }),

    stream: ({ params }) => {
      return this.simpsonsService.getCharactersOptions({
        offset: params.page,
        limit: params.limit,
      });
    },
  });

}

