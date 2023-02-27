import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { FoodItem } from './food.model';
import { FoodService } from './food.service';

describe('Service - HttpTest -FoodService', () => {
  let service: FoodService;
  let controller: HttpTestingController;
  let data: any[] = [];

  beforeEach(() => {
    (data = [
      { name: 'Rehgulasch', rating: 2 },
      { name: 'Leberkäse', rating: 2 },
    ]),
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FoodService],
      });

    service = TestBed.inject(FoodService);
    controller = TestBed.inject(HttpTestingController);

    // setup the service mock
    const url = `${environment.apiUrl}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');

    // flushing down mock data
    req.flush(data);

    // make sure all requests are completed
    controller.verify();

    // set the state
    const fs: any = service;
    fs.setState(data);
  });

  // Verify that there are no pending HTTP requests
  afterEach(() => {
    controller.verify();
  });

  it('should be created and correctly setup', () => {
    expect(service).toBeTruthy();
    service.getItems().subscribe((items) => {
      expect(items).toBe(data);
    });
  });

  it('should return initialized the data', (done) => {
    service.getItems().subscribe((items) => {
      expect(items.length).toEqual(2);
      done();
    });
  });

  it('should create a post in an array', (done) => {
    service.addItem({ name: 'Gulasch', rating: 2 });

    service.getItems().subscribe((items) => {
      expect(items.length).toEqual(3);
      done();
    });
  });

  it('should return the correct amount of items', (done) => {
    service.addItem({ name: 'Gulasch', rating: 2 });
    service.addItem({ name: 'Panierter Kabeljau', rating: 3 });

    service.getItems().subscribe((items) => {
      expect(items.length).toEqual(4);
      expect(items[1].name).toEqual('Leberkäse');
      done();
    });
  });

  it('should have the correct number of items after delete', (done) => {
    const reh: FoodItem = { name: 'Rehgulasch', rating: 2 };
    service.deleteItem(reh);

    service.getItems().subscribe((items) => {
      expect(items.length).toEqual(1);
      expect(items).toEqual([{ name: 'Leberkäse', rating: 2 }]);
      done();
    });
  });
});
